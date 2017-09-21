const md5 = require('md5.js');
var JsonpUtils = {
    version: '1.0',
    name: 'Hanxinbank Jsonp Utils'
};

JsonpUtils.md5Sign = function md5Sign(params, appKey) {
    var element = "";
    var array = new Array();
    var arrayIndex = 0;
    if (appKey) {
        params.appKey = appKey;
    } else {
        alert("缺少秘钥");
        return;
    }
    for (var key in params) {
        if ("tokenId" != key && "userId" != key && "dispatherUrl" != key) {
            element = key + "=" + params[key];
            array[arrayIndex++] = element;
        }
    }
    array.sort();
    var signStr = "";
    for (var i = 0; i < array.length; i++) {
        if (signStr) {
            signStr += "&" + array[i];
        } else {
            signStr += array[i];
        }
    };
    const sign = md5(signStr).toUpperCase();
    if (params.appKey) {
        delete params.appKey;
    }
    return {md5Params:params,sign};
}

JsonpUtils.addHeaders = function (params, userId, tokenId, sign, dispatherUrl) {
    if (userId && tokenId && sign && dispatherUrl) {
        params["_userId"] = userId;
        params["_tokenId"] = tokenId;
        params["_sign"] = sign;
        params["_dispatherUrl"] = dispatherUrl;
    }
    return params;
}
function encode(params, userId, tokenId, appKey, dispatherUrl) {
    const {sign,md5Params} = JsonpUtils.md5Sign(params, appKey);
    const newParams = JsonpUtils.addHeaders(md5Params, userId, tokenId, sign, dispatherUrl);
    return newParams;
}
export default encode;