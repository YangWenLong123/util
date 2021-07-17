 /*
 * @description: common function tool library
 * @Author: ['along']
 * @Date: 2021-07-17
 * @Last Modified by: along
 * @Last Modified time: --
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
        typeof define === 'function' && define.amd ? define(factory) :
            (global.Zsdx = factory());
}(this, (function () {
    'use strict';
    let Zsdx = {};

    /**
     * @description 数据类型检测
     * @return  {Boolean}
     */
    Zsdx.isObject = function (a) {
        let type = Object.prototype.toString.call(a);
        return type == '[object Object]';
    }

    Zsdx.isArray = function (a) {
        let type = Object.prototype.toString.call(a);
        return type == '[object Array]';
    }

    Zsdx.isBoolean = function (a) {
        let type = Object.prototype.toString.call(a);
        return type == '[object Boolean]';
    }

    Zsdx.isString = function (a) {
        let type = Object.prototype.toString.call(a);
        return type == '[object String]';
    }

    Zsdx.isNumber = function (a) {
        let type = Object.prototype.toString.call(a);
        return type == '[object Number]';
    }

    Zsdx.isUndefined = function (a) {
        let type = Object.prototype.toString.call(a);
        return type == '[object Undefined]';
    }

    Zsdx.isNull = function (a) {
        let type = Object.prototype.toString.call(a);
        return type == '[object Null]';
    }

    Zsdx.isFunction = function (a) {
        let type = Object.prototype.toString.call(a);
        return type == '[object Function]';
    }

    Zsdx.isSymboll = function (a) {
        let type = Object.prototype.toString.call(a);
        return type == '[object Symbol]';
    }

    Zsdx.isRegExp = function (a) {
        let type = Object.prototype.toString.call(a);
        return type == '[object RegExp]';
    }

    Zsdx.isError = function (a) {
        let type = Object.prototype.toString.call(a);
        return type == '[object Error]';
    }

    Zsdx.isDate = function (a) {
        let type = Object.prototype.toString.call(a);
        return type == '[object Date]';
    }

    Zsdx.isMath = function (a) {
        let type = Object.prototype.toString.call(a);
        return type == '[object Math]';
    }

    Zsdx.isGlobal = function (a) {
        let type = Object.prototype.toString.call(a);
        return type == '[object global]';
    }

    Zsdx.isArrayBuffer = function (a) {
        return a instanceof ArrayBuffer;
    }

    Zsdx.isBlob = function (a) {
        return a instanceof Blob;
    }

    Zsdx.isFinite = function (a) {
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

    // ...

    return Zsdx;
})));