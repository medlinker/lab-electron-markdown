/**
 * @fileoverview 写博客
 * @version 1.0.0 | 2016-07-12 版本信息
 * @author Zhang Mingrui | 592044573@qq.com
 * */

const ipc = require('electron').ipcMain;

ipc.on('asynchronous-message', function (event, arg) {
    event.sender.send('asynchronous-reply', `我接受到了${arg}`);
});