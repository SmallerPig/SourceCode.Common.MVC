/*
    core.check(checkValue,alterValue)
    //过滤空值,若鉴定值未定义或为空,则返回默认值,否则返回鉴定值
    //checkValue 必填,无类型要求
    //alterValue 必填,无类型要求

    core.strCheck(checkValue,alterValue)
    //过滤空值,若鉴定值未定义或为空或空字符串、全空格字符串,则返回默认值,否则返回鉴定值
    //checkValue 必填,无类型要求
    //alterValue 必填,无类型要求

    core.max(numberArray)
    //取最大值,返回参数数组的最大值
    //numberArray 必填,数组

    core.min(numberArray)
    //取最小值,返回参数数组的最小值
    //numberArray 必填,数组

    core.ascend(targetArray,orderArray)
    //升排列,返回排列好的数组,对原参数数组无影响
    //targetArray 必填,用于排序的数组
    //orderArray 选填,如果未填,则直接对targetArray使用升序排列,如果填写,则对orderArray使用升序排列,并将排序方式对应使用至targetArray

    core.descend(targetArray,orderArray)
    //降序排列,返回排列好的数组,对原参数数组无影响
    //targetArray 必填,用于排序的数组
    //orderArray 选填,如果未填,则直接对targetArray使用降序排列,如果填写,则对orderArray使用降序排列,并将排序方式对应使用至targetArray

    core.ots(anObject)
    //对象转字符串,返回转换的字符串值,对原对象无影响
    //anObject 对象,必填

    core.sto(anString)
    //字符串转化为对象，返回一个字符串转化出来的对象
    //anString 字符串，必须是合法的对象格式

    core.cut(str,maxLength,hanTake2Chars)
    //截断字符串并返回截断后的值
    //str 需要被截断的字符串,函数对字符串本身不造成影响
    //maxLength 如果字符串长度大于此长度,则只取此长度内的字符串
    //hanTake2Chars 布尔值,汉字是否计为两个字符,默认false
*/

if( typeof(core)=="undefined"){
    core={};
}
    
//过滤空值,若鉴定值未定义或为空,则返回默认值,否则返回鉴定值
//checkValue 必填,无类型要求
//alterValue 必填,无类型要求
core.check = function(checkValue,alterValue){
    if(checkValue==undefined || checkValue==null){
        return alterValue;
    }
    return checkValue;
}

//过滤空值,若鉴定值未定义或为空或空字符串、全空格字符串,则返回默认值,否则返回鉴定值
//value 必填,无类型要求
//alterValue 必填,无类型要求
core.strCheck = function(checkValue,alterValue){
    if(checkValue==undefined || checkValue==null || checkValue.replace(/(^\s*)|(\s*$)/g,"")==""){
        return alterValue;
    }
    return checkValue;
}

//取最大值,返回参数数组的最大值
//numberArray 必填,数组
core.max = function(numberArray){
    var thisMax=numberArray[0];
    for(var eachVar in numberArray){
        if(thisMax<numberArray[eachVar]){
            thisMax=numberArray[eachVar];
        }
    }
    return thisMax;
}

//取最小值,返回参数数组的最小值
//numberArray 必填,数组
core.min = function(numberArray){
    var thisMin=numberArray[0];
    for(var eachVar in numberArray){
        if(thisMin>numberArray[eachVar]){
            thisMin=numberArray[eachVar];
        }
    }
    return thisMin;
}

//升序排列,返回排列好的数组,对原参数数组无影响
//targetArray 必填,用于排序的数组
//orderArray 选填,如果未填,则直接对targetArray使用升序排列,如果填写,则对orderArray使用升序排列,并将排序方式对应使用至targetArray
core.ascend = function(targetArray,orderArray){
    var targetArray_temp = targetArray.slice();
    var orderArray_temp = core.check(orderArray,targetArray.slice());
    var temp;
    for(var i=orderArray_temp.length-1;i>0;i--){
        for(var j=0;j<i;j++){
            if( orderArray_temp[j] > orderArray_temp[j+1]){
                temp=orderArray_temp[j];
                orderArray_temp[j]=orderArray_temp[j+1];
                orderArray_temp[j+1]=temp;
                
                temp=targetArray_temp[j];
                targetArray_temp[j]=targetArray_temp[j+1];
                targetArray_temp[j+1]=temp;
            }
        }
    }
    return targetArray_temp;
}

