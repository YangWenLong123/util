 /*
 * @description: common function tool library
 * @Author: along
 * @Date: 2020-11-11
 * @Last Modified by: along
 * @Last Modified time: 2020-11-11
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
        typeof define === 'function' && define.amd ? define(factory) :
            (global.Util = factory());
}(this, (function () {
    'use strict';
    let Util = {};

    /**
     * @description 数据类型检测
     */
    Util.isObject = function (a) {
        let type = Object.prototype.toString.call(a);
        return type == '[object Object]'
    }

    return Util;
})));