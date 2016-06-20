/**
@type {string}
*/
__FILE__ = null;
/**
@type {number}
*/
__LINE__ = 0;
/**
@type {string}
*/
__DIR__ = null;
Packages = 0;
/**
@param {string|Object} [script]
*/
load = function(script) {};
/**
@param {string|Object} [script]
*/
loadWithNewObject = function(script) {};
/**
@param {number} [code]
*/
exit = function(code) {};
/**
@param {number} [code]
*/
quit = function(code) {};
/**
@param {...string} [className]
*/
JavaImporter = function(className) {};

/**
@param {string} [s]
@static
*/
Java.type = function(s) {};
/**
@param [parentType]
@static
*/
Java.extend = function(parentType) {};
/**
@param [javaArray]
@static
*/
Java.from = function(javaArray) {};
/**
@param [jsArray]
@param [javaType]
@static
*/
Java.to = function(jsArray,javaType) {};
/**
@param [type]
@static
*/
Java.super = function(type) {};
Java = {};

/**
@param {Object} [obj]
@param {Object} [prototype]
@static
*/
Object.setPrototypeOf = function(obj,prototype) {};
/**
@param {Object} [to]
@param {Object} [from]
@static
*/
Object.bindProperties = function(to,from) {};
Object = {};

/**
@static
@type {number}
*/
Error.lineNumber = 0;
/**
@static
@type {number}
*/
Error.columnNumber = 0;
/**
@static
@type {string}
*/
Error.fileName = null;
/**
@static
@type {string}
*/
Error.stack = null;
/**
@static
*/
Error.dumpStack = function() {};
Error.prototype.printStackTrace = function() {};
/**
@return {java.lang.StackTraceElement[]}
*/
Error.prototype.getStackTrace = function() {};
Error = {};

String.prototype.trimLeft = function() {};
String.prototype.trimRight = function() {};
String = {};
