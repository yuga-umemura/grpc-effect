import { GreeterServer, HelloReply } from "./gen/hello";

export const sayHello: GreeterServer["sayHello"] = (call, callback) => {
  const name = call.request.name || "world";

  const res: HelloReply = { message: `Hello, ${name}!` };
  callback(null, res);
};
