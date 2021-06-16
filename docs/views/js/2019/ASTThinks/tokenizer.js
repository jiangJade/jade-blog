/*
    1 将代码遍历
    2 判断字符类型 收集字符
    字符有很多种类  开始字符和结束字符不同其他
    3 将收集的字符添加到token数组
*/
let tokens = [];

function start(chat) {
  if (chat === '<') {
  }
  new Error('标签必须以<字符开头');
}

function tokenizer(input) {
  let state = start;
  for (let chat of input) {
    if (state) {
      state = state(chat);
    }
  }
  return tokens;
}
const str = '<h1 title="name">3</h1>';

console.log(tokenizer(str));
