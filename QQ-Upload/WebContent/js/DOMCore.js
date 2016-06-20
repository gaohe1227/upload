/**
@param {string} features
*/
DOMImplementationRegistry.prototype.getDOMImplementation = function(features) {};
/**
@param {string} features
*/
DOMImplementationRegistry.prototype.getDOMImplementationList = function(features) {};
DOMImplementationRegistry = {};

/**
@type {number}
*/
DOMException.prototype.code = 0;
DOMException = {};

/**
@type {number}
@const
*/
DOMStringList.prototype.length = 0;
/**
@param {number} index
@return {string}
*/
DOMStringList.prototype.item = function(index) {};
/**
@param {string} str
@return {boolean}
*/
DOMStringList.prototype.contains = function(str) {};
DOMStringList = {};

/**
@type {number}
@const
*/
NameList.prototype.length = 0;
/**
@param {number} index
@return {string}
*/
NameList.prototype.getName = function(index) {};
/**
@param {number} index
@return {string}
*/
NameList.prototype.getNamespaceURI = function(index) {};
/**
@param {string} str
@return {boolean}
*/
NameList.prototype.contains = function(str) {};
/**
@param {string} namespaceURI
@param {string} name
@return {boolean}
*/
NameList.prototype.containsNS = function(namespaceURI,name) {};
NameList = {};

/**
@type {Number}
@const
*/
DOMImplementationList.prototype.length = 0;
/**
@param {Number} index
@return {DOMImplementation}
*/
DOMImplementationList.prototype.item = function(index) {};
DOMImplementationList = {};

/**
@param {string} features
@return {DOMImplementation}
*/
DOMImplementationSource.prototype.getDOMImplementation = function(features) {};
/**
@param {string} features
@return {DOMImplementationList}
*/
DOMImplementationSource.prototype.getDOMImplementationList = function(features) {};
DOMImplementationSource = {};

/**
 * @interface
 */
function DOMImplementation() {}
/**
@param {string} feature
@param {string} version
@return {boolean}
*/
DOMImplementation.prototype.hasFeature = function(feature,version) {};
/**
@param {string} qualifiedName
@param {string} publicId
@param {string} systemId
@return {DocumentType}
*/
DOMImplementation.prototype.createDocumentType = function(qualifiedName,publicId,systemId) {};
/**
@param {string} namespaceURI
@param {string} qualifiedName
@param {DocumentType} doctype
@return {Document}
*/
DOMImplementation.prototype.createDocument = function(namespaceURI,qualifiedName,doctype) {};
/**
@param {string} feature
@param {string} version
@return {Object}
*/
DOMImplementation.prototype.getFeature = function(feature,version) {};

/**
@param {string} [selector]
@return {NodeList}
*/
DocumentFragment.prototype.querySelectorAll = function(selector) {};
/**
@param {string} [selector]
@return {Element}
*/
DocumentFragment.prototype.querySelector = function(selector) {};
DocumentFragment.prototype = new Node();
DocumentFragment = {};

