/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/dom_node_collection.js":
/*!************************************!*\
  !*** ./src/dom_node_collection.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class DOMNodeCollection {\n  constructor(arr){\n    this.elements = arr;\n  }\n\n  html(str){\n    if (str !== undefined){\n      this.elements.forEach(el => {\n        el.innerHTML = str;\n      })\n    } else{\n      return this.elements[0].innerHTML;\n    }\n  }\n\n  empty(){\n    this.elements.forEach(el => {\n      el.innerHTML = '';\n    })\n  }\n\n  append(arg){\n    if (typeof arg === \"string\") {\n      this.elements.forEach(el => {\n        el.innerHTML += arg;\n      });\n    } else if (arg instanceof HTMLElement) {\n      this.elements.forEach(el => {\n        el.innerHTML += arg.outerHTML;\n      });\n    } else if (arg instanceof DOMNodeCollection) {\n      this.elements.forEach(el => {\n        arg.elements.forEach(el2 => {\n          el.innerHTML += el2.outerHTML;\n        })\n      });\n    }\n  }\n\n  attr(key, value) {\n    if (value !== undefined) {\n      this.elements.forEach(el => {\n        el.setAttribute(key, value);\n      })\n    } else {\n      return this.elements[0].getAttribute(key);\n    } \n  }\n\n  addClass(className) {\n    this.elements.forEach(el => {\n      el.classList.add(className);\n    })\n  }\n  \n  removeClass(className) {\n    this.elements.forEach(el => {\n      el.classList.remove(className);\n    })\n  }\n\n  children() {\n    let children = [];\n\n    this.elements.forEach(el =>{\n      children = children.concat(Array.from(el.children));\n    })\n\n    return new DOMNodeCollection(children);\n  }\n\n  parent() {\n    let parent = [];\n\n    this.elements.forEach(el =>{\n      parent.push(el.parentNode);\n    })\n\n    return new DOMNodeCollection(parent);\n  }\n\n  find(selector) {\n    let nodes = [];\n    this.elements.forEach(el => {\n      nodes = nodes.concat(Array.from(el.querySelectorAll(selector)));\n    })\n    return new DOMNodeCollection(nodes);\n  }\n\n  remove() {\n    this.elements.forEach(el => {\n      el.parentNode.removeChild(el);\n    })\n  }\n\n  on(event, handler) {\n    this.elements.forEach(el => {\n      el.addEventListener(event, handler);\n      el[event + \"-handlers\"] = (el[event + \"-handlers\"] === undefined) ? [handler] : el[event + \"-handlers\"].concat([handler]);\n    })\n  }\n\n  off(event) {\n    this.elements.forEach(el => {\n      el[event + \"-handlers\"].forEach(handler => {\n        el.removeEventListener(event, handler);\n      });\n      el[event + \"-handlers\"] = [];\n    });\n  }\n}\n\nmodule.exports = DOMNodeCollection;\n\n//# sourceURL=webpack:///./src/dom_node_collection.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const DOMNodeCollection = __webpack_require__(/*! ./dom_node_collection */ \"./src/dom_node_collection.js\");\n\nfunction $l(selector) {\n  let elements;\n\n  if (typeof selector === \"string\")  {\n    let nodes = document.querySelectorAll(selector);\n    elements = Array.from(nodes);\n  } else if (selector instanceof HTMLElement){\n    elements = [selector];\n  } else if (typeof selector === \"function\") {\n    if (document.readyState === \"interactive\" || document.readyState === \"complete\") {\n      selector();\n    } else {\n      document.addEventListener(\"DOMContentLoaded\", selector);\n    }\n  }\n\n  return new DOMNodeCollection(elements);\n}\n\n$l.extend = function(object1, ...otherObjects) {\n  otherObjects.forEach(object => {\n    Object.assign(object1, object);\n  })\n};\n\n$l.ajax = function(options) {\n  let defaults = {\n    contentType: 'application/x-www-form-urlencoded; charset=UTF-8',\n    method: \"GET\",\n    url: \"\",\n    data: {},\n    success: () => {},\n    error: () => {}\n  };\n\n  $l.extend(defaults, options);\n  const xhr = new XMLHttpRequest();\n  xhr.open(defaults.method, defaults.url);\n\n  xhr.onload = function() {\n    let responseObject;\n    if (options.dataType === \"json\") {\n      responseObject = JSON.parse(xhr.response);\n    } else {\n      responseObject = xhr.response;\n    }\n\n    if (xhr.status === 200) {\n      defaults.success(responseObject, xhr.status, xhr);\n    } else {\n      defaults.error(responseObject, xhr.status, xhr);\n    }\n  }\n\n  xhr.send(defaults.data);\n};\n\nwindow.$l = $l;\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });