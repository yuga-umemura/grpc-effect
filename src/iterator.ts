/**
 * イテレータ
 * .next()メソッドをもつ
 * .next()を実行すると、イテレータリザルトを返す
 */
const iterator: Iterator<number, void, undefined> = (() => {
  let current = 0;
  const limit = 5;

  return {
    next() {
      if (current < limit) {
        return {
          value: current++,
          done: false,
        };
      }
      return {
        value: undefined,
        done: true,
      };
    },
  };
})();

/**
 * イテラブルなオブジェクト
 * [Symbol.iterator]()メソッドを実行するとイテレータを返す
 */
const obj: Iterable<number> = {
  [Symbol.iterator](): Iterator<number, void, undefined> {
    return iterator;
  },
};

let result = obj[Symbol.iterator]().next();
while (!result.done) {
  console.log(result.value);
  result = iterator.next();
}

// for (const v of obj) {
//   console.log(v);
// }