//降序排列,返回排列好的数组,对原参数数组无影响
//targetArray 必填,用于排序的数组
//orderArray 选填,如果未填,则直接对targetArray使用升序排列,如果填写,则对orderArray使用升序排列,并将排序方式对应使用至targetArray
core.descend = function(targetArray,orderArray){
    var targetArray_temp = targetArray.slice();
    var orderArray_temp = core.check(orderArray,targetArray.slice());
    var temp;
    for(var i=orderArray_temp.length-1;i>0;i--){
        for(var j=0;j<i;j++){
            if( orderArray_temp[j] > orderArray_temp[j+1]){
            
                temp=orderArray_temp[j];
                orderArray_temp[j]=orderArray_temp[j+1];
                orderArray_temp[j+1]=temp;
                
                temp=targetArray_temp[j];
                targetArray_temp[j]=targetArray_temp[j+1];
                targetArray_temp[j+1]=temp;
            }
        }
    }
    return targetArray_temp;
}

//对象转字符串,返回转换的字符串值,对原对象无影响
//anObject 对象,必填
core.ots = function(anObject){
    var objectString = "";
    for(var eachVar in anObject){
        objectString = objectString +',"'+ eachVar +'":' + varProcess(anObject[eachVar]);
    }
    return "{"+objectString.substr(1)+"}";
    
    function varProcess(thisVar){
        if( thisVar.constructor == Object){
            return objToStr(thisVar);
        }else if( thisVar.constructor == String ){
            thisVar = thisVar.replace( /\\/g ,"\\\\")
            thisVar = thisVar.replace( /\"/g ,"\\\"")
            return "\""+thisVar+"\""
        }else if( thisVar.constructor == Array ){
            alert("array_"+typeof(thisVar)+"_"+thisVar.length+"_"+thisVar)
            var arrayString = ""
            for (eachVar in thisVar){
                arrayString = arrayString + "," + varProcess(thisVar[eachVar]);
            }
            alert(arrayString)
            return "[" + arrayString.substr(1) + "]";
        }else if( thisVar.constructor == Number ){
            return "" + thisVar;
        }else{
            return "" + thisVar;
        }
    }
}

//字符串转化为对象，返回一个字符串转化出来的对象
//anString 字符串，必须是合法的对象格式
core.sto = function(anString){
    return eval("("+anString+")");
}

//截断字符串并返回截断后的值
//str 需要被截断的字符串,函数对字符串本身不造成影响
//maxLength 如果字符串长度大于此长度,则只取此长度内的字符串
//hanTake2Chars 布尔值,汉字是否计为两个字符,默认flase
core.cut = function(str,maxLength,hanTake2Chars){
    if(str.length<=maxLength&&hanTake2Chars!=true){
        return str
    }
    var slotPerChar=1;
    var tempStr="";
    var usedCharLength=0;
    if(hanTake2Chars==true){
        slotPerChar=2;
    }
    for (var i=0;i<str.length;i++){
        if(str.charAt(i).match(/[^\x00-\xff]/ig)!=null){
            usedCharLength=usedCharLength+slotPerChar;
        }else{
            usedCharLength=usedCharLength+1;
        }
        if(usedCharLength<=maxLength){
            tempStr=tempStr+str.charAt(i);
        }else{
            return tempStr;
        }
    }
    return tempStr;
}

core.URLDecode = function (zipStr) {
    var uzipStr = "";
    console.log(zipStr.length);
    if (zipStr.length>3000) {
        var a = 1;
    }



    for (var i = 0; i < zipStr.length; i++) {
        var chr = zipStr.charAt(i);
        if (chr == "+") {
            uzipStr += " ";
        } else if (chr == "%") {
            var asc = zipStr.substring(i + 1, i + 3);
            if (parseInt("0x" + asc) > 0x7f) {
                uzipStr += decodeURI("%" + asc.toString() + zipStr.substring(i + 3, i + 9).toString());
                i += 8;
            } else {
                uzipStr += AsciiToString(parseInt("0x" + asc));
                i += 2;
            }
        } else {
            uzipStr += chr;
        }

    }
    console.log(uzipStr);
    return uzipStr;

    function AsciiToString(asccode) {
        return String.fromCharCode(asccode);
    }

}


//提交POST Ajax请求，需要引用jQuery库
//data：Json格式数据
//url：请求地址
//success：成功回调函数
//error:失败回调函数
core.AJAX = function (data, url, beforesendfn, onsuccessfn, onerrorfn, oncomplete, functiontype) {
    $.ajax({
        type: "POST",
        url: url,
        data: JSON.stringify(data),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        beforeSend: beforesendfn,
        success: onsuccessfn,
        error: onerrorfn,
        complete: oncomplete
    });
}



