/**
 * @fileoverview 写博客
 * @version 1.0.0 | 2016-07-12 版本信息
 * @author Zhang Mingrui | 592044573@qq.com
 * */
const $ = require('jquery');
const ipc = require('electron').ipcRenderer;

const asyncMsgBtn = $('#js-write-ipc'),
    msgNode = $('#js-write-msg');

asyncMsgBtn.on('click', function () {
  ipc.send('asynchronous-message', 'ping')
});

ipc.on('asynchronous-reply', function (event, arg) {
  var message = `Asynchronous message reply: ${arg}`
  msgNode.html(message);
});