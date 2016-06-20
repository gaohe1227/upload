/**
@browser Gecko
@type {boolean}
*/
EventInit.prototype.bubbles = false;
/**
@browser Gecko
@type {boolean}
*/
EventInit.prototype.cancelable = false;
EventInit = {};

/**
 * @interface
 */
function Event() {}
/**
@browser Gecko
@static
@type {number}
@const
*/
Event.NONE = 0;
/**
@browser Gecko
@static
@type {number}
@const
*/
Event.CAPTURING_PHASE = 1;
/**
@browser Gecko
@static
@type {number}
@const
*/
Event.AT_TARGET = 2;
/**
@browser Gecko
@static
@type {number}
@const
*/
Event.BUBBLING_PHASE = 2;
/**
@browser Gecko
@type {string}
@const
*/
Event.prototype.type = null;
/**
@browser Gecko
@type {EventTarget}
@const
*/
Event.prototype.target = 0;
/**
@browser Gecko
@type {EventTarget}
@const
*/
Event.prototype.currentTarget = 0;
/**
@browser Gecko
@type {number}
@const
*/
Event.prototype.eventPhase = 0;
/**
@browser Gecko
@type {boolean}
@const
*/
Event.prototype.bubbles = 0;
/**
@browser Gecko
@type {boolean}
@const
*/
Event.prototype.cancelable = 0;
/**
@browser Gecko
@type {boolean}
@const
*/
Event.prototype.defaultPrevented = 0;
/**
@browser Gecko
@type {boolean}
@const
*/
Event.prototype.isTrusted = 0;
/**
@browser Gecko
@type {Date}
@const
*/
Event.prototype.timeStamp = 0;
/**
@browser Gecko
@type {string}
@const
@deprecated
*/
Event.prototype.namespaceURI = null;
/**
@browser Gecko
@param {string} type
@param {EventInit} [eventInitDict]
@constructor
*/
function Event(type,eventInitDict) {}
/**
@browser Gecko
*/
Event.prototype.stopPropagation = function() {};
/**
@browser Gecko
*/
Event.prototype.stopImmediatePropagation = function() {};
/**
@browser Gecko
*/
Event.prototype.preventDefault = function() {};
/**
@browser Gecko
@param {string} eventTypeArg
@param {boolean} canBubbleArg
@param {boolean} cancelableArg
*/
Event.prototype.initEvent = function(eventTypeArg,canBubbleArg,cancelableArg) {};
/**
@browser Gecko
@return {boolean}
@deprecated
*/
Event.prototype.isCustom = function() {};
/**
@browser Gecko
@return {boolean}
@deprecated
*/
Event.prototype.isDefaultPrevented = function() {};
/**
@browser Gecko
@param {string} namespaceURIArg
@param {string} eventTypeArg
@param {boolean} canBubbleArg
@param {boolean} cancelableArg
@deprecated
*/
Event.prototype.initEventNS = function(namespaceURIArg,eventTypeArg,canBubbleArg,cancelableArg) {};

/**
 * @interface
 */
function EventTarget() {}
/**
@param {string} type
@param {EventListener|Function} listener
@param {boolean} [useCapture]
*/
EventTarget.prototype.addEventListener = function(type,listener,useCapture) {};
/**
@param {string} type
@param {EventListener|Function} listener
@param {boolean} [useCapture]
*/
EventTarget.prototype.removeEventListener = function(type,listener,useCapture) {};
/**
@param {Event} event
@return {boolean}
*/
EventTarget.prototype.dispatchEvent = function(event) {};
/**
@param {string} namespaceURI
@param {string} type
@param {EventListener} listener
@param {boolean} [useCapture]
@param {Object} [evtGroup]
@deprecated
*/
EventTarget.prototype.addEventListenerNS = function(namespaceURI,type,listener,useCapture,evtGroup) {};
/**
@param {string} namespaceURI
@param {string} type
@param {EventListener} listener
@param {boolean} [useCapture]
@deprecated
*/
EventTarget.prototype.removeEventListenerNS = function(namespaceURI,type,listener,useCapture) {};
/**
@param {string} namespaceURI
@param {string} type
@return {boolean}
@deprecated
*/
EventTarget.prototype.willTriggerNS = function(namespaceURI,type) {};
/**
@param {string} namespaceURI
@param {string} type
@return {boolean}
@deprecated
*/
EventTarget.prototype.hasEventListenerNS = function(namespaceURI,type) {};

