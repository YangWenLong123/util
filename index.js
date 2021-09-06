 /*
 * @description: common function tool library
 * @Author: ['along']
 * @Date: 2021-07-17
 * @Last Modified by: along
 * @Last Modified time: 2021-09-06
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
     * @description 日期格式转换
     * @param   {Number}    dateTmp //时间戳
     * @param   {String}    fmtTmp  //日期格式字符串'yyyy.MM.dd HH:mm:ss'
     */
    Zsdx.dateFormat = function (dateTmp, fmtTmp) {
        if (!dateTmp) {
            return '--';
        }
        let fmt = fmtTmp;
        let date = dateTmp;

        if (!fmt) {
            fmt = 'yyyy.MM.dd';
        }
        if (!(date instanceof Date)) {
            date = new Date(date);
        }
        let o = {
            'M+': date.getMonth() + 1, //月份
            'd+': date.getDate(), //日
            'h+': date.getHours() % 12 == 0 ? 12 : date.getHours() % 12, //小时
            'H+': date.getHours(), //小时
            'm+': date.getMinutes(), //分
            's+': date.getSeconds(), //秒
            'q+': Math.floor((date.getMonth() + 3) / 3), //季度
            S: date.getMilliseconds() //毫秒
        };
        let week = {
            '0': '日',
            '1': '一',
            '2': '二',
            '3': '三',
            '4': '四',
            '5': '五',
            '6': '六'
        };

        if (/(y+)/.test(fmt)) {
            fmt = fmt.replace(
                RegExp.$1,
                (date.getFullYear() + '').substr(4 - RegExp.$1.length)
            );
        }
        if (/(E+)/.test(fmt)) {
            fmt = fmt.replace(
                RegExp.$1,
                (RegExp.$1.length > 1 ? (RegExp.$1.length > 2 ? '星期' : '周') : '') +
            week[date.getDay() + '']
            );
        }
        for (var k in o) {
            if (new RegExp('(' + k + ')').test(fmt)) {
                fmt = fmt.replace(
                    RegExp.$1,
                    RegExp.$1.length == 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length)
                );
            }
        }
        return fmt;
    }

    /**
     * @description 节流:在一定时间内，只触发一次
     * @param   {Function}  func    要执行的函数
     * @param   {Number}    wait    延时的时间
     * @param   {Boolean}   immediate   是否立即执行
     * @return null
     */
    Zsdx.throttle = function (func, wait = 500, immediate = true) {
        let timer, flag;

        if (immediate) {
            if (!flag) {
                flag = true;
                // 如果是立即执行，则在wait毫秒内开始时执行
                typeof func === 'function' && func();
                timer = setTimeout(() => {
                    flag = false;
                }, wait);
            }
        } else {
            if (!flag) {
                flag = true
                // 如果是非立即执行，则在wait毫秒内的结束处执行
                timer = setTimeout(() => {
                    flag = false
                    typeof func === 'function' && func();
                }, wait);
            }
        }
    }

    /**
     * @description 防抖 一定时间内，只有最后一次操作，再过wait毫秒后才执行函数
     * @param   {Function}  func    要执行的函数
     * @param   {Number}    wait    延时的时间
     * @param   {Boolean}   immediate   是否立即执行
     */
    Zsdx.debounce = function (func, wait = 500, immediate = false) {
        let timeout = null;

        // 清除定时器
        if (timeout !== null) clearTimeout(timeout);
        // 立即执行，此类情况一般用不到
        if (immediate) {
            var callNow = !timeout;
            timeout = setTimeout(function() {
                timeout = null;
            }, wait);
            if (callNow) typeof func === 'function' && func();
        } else {
            // 设置定时器，当最后一次操作后，timeout不会再被清除，所以在延时wait毫秒后执行func回调方法
            timeout = setTimeout(function() {
                typeof func === 'function' && func();
            }, wait);
        }
    }

    /**
     * @description 判断浏览器环境是pc还是移动端
     * @return Boolean true:移动端 false pc
     */
    Zsdx.ismobile = function () {
        if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            return true;
        }else{
            return false;
        }
    }

    /**
     * @description 浏览器判断
     * @return String
     */
    Zsdx.getBrowser = function () {
        let u = navigator.userAgent;

        let bws = [{
            name: 'sgssapp',
            it: /sogousearch/i.test(u)
        }, {
            name: 'wechat',
            it: /MicroMessenger/i.test(u)
        }, {
            name: 'weibo',
            it: !!u.match(/Weibo/i)
        }, {
            name: 'uc',
            it: !!u.match(/UCBrowser/i) || u.indexOf(' UBrowser') > -1
        }, {
            name: 'sogou',
            it: u.indexOf('MetaSr') > -1 || u.indexOf('Sogou') > -1
        }, {
            name: 'xiaomi',
            it: u.indexOf('MiuiBrowser') > -1
        }, {
            name: 'baidu',
            it: u.indexOf('Baidu') > -1 || u.indexOf('BIDUBrowser') > -1
        }, {
            name: '360',
            it: u.indexOf('360EE') > -1 || u.indexOf('360SE') > -1
        }, {
            name: '2345',
            it: u.indexOf('2345Explorer') > -1
        }, {
            name: 'edge',
            it: u.indexOf('Edge') > -1
        }, {
            name: 'ie11',
            it: u.indexOf('Trident') > -1 && u.indexOf('rv:11.0') > -1
        }, {
            name: 'ie',
            it: u.indexOf('compatible') > -1 && u.indexOf('MSIE') > -1
        }, {
            name: 'firefox',
            it: u.indexOf('Firefox') > -1
        }, {
            name: 'safari',
            it: u.indexOf('Safari') > -1 && u.indexOf('Chrome') === -1
        }, {
            name: 'qqbrowser',
            it: u.indexOf('MQQBrowser') > -1 && u.indexOf(' QQ') === -1
        }, {
            name: 'qq',
            it: u.indexOf('QQ') > -1
        }, {
            name: 'chrome',
            it: u.indexOf('Chrome') > -1 || u.indexOf('CriOS') > -1
        }, {
            name: 'opera',
            it: u.indexOf('Opera') > -1 || u.indexOf('OPR') > -1
        }];

        for (let i = 0; i < bws.length; i++) {
            if (bws[i].it) {
                return bws[i].name;
            }
        }

        return 'other';
    }

    /**
     * @description 获取当前操作系统
     */
    Zsdx.getOS = function () {
        let u = navigator.userAgent;

        if (!!u.match(/compatible/i) || u.match(/Windows/i)) {
            return 'windows';
        } else if (!!u.match(/Macintosh/i) || u.match(/MacIntel/i)) {
            return 'macOS';
        } else if (!!u.match(/iphone/i) || u.match(/Ipad/i)) {
            return 'ios';
        } else if (!!u.match(/android/i)) {
            return 'android';
        } else {
            return 'other';
        }
    }

    /**
     * @description 复制内容
     * @param   {String | Number}
     */
    Zsdx.copyValue = function (value = '', callback) {
        try {
            let str = value;
            let oInput = document.createElement("input");

            oInput.value = str;
            document.body.appendChild(oInput);
            oInput.select();
            document.execCommand("Copy");
            oInput.style.display = "none";
            callback(true);
        } catch (error) {
            callback(false);
        }
    }

    /**
     * @description 对象深拷贝
     */
    Zsdx.deepCopy = function (value) {
        let getType = value => {
            let objectType = Object.prototype.toString.call(value);
            let type = objectType.match(/^\[object (.*)\]$/)[1];

            return type.toLowerCase()
        }

        let copyValue = value;
        let type = getType(value);
        if (type === 'object') {
            copyValue = {}
            for (let key in value) {
                copyValue[key] = Zsdx.deepCopy(value[key])
            }
        }

        if (type === 'array') {
            copyValue = value.map(i => Zsdx.deepCopy(i))
        }

        return copyValue
    }

    /**
     * @description 对象深度合并
     */
    Zsdx.deepMerge = function (target = {}, source = {}) {
	    target = Zsdx.deepCopy(target);
	    if (typeof target !== 'object' || typeof source !== 'object') return false;
        for (var prop in source) {
            if (!source.hasOwnProperty(prop)) continue;
            if (prop in target) {
                if (typeof target[prop] !== 'object') {
                    target[prop] = source[prop];
                } else {
                    if (typeof source[prop] !== 'object') {
                        target[prop] = source[prop];
                    } else {
                        if (target[prop].concat && source[prop].concat) {
                            target[prop] = target[prop].concat(source[prop]);
                        } else {
                            target[prop] = Zsdx.deepMerge(target[prop], source[prop]);
                        }
                    }
                }
            } else {
                target[prop] = source[prop];
            }
        }
        return target;
    }

    /**
     * @description 页面跳转
     */
    Zsdx.router = function (name = '', param = {}, resolve = false, self = null) {
        if(Zsdx.isNull) return false;

        if(!resolve) {
            self.$router.push({
                name,
                param
            })
        } else {
            const routeData = self.$router.resolve({
                name,
                param
            });

            window.open(routeData.href, '_blank');
        }
    }

    /**
     * @description 数组去重
     */
    Zsdx.removal = function (array = [], field = '') {
        let person = array;
        let obj = {};

        person = person.reduce((cur, next) => {
            obj[next[field]] ? "" : obj[next[field]] = true && cur.push(next);
            return cur;
        }, []);

        return person;
    }

    /**
     * @description 数组排序
     */
    Zsdx.sortArray = function (array = [], type = 'quence', field = '') {
        if(field) {
            if(type == 'quence') {
                return array.sort((a, b) => {
                    return a[field] - b[field]
                })
            } else {
                return array.sort((a, b) => {
                    return b[field] - a[field]
                })
            }
        }
        if(type == 'quence') {
            return array.sort((a, b) => {
                return a - b
            })
        } else {
            return array.sort((a, b) => {
                return b - a
            })
        }
    }

    /**
     * @description 获取url参数
     */
    Zsdx.getURLParameters = function (url = '') {
        return (url.match(/([^?=&]+)(=([^&]*))/g) || []).reduce(
            (a, v) => (
            (a[v.slice(0, v.indexOf("="))] = v.slice(v.indexOf("=") + 1)), a
            ),
            {}
        );
    }

    /**
     * @description 生成随机ID
     */
    Zsdx.getID = function (length = 10) {
        return Number(Math.random().toString().substr(3,length) + Date.now()).toString(36);
    }

    /**
     * @description 动态引入js
     */
    Zsdx.injectScript = function (src = '') {
        const s = document.createElement('script');
        s.type = 'text/javascript';
        s.async = true;
        s.src = src;
        const t = document.getElementsByTagName('script')[0];
        t.parentNode.insertBefore(s, t);
    }

    Zsdx.downloadUrl = function (url = '') {
        let isChrome = navigator.userAgent.toLowerCase().indexOf('chrome') > -1;
        let isSafari = navigator.userAgent.toLowerCase().indexOf('safari') > -1;
        if (isChrome || isSafari) {
            let link = document.createElement('a');
            link.href = url;
            if (link.download !== undefined) {
                let fileName = url.substring(url.lastIndexOf('/') + 1, url.length);
                link.download = fileName;
            }
            if (document.createEvent) {
                let e = document.createEvent('MouseEvents');
                e.initEvent('click', true, true);
                link.dispatchEvent(e);
                return true;
            }
        }
        if (url.indexOf('?') === -1) {
            url += '?download';
        }
        window.open(url, '_self');
        return true;
    }

    return Zsdx;
})));