/**
@type {DocumentType}
@const
*/
Document.prototype.doctype = 0;
/**
@type {DOMImplementation}
@const
*/
Document.prototype.implementation = 0;
/**
@type {Element}
@const
*/
Document.prototype.documentElement = 0;
/**
@type {string}
@const
*/
Document.prototype.inputEncoding = null;
/**
@type {string}
@const
*/
Document.prototype.xmlEncoding = null;
/**
@type {boolean}
*/
Document.prototype.xmlStandalone = 0;
/**
@type {string}
*/
Document.prototype.xmlVersion = null;
/**
@type {boolean}
*/
Document.prototype.strictErrorChecking = 0;
/**
@type {string}
*/
Document.prototype.documentURI = null;
/**
@type {DOMConfiguration}
@const
*/
Document.prototype.domConfig = 0;
/**
@browser IE
@type {Selection}
*/
Document.prototype.selection = 0;
/**
@browser IE
@type {Array}
*/
Document.prototype.all = 0;
/**
@browser IE
@type {Array}
*/
Document.prototype.namespaces = 0;
/**
@browser IE
@type {IXMLDOMParseError}
*/
Document.prototype.parseError = 0;
/**
@param {string} tagName
@return {Element}
*/
Document.prototype.createElement = function(tagName) {};
/**
@return {DocumentFragment}
*/
Document.prototype.createDocumentFragment = function() {};
/**
@param {string} data
@return {Text}
*/
Document.prototype.createTextNode = function(data) {};
/**
@param {string} data
@return {Comment}
*/
Document.prototype.createComment = function(data) {};
/**
@param {string} data
@return {CDATASection}
*/
Document.prototype.createCDATASection = function(data) {};
/**
@param {string} target
@param {string} data
@return {ProcessingInstruction}
*/
Document.prototype.createProcessingInstruction = function(target,data) {};
/**
@param {string} name
@return {Attr}
*/
Document.prototype.createAttribute = function(name) {};
/**
@param {string} name
@return {EntityReference}
*/
Document.prototype.createEntityReference = function(name) {};
/**
@param {string} tagname
@return {NodeList}
*/
Document.prototype.getElementsByTagName = function(tagname) {};
/**
@param {Node} importedNode
@param {boolean} deep
@return {Node}
*/
Document.prototype.importNode = function(importedNode,deep) {};
/**
@param {string} namespaceURI
@param {string} qualifiedName
@return {Element}
*/
Document.prototype.createElementNS = function(namespaceURI,qualifiedName) {};
/**
@param {string} namespaceURI
@param {string} qualifiedName
@return {Attr}
*/
Document.prototype.createAttributeNS = function(namespaceURI,qualifiedName) {};
/**
@param {string} namespaceURI
@param {string} localName
@return {NodeList}
*/
Document.prototype.getElementsByTagNameNS = function(namespaceURI,localName) {};
/**
@param {string} elementId
@return {Element}
*/
Document.prototype.getElementById = function(elementId) {};
/**
@param {Node} source
@return {Node}
*/
Document.prototype.adoptNode = function(source) {};
Document.prototype.normalizeDocument = function() {};
/**
@param {Node} n
@param {string} namespaceURI
@param {string} qualifiedName
@return {Node}
*/
Document.prototype.renameNode = function(n,namespaceURI,qualifiedName) {};
/**
@browser ie
@param {string} [idString]
@return {Node}
*/
Document.prototype.nodeFromID = function(idString) {};
/**
@browser IE
@param {string} filename
*/
Document.prototype.load = function(filename) {};
/**
@browser IE
@param {string} xmlString
*/
Document.prototype.loadXML = function(xmlString) {};
/**
@browser IE
@param {string} filename
*/
Document.prototype.save = function(filename) {};
/**
@browser IE
@param {string} name
@param {string} value
*/
Document.prototype.setProperty = function(name,value) {};
/**
@browser IE
@param {string} xpathExpression
*/
Document.prototype.selectSingleNode = function(xpathExpression) {};
/**
@browser IE
@param {string} xpathExpression
*/
Document.prototype.selectNodes = function(xpathExpression) {};
Document.prototype.getSelection = function() {};
/**
@browser IE
@param {string} sCommand
@param {boolean} [bUserInterface]
@param {*} [vValue]
@return {boolean}
*/
Document.prototype.execCommand = function(sCommand,bUserInterface,vValue) {};
Document.prototype = new Node();
Document = {};

/**
@browser IE
@type {string}
*/
IXMLDOMParseError.prototype.reason = null;
/**
@browser IE
@type {Number}
*/
IXMLDOMParseError.prototype.errorCode = 0;
IXMLDOMParseError = {};