/**
 * @interface
 */
function EventListener() {}
/**
@browser Gecko
@param {Event} event
*/
EventListener.prototype.handleEvent = function(event) {};

/**
@browser Gecko
@type {Number}
*/
EventException.prototype.code = 0;
EventException = {};

/**
@browser Gecko
@param {string} eventType
@return {Event}
*/
DocumentEvent.prototype.createEvent = function(eventType) {};
/**
@browser Gecko
@param {string} namespaceURI
@param {string} type
@return {string}
*/
DocumentEvent.prototype.canDispatch = function(namespaceURI,type) {};
DocumentEvent = {};

/**
@browser Gecko
@type {*}
*/
CustomEventInit.prototype.detail = 0;
CustomEventInit.prototype = new EventInit();
CustomEventInit = {};

/**
@browser Gecko
@type {*}
@const
*/
CustomEvent.prototype.detail = 0;
/**
@browser Gecko
@param {string} type
@param {CustomEventInit} [eventInitDict]
@constructor
*/
function CustomEvent(type,eventInitDict) {}
/**
@browser Gecko
@param {string} type
@param {boolean} bubbles
@param {boolean} cancellable
@param {*} detail
*/
CustomEvent.prototype.initCustomEvent = function(type,bubbles,cancellable,detail) {};
/**
@browser Gecko
@param {EventTarget} target
@param {Number} phase
@deprecated
*/
CustomEvent.prototype.setDispatchState = function(target,phase) {};
/**
@browser Gecko
@return {boolean}
@deprecated
*/
CustomEvent.prototype.isPropagationStopped = function() {};
/**
@browser Gecko
@return {boolean}
@deprecated
*/
CustomEvent.prototype.isImmediatePropagationStopped = function() {};
CustomEvent.prototype = new Event();

/**
@browser Gecko
@type {WindowProxy}
*/
UIEventInit.prototype.view = 0;
/**
@browser Gecko
@type {number}
*/
UIEventInit.prototype.detail = 0;
UIEventInit.prototype = new EventInit();
UIEventInit = {};

/**
@browser Gecko
@type {WindowProxy}
@const
*/
UIEvent.prototype.view = 0;
/**
@browser Gecko
@type {number}
@const
*/
UIEvent.prototype.detail = 0;
/**
@browser Gecko
@param {string} type
@param {UIEventInit} [eventInitDict]
@constructor
*/
function UIEvent(type,eventInitDict) {}
/**
@browser Gecko
@param {string} typeArg
@param {boolean} canBubbleArg
@param {boolean} cancelableArg
@param {AbstractView} viewArg
@param {Number} detailArg
@deprecated
*/
UIEvent.prototype.initUIEvent = function(typeArg,canBubbleArg,cancelableArg,viewArg,detailArg) {};
/**
@browser Gecko
@param {string} namespaceURI
@param {string} typeArg
@param {boolean} canBubbleArg
@param {boolean} cancelableArg
@param {AbstractView} viewArg
@param {Number} detailArg
@deprecated
*/
UIEvent.prototype.initUIEventNS = function(namespaceURI,typeArg,canBubbleArg,cancelableArg,viewArg,detailArg) {};
UIEvent.prototype = new Event();

