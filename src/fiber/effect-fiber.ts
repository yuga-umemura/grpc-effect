import { Console, Effect, Fiber } from "effect";

const task = (name: string, ms: number) => {
  return Effect.gen(function* (_) {
    yield* _(Console.log(`start ${name}`));
    yield* _(Effect.sleep(ms));
    yield* _(Console.log(`end ${name}`));
  });
};

const sequential = Effect.gen(function* (_) {
  yield* _(Console.log("=== sequential ==="));
  yield* _(task("A", 2000));
  yield* _(task("B", 2000));
});

const parallel = Effect.gen(function* (_) {
  yield* _(Console.log("=== parallel ==="));
  yield* _(
    Effect.all([task("A", 2000), task("B", 2000)], {
      concurrency: "unbounded",
    })
  );
});

const parent = Effect.gen(function* (_) {
  yield* _(Console.log("=== fork sample ==="));
  const fiber = yield* _(Effect.fork(task("child", 2000)));
  yield* _(Console.log("parent: doing something else"));
  yield* _(Effect.sleep(500));
  yield* _(Console.log("parent: waiting child"));
  yield* _(Fiber.join(fiber));
  yield* _(Console.log("parent: done"));
});

Effect.runPromise(
  Effect.gen(function* (_) {
    yield* _(parallel);
    yield* _(parent);
  })
);
