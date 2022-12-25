import { message } from 'antd';

export function copyText(value) {
  let textareaEl = document.createElement('textarea'); // 创建一个元素
  textareaEl.value = value; // 将需要复制的内容传给该元素作为文本
  document.body.appendChild(textareaEl);
  textareaEl.select(); // 自动选中
  document.execCommand('copy'); // 这个命令会将选中的内容复制到粘贴板中
  document.body.removeChild(textareaEl);
  message.success('复制成功!');
}

export function copyImg(src) {
  let span = document.createElement('span');
  span.innerHTML = src;
  let my_range = document.body.createTextRange();
  my_range.moveToElementText(span);
  my_range.execCommand('copy');
  message.success('复制图片成功');
}