/**
@browser Gecko
@type {string}
@const
*/
TextEvent.prototype.data = null;
/**
@browser Gecko
@param {string} typeArg
@param {boolean} canBubbleArg
@param {boolean} cancelableArg
@param {AbstractView} viewArg
@param {Number} dataArg
*/
TextEvent.prototype.initTextEvent = function(typeArg,canBubbleArg,cancelableArg,viewArg,dataArg) {};
/**
@browser Gecko
@param {string} namespaceURI
@param {string} typeArg
@param {boolean} canBubbleArg
@param {boolean} cancelableArg
@param {AbstractView} viewArg
@param {Number} dataArg
*/
TextEvent.prototype.initTextEventNS = function(namespaceURI,typeArg,canBubbleArg,cancelableArg,viewArg,dataArg) {};
TextEvent.prototype = new UIEvent();
TextEvent = {};

/**
@type {boolean}
*/
SharedKeyboardAndMouseEventInit.prototype.ctrlKey = false;
/**
@type {boolean}
*/
SharedKeyboardAndMouseEventInit.prototype.shiftKey = false;
/**
@type {boolean}
*/
SharedKeyboardAndMouseEventInit.prototype.altKey = false;
/**
@type {boolean}
*/
SharedKeyboardAndMouseEventInit.prototype.metaKey = false;
/**
@type {boolean}
*/
SharedKeyboardAndMouseEventInit.prototype.keyModifierStateAltGraph = false;
/**
@type {boolean}
*/
SharedKeyboardAndMouseEventInit.prototype.keyModifierStateCapsLock = false;
/**
@type {boolean}
*/
SharedKeyboardAndMouseEventInit.prototype.keyModifierStateFn = false;
/**
@type {boolean}
*/
SharedKeyboardAndMouseEventInit.prototype.keyModifierStateFnLock = false;
/**
@type {boolean}
*/
SharedKeyboardAndMouseEventInit.prototype.keyModifierStateHyper = false;
/**
@type {boolean}
*/
SharedKeyboardAndMouseEventInit.prototype.keyModifierStateNumLock = false;
/**
@type {boolean}
*/
SharedKeyboardAndMouseEventInit.prototype.keyModifierStateOS = false;
/**
@type {boolean}
*/
SharedKeyboardAndMouseEventInit.prototype.keyModifierStateScrollLock = false;
/**
@type {boolean}
*/
SharedKeyboardAndMouseEventInit.prototype.keyModifierStateSuper = false;
/**
@type {boolean}
*/
SharedKeyboardAndMouseEventInit.prototype.keyModifierStateSymbol = false;
/**
@type {boolean}
*/
SharedKeyboardAndMouseEventInit.prototype.keyModifierStateSymbolLock = false;
SharedKeyboardAndMouseEventInit.prototype = new UIEventInit();
SharedKeyboardAndMouseEventInit = {};

/**
@type {number}
*/
MouseEventInit.prototype.screenX = 0;
/**
@type {number}
*/
MouseEventInit.prototype.screenY = 0;
/**
@type {number}
*/
MouseEventInit.prototype.clientX = 0;
/**
@type {number}
*/
MouseEventInit.prototype.clientY = 0;
/**
@type {number}
*/
MouseEventInit.prototype.button = 0;
/**
@type {number}
*/
MouseEventInit.prototype.buttons = 0;
/**
@type {EventTarget}
*/
MouseEventInit.prototype.relatedTarget = 0;
MouseEventInit.prototype = new SharedKeyboardAndMouseEventInit();
MouseEventInit = {};

