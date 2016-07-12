/**
 * @fileoverview 写博客
 * @version 1.0.0 | 2016-07-12 版本信息
 * @author Zhang Mingrui | 592044573@qq.com
 * */

const ipc = require('electron').ipcRenderer;

const asyncMsgBtn = document.getElementById('js-write-ipc'),
    msgNode = document.getElementById('js-write-msg');

asyncMsgBtn.addEventListener('click', function () {
  ipc.send('asynchronous-message', 'ping')
});

ipc.on('asynchronous-reply', function (event, arg) {
  var message = `Asynchronous message reply: ${arg}`
  msgNode.innerHTML = message;
});