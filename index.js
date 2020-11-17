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
     * @return  {Boolean}
     */
    Util.isObject = function (a) {
        let type = Object.prototype.toString.call(a);
        return type == '[object Object]';
    }

    Util.isArray = function (a) {
        let type = Object.prototype.toString.call(a);
        return type == '[object Array]';
    }

    Util.isBoolean = function (a) {
        let type = Object.prototype.toString.call(a);
        return type == '[object Boolean]';
    }

    Util.isString = function (a) {
        let type = Object.prototype.toString.call(a);
        return type == '[object String]';
    }

    Util.isNumber = function (a) {
        let type = Object.prototype.toString.call(a);
        return type == '[object Number]';
    }

    Util.isUndefined = function (a) {
        let type = Object.prototype.toString.call(a);
        return type == '[object Undefined]';
    }

    Util.isNull = function (a) {
        let type = Object.prototype.toString.call(a);
        return type == '[object Null]';
    }

    Util.isFunction = function (a) {
        let type = Object.prototype.toString.call(a);
        return type == '[object Function]';
    }

    Util.isSymboll = function (a) {
        let type = Object.prototype.toString.call(a);
        return type == '[object Symbol]';
    }

    Util.isRegExp = function (a) {
        let type = Object.prototype.toString.call(a);
        return type == '[object RegExp]';
    }

    Util.isError = function (a) {
        let type = Object.prototype.toString.call(a);
        return type == '[object Error]';
    }

    Util.isDate = function (a) {
        let type = Object.prototype.toString.call(a);
        return type == '[object Date]';
    }

    Util.isMath = function (a) {
        let type = Object.prototype.toString.call(a);
        return type == '[object Math]';
    }

    Util.isGlobal = function (a) {
        let type = Object.prototype.toString.call(a);
        return type == '[object global]';
    }

    Util.isArrayBuffer = function (a) {
        return a instanceof ArrayBuffer;
    }

    Util.isBlob = function (a) {
        return a instanceof Blob;
    }

    Util.isFinite = function (a) {
        return Number.isFinite(a);
    }

    /**
     * @description 时间函数
     */

    /**
     * @description 节流
     */

    /**
     * @description 防抖
     */

    /**
     * @description 浏览器环境判断
     */

    /**
     * @description 复制粘贴
     */



    return Util;
})));