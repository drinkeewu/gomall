/*
* @Author: drinkeewu
* @Date:   2017-07-04 10:24:51
* @Last Modified by:   drinkeewu
* @Last Modified time: 2017-07-04 10:41:29
*/

'use strict';
require('./index.css')
require('page/common/nav-simple/index.js')
var _gm    = require('util/gm.js');

$(function(){
    var type        = _mm.getUrlParam('type') || 'default',
        $element    = $('.' + type + '-success');
    // 显示对应的提示元素
    $element.show();
})