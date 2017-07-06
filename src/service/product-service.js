/*
* @Author: drinkeewu
* @Date:   2017-07-04 21:16:29
* @Last Modified by:   drinkeewu
* @Last Modified time: 2017-07-04 21:16:46
*/

'use strict';

var _gm = require('util/gm.js');

var _product = {
    // 获取商品列表
    getProductList : function(listParam, resolve, reject){
        _gm.request({
            url     : _gm.getServerUrl('/product/list.do'),
            data    : listParam,
            success : resolve,
            error   : reject
        });
    },
    // 获取商品详细信息
    getProductDetail : function(productId, resolve, reject){
        _gm.request({
            url     : _gm.getServerUrl('/product/detail.do'),
            data    : {
                productId : productId
            },
            success : resolve,
            error   : reject
        });
    }
}
module.exports = _product;