/**
@static
@type {Number}
@const
*/
Node.ELEMENT_NODE = 1;
/**
@static
@type {Number}
@const
*/
Node.ATTRIBUTE_NODE = 2;
/**
@static
@type {Number}
@const
*/
Node.TEXT_NODE = 3;
/**
@static
@type {Number}
@const
*/
Node.CDATA_SECTION_NODE = 4;
/**
@static
@type {Number}
@const
*/
Node.ENTITY_SECTION_NODE = 5;
/**
@static
@type {Number}
@const
*/
Node.ENTITY_NODE = 6;
/**
@static
@type {Number}
@const
*/
Node.PROCESSING_INSTRUCTION_NODE = 7;
/**
@static
@type {Number}
@const
*/
Node.COMMENT_NODE = 8;
/**
@static
@type {Number}
@const
*/
Node.DOCUMENT_NODE = 9;
/**
@static
@type {Number}
@const
*/
Node.DOCUMENT_TYPE_NODE = 10;
/**
@static
@type {Number}
@const
*/
Node.DOCUMENT_FRAGMENT_NODE = 11;
/**
@static
@type {Number}
@const
*/
Node.NOTATION_NODE = 12;
/**
@type {string}
@const
*/
Node.prototype.nodeName = null;
/**
@type {string}
*/
Node.prototype.nodeValue = null;
/**
@type {Number}
@const
*/
Node.prototype.nodeType = 0;
/**
@type {Node}
@const
*/
Node.prototype.parentNode = 0;
/**
@type {NodeList}
@const
*/
Node.prototype.childNodes = 0;
/**
@type {Node}
@const
*/
Node.prototype.firstChild = 0;
/**
@type {Node}
@const
*/
Node.prototype.lastChild = 0;
/**
@type {Node}
@const
*/
Node.prototype.previousSibling = 0;
/**
@type {Node}
@const
*/
Node.prototype.nextSibling = 0;
/**
@type {NamedNodeMap}
@const
*/
Node.prototype.attributes = 0;
/**
@type {Document}
@const
*/
Node.prototype.ownerDocument = 0;
/**
@type {string}
@const
*/
Node.prototype.namespaceURI = null;
/**
@type {string}
*/
Node.prototype.prefix = null;
/**
@type {string}
@const
*/
Node.prototype.localName = null;
/**
@type {string}
@const
*/
Node.prototype.baseURI = null;
/**
@type {string}
*/
Node.prototype.textContent = null;
/**
@browser ie
@type {string}
@const
*/
Node.prototype.xml = null;
/**
@param {Node} newChild
@param {Node} refChild
@return {Node}
*/
Node.prototype.insertBefore = function(newChild,refChild) {};
/**
@param {Node} newChild
@param {Node} refChild
@return {Node}
*/
Node.prototype.replaceChild = function(newChild,refChild) {};
/**
@param {Node} oldChild
@return {Node}
*/
Node.prototype.removeChild = function(oldChild) {};
/**
@param {Node} newChild
@return {Node}
*/
Node.prototype.appendChild = function(newChild) {};
/**
@return {boolean}
*/
Node.prototype.hasChildNodes = function() {};
/**
@param {boolean} deep
@return {Node}
*/
Node.prototype.cloneNode = function(deep) {};
Node.prototype.normalize = function() {};
/**
@param {string} feature
@param {string} version
@return {boolean}
*/
Node.prototype.isSupported = function(feature,version) {};
/**
@return {boolean}
*/
Node.prototype.hasAttributes = function() {};
/**
@param {Node} other
@return {Node}
*/
Node.prototype.compareDocumentPosition = function(other) {};
/**
@param {Node} other
@return {boolean}
*/
Node.prototype.isSameNode = function(other) {};
/**
@param {string} namespaceURI
@return {string}
*/
Node.prototype.lookupPrefix = function(namespaceURI) {};
/**
@param {string} namespaceURI
@return {string}
*/
Node.prototype.isDefaultNamespace = function(namespaceURI) {};
/**
@param {string} prefix
@return {string}
*/
Node.prototype.lookupNamespaceURI = function(prefix) {};
/**
@param {Node} arg
@return {boolean}
*/
Node.prototype.isEqualNode = function(arg) {};
/**
@param {string} feature
@param {string} version
@return {Object}
*/
Node.prototype.getFeature = function(feature,version) {};
/**
@param {string} key
@param {Object} data
@param {UserDataHandler} handler
*/
Node.prototype.setUserData = function(key,data,handler) {};
/**
@param {string} key
*/
Node.prototype.getUserData = function(key) {};
/**
@implements {EventTarget}
*/
Node = {};

/**
@type {number}
@const
*/
NodeList.prototype.length = 0;
/**
@param {number} index
@return {Node}
*/
NodeList.prototype.item = function(index) {};
NodeList = {};

/**
@type {number}
@const
*/
NamedNodeMap.prototype.length = 0;
/**
@param {string} name
@return {Node}
*/
NamedNodeMap.prototype.getNamedItem = function(name) {};
/**
@param {Node} arg
@return {Node}
*/
NamedNodeMap.prototype.setNamedItem = function(arg) {};
/**
@param {string} name
@return {Node}
*/
NamedNodeMap.prototype.removeNamedItem = function(name) {};
/**
@param {Number} index
@return {Node}
*/
NamedNodeMap.prototype.item = function(index) {};
/**
@param {string} namespaceURI
@param {string} localName
@return {Node}
*/
NamedNodeMap.prototype.getNamedItemNS = function(namespaceURI,localName) {};
/**
@param {Node} arg
@return {Node}
*/
NamedNodeMap.prototype.setNamedItemNS = function(arg) {};
/**
@param {string} namespaceURI
@param {string} localName
@return {Node}
*/
NamedNodeMap.prototype.removeNamedItemNS = function(namespaceURI,localName) {};
NamedNodeMap = {};

/**
@type {string}
*/
CharacterData.prototype.data = null;
/**
@type {Number}
@const
*/
CharacterData.prototype.length = 0;
/**
@param {Number} offset
@param {Number} count
@return {string}
*/
CharacterData.prototype.substringData = function(offset,count) {};
/**
@param {string} arg
*/
CharacterData.prototype.appendData = function(arg) {};
/**
@param {Number} offset
@param {string} arg
*/
CharacterData.prototype.insertData = function(offset,arg) {};
/**
@param {Number} offset
@param {Number} count
*/
CharacterData.prototype.deleteData = function(offset,count) {};
/**
@param {Number} offset
@param {Number} count
@param {string} arg
*/
CharacterData.prototype.replaceData = function(offset,count,arg) {};
CharacterData.prototype = new Node();
CharacterData = {};

/**
@type {string}
@const
*/
Attr.prototype.name = null;
/**
@type {boolean}
@const
*/
Attr.prototype.specified = 0;
/**
@type {string}
*/
Attr.prototype.value = null;
/**
@type {Element}
@const
*/
Attr.prototype.ownerElement = 0;
/**
@type {TypeInfo}
@const
*/
Attr.prototype.schemaTypeInfo = 0;
/**
@type {boolean}
@const
*/
Attr.prototype.isId = 0;
Attr.prototype = new Node();
Attr = {};

/**
@type {string}
@const
*/
Element.prototype.tagName = null;
/**
@type {TypeInfo}
@const
*/
Element.prototype.schemaTypeInfo = 0;
/**
@param {string} name
@return {string}
*/
Element.prototype.getAttribute = function(name) {};
/**
@param {string} name
@param {string} value
*/
Element.prototype.setAttribute = function(name,value) {};
/**
@param {string} name
*/
Element.prototype.removeAttribute = function(name) {};
/**
@param {string} name
@return {Attr}
*/
Element.prototype.getAttributeNode = function(name) {};
/**
@param {Attr} newAttr
@return {Attr}
*/
Element.prototype.setAttributeNode = function(newAttr) {};
/**
@param {Attr} oldAttr
@return {Attr}
*/
Element.prototype.removeAttributeNode = function(oldAttr) {};
/**
@param {string} name
@return {NodeList}
*/
Element.prototype.getElementsByTagName = function(name) {};
/**
@param {string} namespaceURI
@param {string} localName
@return {string}
*/
Element.prototype.getAttributeNS = function(namespaceURI,localName) {};
/**
@param {string} namespaceURI
@param {string} qualifiedName
@param {string} value
*/
Element.prototype.setAttributeNS = function(namespaceURI,qualifiedName,value) {};
/**
@param {string} namespaceURI
@param {string} localName
*/
Element.prototype.removeAttributeNS = function(namespaceURI,localName) {};
/**
@param {string} namespaceURI
@param {string} localName
*/
Element.prototype.getAttributeNodeNS = function(namespaceURI,localName) {};
/**
@param {Attr} newAttr
*/
Element.prototype.setAttributeNodeNS = function(newAttr) {};
/**
@param {string} namespaceURI
@param {string} localName
@return {NodeList}
*/
Element.prototype.getElementsByTagNameNS = function(namespaceURI,localName) {};
/**
@param {string} name
@return {boolean}
*/
Element.prototype.hasAttribute = function(name) {};
/**
@param {string} namespaceURI
@param {string} localName
@return {boolean}
*/
Element.prototype.hasAttributeNS = function(namespaceURI,localName) {};
/**
@param {string} name
@param {boolean} isId
*/
Element.prototype.setIdAttribute = function(name,isId) {};
/**
@param {string} namespaceURI
@param {string} localName
@param {boolean} isId
*/
Element.prototype.setIdAttributeNS = function(namespaceURI,localName,isId) {};
/**
@param {Attr} idAttr
@param {boolean} isId
*/
Element.prototype.setIdAttributeNode = function(idAttr,isId) {};
/**
@param {string} [selector]
@return {NodeList}
*/
Element.prototype.querySelectorAll = function(selector) {};
/**
@param {string} [selector]
@return {Element}
*/
Element.prototype.querySelector = function(selector) {};
Element.prototype = new Node();
Element = {};

/**
@type {boolean}
@const
*/
Text.prototype.isElementContentWhitespace = 0;
/**
@type {string}
@const
*/
Text.prototype.wholeText = null;
/**
@param {Number} offset
@return {Text}
*/
Text.prototype.splitText = function(offset) {};
/**
@param {string} content
@return {Text}
*/
Text.prototype.replaceWholeText = function(content) {};
Text.prototype = new CharacterData();
Text = {};

