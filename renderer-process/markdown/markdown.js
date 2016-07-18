/**
 * @fileoverview markdown编辑器
 * @version 1.0.0 | 2016-07-18 版本信息
 * @author Zhang Mingrui | 592044573@qq.com
 * */

const {Editor} = require('./editor'),
    markdown = require( "markdown" ).markdown,
    $ = require('jquery');
require('./marked');

/**
 * 初始化markdown
 */
(() => {
    const outNode = $('#js-markdown-out'),
        textarea = $('#js-markdown-textarea').get(0),
        codeNode = $('#js-markdown-code');
    
    //初始化编辑器
    var editor = new Editor({
        element: textarea
    });
    editor.render();
    
    //绑定预览效果
    $('#js-markdown-preview').on('click',function(e){
        outNode.html(markdown.toHTML(editor.codemirror.getValue()));
    });
    outNode.html(markdown.toHTML(codeNode.val()));
})();