/**
@browser Gecko
@type {number}
@const
*/
MouseEvent.prototype.screenX = 0;
/**
@browser Gecko
@type {number}
@const
*/
MouseEvent.prototype.screenY = 0;
/**
@browser Gecko
@type {number}
@const
*/
MouseEvent.prototype.clientX = 0;
/**
@browser Gecko
@type {number}
@const
*/
MouseEvent.prototype.clientY = 0;
/**
@browser Gecko
@type {boolean}
@const
*/
MouseEvent.prototype.ctrlKey = 0;
/**
@browser Gecko
@type {boolean}
@const
*/
MouseEvent.prototype.shiftKey = 0;
/**
@browser Gecko
@type {boolean}
@const
*/
MouseEvent.prototype.altKey = 0;
/**
@browser Gecko
@type {boolean}
@const
*/
MouseEvent.prototype.metaKey = 0;
/**
@browser Gecko
@type {Number}
@const
*/
MouseEvent.prototype.button = 0;
/**
@browser Gecko
@type {EventTarget}
@const
*/
MouseEvent.prototype.relatedTarget = 0;
/**
@browser Gecko
@type {number}
@const
*/
MouseEvent.prototype.buttons = 0;
/**
@browser Gecko
@param {string} keyIdentifierArg
@return {boolean}
*/
MouseEvent.prototype.getModifierState = function(keyIdentifierArg) {};
/**
@browser Gecko
@param {string} typeArg
@param {boolean} canBubbleArg
@param {boolean} cancelableArg
@param {AbstractView} viewArg
@param {number} detailArg
@param {number} screenXArg
@param {number} screenYArg
@param {number} clientXArg
@param {number} clientYArg
@param {boolean} ctrlKeyArg
@param {boolean} altKeyArg
@param {boolean} shiftKeyArg
@param {boolean} metaKeyArg
@param {number} buttonArg
@param {EventTarget} relatedTargetArg
@deprecated
*/
MouseEvent.prototype.initMouseEvent = function(typeArg,canBubbleArg,cancelableArg,viewArg,detailArg,screenXArg,screenYArg,clientXArg,clientYArg,ctrlKeyArg,altKeyArg,shiftKeyArg,metaKeyArg,buttonArg,relatedTargetArg) {};
/**
@browser Gecko
@param {string} namespaceURI
@param {string} typeArg
@param {boolean} canBubbleArg
@param {boolean} cancelableArg
@param {AbstractView} viewArg
@param {Number} detailArg
@param {Number} screenXArg
@param {Number} screenYArg
@param {Number} clientXArg
@param {Number} clientYArg
@param {boolean} ctrlKeyArg
@param {boolean} altKeyArg
@param {boolean} shiftKeyArg
@param {boolean} metaKeyArg
@param {Number} buttonArg
@param {EventTarget} relatedTargetArg
@deprecated
*/
MouseEvent.prototype.initMouseEventNS = function(namespaceURI,typeArg,canBubbleArg,cancelableArg,viewArg,detailArg,screenXArg,screenYArg,clientXArg,clientYArg,ctrlKeyArg,altKeyArg,shiftKeyArg,metaKeyArg,buttonArg,relatedTargetArg) {};
MouseEvent.prototype = new UIEvent();
MouseEvent = {};

