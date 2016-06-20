/**
@param {string} [str]
@return {boolean}
*/
isXMLName = function(str) {};

/**
@param {Object} [value]
@constructor
*/
function XMLList(value) {}
/**
@param {*} [attributeName]
@return {XMLList}
*/
XMLList.prototype.attribute = function(attributeName) {};
/**
@return {XMLList}
*/
XMLList.prototype.attributes = function() {};
/**
@param {*} [propertyName]
@return {XMLList}
*/
XMLList.prototype.child = function(propertyName) {};
/**
@return {XMLList}
*/
XMLList.prototype.children = function() {};
/**
@return {XMLList}
*/
XMLList.prototype.comments = function() {};
/**
@param {XML} [value]
@return {boolean}
*/
XMLList.prototype.contains = function(value) {};
/**
@return {XMLList}
*/
XMLList.prototype.copy = function() {};
/**
@param {*} [name]
@return {XMLList}
*/
XMLList.prototype.descendants = function(name) {};
/**
@param {*} [name]
@return {XMLList}
*/
XMLList.prototype.elements = function(name) {};
/**
@return {boolean}
*/
XMLList.prototype.hasComplexContent = function() {};
/**
@return {boolean}
*/
XMLList.prototype.hasSimpleContent = function() {};
/**
@return {XMLList}
*/
XMLList.prototype.normalize = function() {};
/**
@return {XML}
*/
XMLList.prototype.parent = function() {};
/**
@param {string} [name]
@return {XMLList}
*/
XMLList.prototype.processingInstructions = function(name) {};
/**
@return {XMLList}
*/
XMLList.prototype.text = function() {};
/**
@return {XMLList}
*/
XMLList.prototype.valueOf = function() {};
XMLList.prototype = new XML();

/**
@type {boolean}
*/
XML.prototype.ignoreComments = 0;
/**
@type {boolean}
*/
XML.prototype.ignoreProcessingInstructions = 0;
/**
@type {boolean}
*/
XML.prototype.ignoreWhitespace = 0;
/**
@type {boolean}
*/
XML.prototype.prettyPrinting = 0;
/**
@param {*} [value]
@constructor
*/
function XML(value) {}
/**
@param {*} [ns]
@return {XML}
*/
XML.prototype.addNamespace = function(ns) {};
/**
@param {*} [child]
@return {XML}
*/
XML.prototype.appendChild = function(child) {};
/**
@param {*} [attributeName]
@return {XMLList}
*/
XML.prototype.attribute = function(attributeName) {};
/**
@return {XMLList}
*/
XML.prototype.attributes = function() {};
/**
@param {*} [propertyName]
@return {XMLList}
*/
XML.prototype.child = function(propertyName) {};
/**
@return {Number}
*/
XML.prototype.childIndex = function() {};
/**
@return {XMLList}
*/
XML.prototype.children = function() {};
/**
@return {XMLList}
*/
XML.prototype.comments = function() {};
/**
@param {XML} [value]
@return {boolean}
*/
XML.prototype.contains = function(value) {};
/**
@return {XML}
*/
XML.prototype.copy = function() {};
/**
@return {Object}
*/
XML.prototype.defaultSettings = function() {};
/**
@param {*} [name]
@return {XMLList}
*/
XML.prototype.descendants = function(name) {};
/**
@param {*} [name]
@return {XMLList}
*/
XML.prototype.elements = function(name) {};
/**
@return {boolean}
*/
XML.prototype.hasComplexContent = function() {};
/**
@return {boolean}
*/
XML.prototype.hasSimpleContent = function() {};
/**
@return {Array}
*/
XML.prototype.inScopeNamespaces = function() {};
/**
@param {Object} [child1]
@param {Object} [child2]
@return {XMLList|undefined}
*/
XML.prototype.insertChildAfter = function(child1,child2) {};
/**
@param {Object} [child1]
@param {Object} [child2]
@return {XMLList|undefined}
*/
XML.prototype.insertChildBefore = function(child1,child2) {};
/**
@return {string}
*/
XML.prototype.localName = function() {};
/**
@return {Object}
*/
XML.prototype.name = function() {};
/**
@param {string} [prefix]
@return {*}
*/
XML.prototype.namespace = function(prefix) {};
/**
@return {Array}
*/
XML.prototype.namespaceDeclaration = function() {};
/**
@return {string}
*/
XML.prototype.nodeKind = function() {};
/**
@return {XML}
*/
XML.prototype.normalize = function() {};
/**
@return {XML}
*/
XML.prototype.parent = function() {};
/**
@param {*} [value]
@return {XML}
*/
XML.prototype.prependChild = function(value) {};
/**
@param {string} [name]
@return {XMLList}
*/
XML.prototype.processingInstructions = function(name) {};
/**
@param {Namespace} [ns]
@return {XML}
*/
XML.prototype.removeNamespace = function(ns) {};
/**
@param {*} [propertyName]
@param {*} [value]
@return {XML}
*/
XML.prototype.replace = function(propertyName,value) {};
/**
@param {*} [value]
@return {XML}
*/
XML.prototype.setChildren = function(value) {};
/**
@param {string} [name]
*/
XML.prototype.setLocalName = function(name) {};
/**
@param {string} [name]
*/
XML.prototype.setName = function(name) {};
/**
@param {string} [name]
*/
XML.prototype.setNamespace = function(name) {};
/**
@param {...*} [settings]
*/
XML.prototype.setSettings = function(settings) {};
/**
@return {Object}
*/
XML.prototype.settings = function() {};
/**
@return {XMLList}
*/
XML.prototype.text = function() {};
/**
@return {string}
*/
XML.prototype.toXMLString = function() {};
/**
@return {XML}
*/
XML.prototype.valueOf = function() {};

/**
@type {string}
*/
Namespace.prototype.prefix = null;
/**
@type {string}
*/
Namespace.prototype.uri = null;
/**
@param {*} [prefixValue]
@param {*} [urlValue]
@constructor
*/
function Namespace(prefixValue,urlValue) {}
/**
@return {Namespace}
*/
Namespace.prototype.valueOf = function() {};

/**
@type {string}
@const
*/
QName.prototype.localName = null;
/**
@type {string}
@const
*/
QName.prototype.uri = null;
/**
@param {*} [uri]
@param {*} [localName]
@constructor
*/
function QName(uri,localName) {}
