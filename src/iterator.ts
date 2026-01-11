/**
 * イテレータ
 * .next()メソッドをもつ
 * .next()を実行すると、イテレータリザルトを返す
 */
const iterator: Iterator<number, void, undefined> = {
  next() {
    const iteratorResult: IteratorResult<number, void> = {
      value: 42,
      done: false,
    };
    return iteratorResult;
  },
};

/**
 * イテラブルなオブジェクト
 * [Symbol.iterator]()メソッドを実行するとイテレータを返す
 */
const obj: Iterable<number> = {
  [Symbol.iterator](): Iterator<number, void, undefined> {
    return iterator;
  },
};

for (const v of obj) {
  console.log(v);
  break;
}