/**
@browser Gecko
@static
@type {number}
@const
*/
KeyboardEvent.DOM_KEY_LOCATION_STANDARD = 0;
/**
@browser Gecko
@static
@type {number}
@const
*/
KeyboardEvent.DOM_KEY_LOCATION_LEFT = 1;
/**
@browser Gecko
@static
@type {number}
@const
*/
KeyboardEvent.DOM_KEY_LOCATION_RIGHT = 2;
/**
@browser Gecko
@static
@type {number}
@const
*/
KeyboardEvent.DOM_KEY_LOCATION_NUMPAD = 3;
/**
@browser Gecko
@type {string}
@const
@deprecated
*/
KeyboardEvent.prototype.keyIdentifier = null;
/**
@browser Gecko
@type {Number}
@const
@deprecated
*/
KeyboardEvent.prototype.keyLocation = 0;
/**
@browser Gecko
@type {string}
@const
*/
KeyboardEvent.prototype.key = null;
/**
@browser Gecko
@type {string}
@const
*/
KeyboardEvent.prototype.code = null;
/**
@browser Gecko
@type {number}
@const
*/
KeyboardEvent.prototype.location = 0;
/**
@browser Gecko
@type {boolean}
@const
*/
KeyboardEvent.prototype.ctrlKey = 0;
/**
@browser Gecko
@type {boolean}
@const
*/
KeyboardEvent.prototype.shiftKey = 0;
/**
@browser Gecko
@type {boolean}
@const
*/
KeyboardEvent.prototype.altKey = 0;
/**
@browser Gecko
@type {boolean}
@const
*/
KeyboardEvent.prototype.metaKey = 0;
/**
@browser Gecko
@type {boolean}
@const
*/
KeyboardEvent.prototype.repeat = 0;
/**
@browser Gecko
@type {boolean}
@const
*/
KeyboardEvent.prototype.isComposing = 0;
/**
@browser Gecko
@param {string} keyIdentifierArg
@return {boolean}
*/
KeyboardEvent.prototype.getModifierState = function(keyIdentifierArg) {};
/**
@browser Gecko
@param {string} typeArg
@param {boolean} canBubbleArg
@param {boolean} cancelableArg
@param {AbstractView} viewArg
@param {string} keyIdentifierArg
@param {Number} keyLocationArg
@param {string} modifiersList
@deprecated
*/
KeyboardEvent.prototype.initKeyboardEvent = function(typeArg,canBubbleArg,cancelableArg,viewArg,keyIdentifierArg,keyLocationArg,modifiersList) {};
/**
@browser Gecko
@param {string} namespaceURI
@param {string} typeArg
@param {boolean} canBubbleArg
@param {boolean} cancelableArg
@param {AbstractView} viewArg
@param {string} keyIdentifierArg
@param {Number} keyLocationArg
@param {string} modifiersList
@deprecated
*/
KeyboardEvent.prototype.initKeyboardEventNS = function(namespaceURI,typeArg,canBubbleArg,cancelableArg,viewArg,keyIdentifierArg,keyLocationArg,modifiersList) {};
KeyboardEvent.prototype = new UIEvent();
KeyboardEvent = {};

/**
@browser Gecko
@static
@type {number}
@const
*/
MutationEvent.MODIFICATION = 1;
/**
@browser Gecko
@static
@type {number}
@const
*/
MutationEvent.ADDITION = 2;
/**
@browser Gecko
@static
@type {number}
@const
*/
MutationEvent.REMOVAL = 3;
/**
@browser Gecko
@type {Node}
@const
*/
MutationEvent.prototype.relatedNode = 0;
/**
@browser Gecko
@type {string}
@const
*/
MutationEvent.prototype.prevValue = null;
/**
@browser Gecko
@type {string}
@const
*/
MutationEvent.prototype.newValue = null;
/**
@browser Gecko
@type {string}
@const
*/
MutationEvent.prototype.attrName = null;
/**
@browser Gecko
@type {Number}
@const
*/
MutationEvent.prototype.attrChange = 0;
/**
@browser Gecko
@param {string} typeArg
@param {boolean} canBubbleArg
@param {boolean} cancelableArg
@param {Node} relatedNodeArg
@param {string} prevValueArg
@param {string} newValueArg
@param {string} attrNameArg
@param {Number} attrChangeArg
*/
MutationEvent.prototype.initMutationEvent = function(typeArg,canBubbleArg,cancelableArg,relatedNodeArg,prevValueArg,newValueArg,attrNameArg,attrChangeArg) {};
/**
@browser Gecko
@param {string} namespaceURI
@param {string} typeArg
@param {boolean} canBubbleArg
@param {boolean} cancelableArg
@param {Node} relatedNodeArg
@param {string} prevValueArg
@param {string} newValueArg
@param {string} attrNameArg
@param {Number} attrChangeArg
*/
MutationEvent.prototype.initMutationEventNS = function(namespaceURI,typeArg,canBubbleArg,cancelableArg,relatedNodeArg,prevValueArg,newValueArg,attrNameArg,attrChangeArg) {};
MutationEvent.prototype = new UIEvent();
MutationEvent = {};

/**
@browser Gecko
@type {string}
@const
*/
MutationNameEvent.prototype.prevNamespaceURI = null;
/**
@browser Gecko
@type {string}
@const
*/
MutationNameEvent.prototype.prevNodeName = null;
/**
@browser Gecko
@param {string} typeArg
@param {boolean} canBubbleArg
@param {boolean} cancelableArg
@param {Node} relatedNodeArg
@param {string} prevNamespaceURIArg
@param {string} prevNodeNameArg
*/
MutationNameEvent.prototype.initMutationNameEvent = function(typeArg,canBubbleArg,cancelableArg,relatedNodeArg,prevNamespaceURIArg,prevNodeNameArg) {};
/**
@browser Gecko
@param {string} namespaceURI
@param {string} typeArg
@param {boolean} canBubbleArg
@param {boolean} cancelableArg
@param {Node} relatedNodeArg
@param {string} prevNamespaceURIArg
@param {string} prevNodeNameArg
*/
MutationNameEvent.prototype.initMutationNameEventNS = function(namespaceURI,typeArg,canBubbleArg,cancelableArg,relatedNodeArg,prevNamespaceURIArg,prevNodeNameArg) {};
MutationNameEvent.prototype = new MutationEvent();
MutationNameEvent = {};

/**
@type {EventTarget}
*/
FocusEventInit.prototype.relatedTarget = 0;
FocusEventInit.prototype = new UIEventInit();
FocusEventInit = {};

/**
@type {EventTarget}
@const
*/
FocusEvent.prototype.relatedTarget = 0;
/**
@param {string} typeArg
@param {FocusEventInit} [focusEventInitDict]
@constructor
*/
function FocusEvent(typeArg,focusEventInitDict) {}
FocusEvent.prototype = new UIEvent();

/**
@type {string}
*/
InputEventInit.prototype.data = '';
/**
@type {boolean}
*/
InputEventInit.prototype.isComposing = false;
InputEventInit.prototype = new UIEventInit();
InputEventInit = {};

/**
@type {string}
@const
*/
InputEvent.prototype.data = null;
/**
@type {boolean}
@const
*/
InputEvent.prototype.isComposing = 0;
/**
@param {string} typeArg
@param {InputEventInit} [inputEventInitDict]
@constructor
*/
function InputEvent(typeArg,inputEventInitDict) {}
InputEvent.prototype = new UIEvent();

/**
@type {number}
*/
WheelEventInit.prototype.deltaX = 0.0;
/**
@type {number}
*/
WheelEventInit.prototype.deltaY = 0.0;
/**
@type {number}
*/
WheelEventInit.prototype.deltaZ = 0.0;
/**
@type {number}
*/
WheelEventInit.prototype.deltaMode = 0;
WheelEventInit.prototype = new UIEventInit();
WheelEventInit = {};

/**
@static
@type {number}
@const
*/
WheelEvent.DOM_DELTA_PIXEL = 0;
/**
@static
@type {number}
@const
*/
WheelEvent.DOM_DELTA_LINE = 1;
/**
@static
@type {number}
@const
*/
WheelEvent.DOM_DELTA_PAGE = 2;
/**
@type {number}
@const
*/
WheelEvent.prototype.deltaX = 0;
/**
@type {number}
@const
*/
WheelEvent.prototype.deltaY = 0;
/**
@type {number}
@const
*/
WheelEvent.prototype.deltaZ = 0;
/**
@type {number}
@const
*/
WheelEvent.prototype.deltaMode = 0;
/**
@param {string} typeArg
@param {WheelEventInit} [wheelEventInitDict]
@constructor
*/
function WheelEvent(typeArg,wheelEventInitDict) {}
WheelEvent.prototype = new MouseEvent();

/**
@type {string}
*/
CompositionEventInit.prototype.data = '';
CompositionEventInit.prototype = new UIEventInit();
CompositionEventInit = {};

/**
@type {string}
@const
*/
CompositionEvent.prototype.data = null;
/**
@param {string} typeArg
@param {CompositionEventInit} [compositionEventInitDict]
@constructor
*/
function CompositionEvent(typeArg,compositionEventInitDict) {}
CompositionEvent.prototype = new MouseEvent();