Comment.prototype = new CharacterData();
Comment = {};

/**
@type {string}
@const
*/
TypeInfo.prototype.typeName = null;
/**
@type {string}
@const
*/
TypeInfo.prototype.typeNamespace = null;
/**
@param {string} typeNamespaceArg
@param {string} typeNameArg
@param { Number} derivationMethod
@return {boolean}
*/
TypeInfo.prototype.isDerivedFrom = function(typeNamespaceArg,typeNameArg,derivationMethod) {};
TypeInfo = {};

/**
@static
@type {number}
@const
*/
UserDataHandler.NODE_CLONED = 1;
/**
@static
@type {number}
@const
*/
UserDataHandler.NODE_IMPORTED = 2;
/**
@static
@type {number}
@const
*/
UserDataHandler.NODE_DELETED = 3;
/**
@static
@type {number}
@const
*/
UserDataHandler.NODE_RENAMED = 4;
/**
@static
@type {number}
@const
*/
UserDataHandler.NODE_ADOPTED = 5;
/**
@param {number} operation
@param {string} key
@param {Object} data
@param {Node} src
@param {Node} dst
*/
UserDataHandler.prototype.handle = function(operation,key,data,src,dst) {};
UserDataHandler = {};

/**
@type {Number}
*/
DOMError.prototype.severity = 0;
/**
@type {string}
*/
DOMError.prototype.message = null;
/**
@type {string}
*/
DOMError.prototype.type = null;
/**
@type {Object}
*/
DOMError.prototype.relatedException = 0;
/**
@type {Object}
*/
DOMError.prototype.relatedData = 0;
/**
@type {DOMLocator}
*/
DOMError.prototype.location = 0;
DOMError = {};

/**
@param {DOMError} error
@return {boolean}
*/
DOMErrorHandler.prototype.handler = function(error) {};
DOMErrorHandler = {};

/**
@type {Number}
*/
DOMLocator.prototype.lineNumber = 0;
/**
@type {Number}
*/
DOMLocator.prototype.columnNumber = 0;
/**
@type {Number}
*/
DOMLocator.prototype.byteOffset = 0;
/**
@type {Number}
*/
DOMLocator.prototype.utf16Offset = 0;
/**
@type {Node}
*/
DOMLocator.prototype.relatedNode = 0;
/**
@type {string}
*/
DOMLocator.prototype.uri = null;
DOMLocator = {};

/**
@type {DOMStringList}
*/
DOMConfiguration.prototype.parameterNames = 0;
/**
@param {string} name
@param {Object} value
*/
DOMConfiguration.prototype.setParameter = function(name,value) {};
/**
@param {string} name
*/
DOMConfiguration.prototype.getParameter = function(name) {};
/**
@param {string} name
@param {Object} value
@return {boolean}
*/
DOMConfiguration.prototype.canSetParameter = function(name,value) {};
DOMConfiguration = {};

CDATASection.prototype = new Text();
CDATASection = {};

/**
@type {string}
@const
*/
DocumentType.prototype.name = null;
/**
@type {NamedNodeMap}
@const
*/
DocumentType.prototype.entities = 0;
/**
@type {NamedNodeMap}
@const
*/
DocumentType.prototype.notations = 0;
/**
@type {string}
@const
*/
DocumentType.prototype.publicId = null;
/**
@type {string}
@const
*/
DocumentType.prototype.systemId = null;
/**
@type {string}
@const
*/
DocumentType.prototype.internalSubset = null;
DocumentType.prototype = new Node();
DocumentType = {};

/**
@type {string}
@const
*/
Notation.prototype.publicId = null;
/**
@type {string}
@const
*/
Notation.prototype.systemId = null;
Notation.prototype = new Node();
Notation = {};

/**
@type {string}
@const
*/
Entity.prototype.publicId = null;
/**
@type {string}
@const
*/
Entity.prototype.systemId = null;
/**
@type {string}
@const
*/
Entity.prototype.notationName = null;
/**
@type {string}
@const
*/
Entity.prototype.inputEncoding = null;
/**
@type {string}
@const
*/
Entity.prototype.xmlEncoding = null;
/**
@type {string}
@const
*/
Entity.prototype.xmlVersion = null;
Entity.prototype = new Node();
Entity = {};

EntityReference.prototype = new Node();
EntityReference = {};

/**
@type {string}
@const
*/
ProcessingInstruction.prototype.target = null;
/**
@type {string}
*/
ProcessingInstruction.prototype.data = null;
ProcessingInstruction.prototype = new Node();
ProcessingInstruction = {};
