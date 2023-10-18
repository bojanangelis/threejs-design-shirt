"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/suspend-react";
exports.ids = ["vendor-chunks/suspend-react"];
exports.modules = {

/***/ "(ssr)/./node_modules/suspend-react/index.cjs.js":
/*!*************************************************!*\
  !*** ./node_modules/suspend-react/index.cjs.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\n\nconst isPromise = promise => typeof promise === 'object' && typeof promise.then === 'function';\n\nconst globalCache = [];\n\nfunction shallowEqualArrays(arrA, arrB, equal = (a, b) => a === b) {\n  if (arrA === arrB) return true;\n  if (!arrA || !arrB) return false;\n  const len = arrA.length;\n  if (arrB.length !== len) return false;\n\n  for (let i = 0; i < len; i++) if (!equal(arrA[i], arrB[i])) return false;\n\n  return true;\n}\n\nfunction query(fn, keys = null, preload = false, config = {}) {\n  // If no keys were given, the function is the key\n  if (keys === null) keys = [fn];\n\n  for (const entry of globalCache) {\n    // Find a match\n    if (shallowEqualArrays(keys, entry.keys, entry.equal)) {\n      // If we're pre-loading and the element is present, just return\n      if (preload) return undefined; // If an error occurred, throw\n\n      if (Object.prototype.hasOwnProperty.call(entry, 'error')) throw entry.error; // If a response was successful, return\n\n      if (Object.prototype.hasOwnProperty.call(entry, 'response')) {\n        if (config.lifespan && config.lifespan > 0) {\n          if (entry.timeout) clearTimeout(entry.timeout);\n          entry.timeout = setTimeout(entry.remove, config.lifespan);\n        }\n\n        return entry.response;\n      } // If the promise is still unresolved, throw\n\n\n      if (!preload) throw entry.promise;\n    }\n  } // The request is new or has changed.\n\n\n  const entry = {\n    keys,\n    equal: config.equal,\n    remove: () => {\n      const index = globalCache.indexOf(entry);\n      if (index !== -1) globalCache.splice(index, 1);\n    },\n    promise: // Execute the promise\n    (isPromise(fn) ? fn : fn(...keys) // When it resolves, store its value\n    ).then(response => {\n      entry.response = response; // Remove the entry in time if a lifespan was given\n\n      if (config.lifespan && config.lifespan > 0) {\n        entry.timeout = setTimeout(entry.remove, config.lifespan);\n      }\n    }) // Store caught errors, they will be thrown in the render-phase to bubble into an error-bound\n    .catch(error => entry.error = error)\n  }; // Register the entry\n\n  globalCache.push(entry); // And throw the promise, this yields control back to React\n\n  if (!preload) throw entry.promise;\n  return undefined;\n}\n\nconst suspend = (fn, keys, config) => query(fn, keys, false, config);\n\nconst preload = (fn, keys, config) => void query(fn, keys, true, config);\n\nconst peek = keys => {\n  var _globalCache$find;\n\n  return (_globalCache$find = globalCache.find(entry => shallowEqualArrays(keys, entry.keys, entry.equal))) == null ? void 0 : _globalCache$find.response;\n};\n\nconst clear = keys => {\n  if (keys === undefined || keys.length === 0) globalCache.splice(0, globalCache.length);else {\n    const entry = globalCache.find(entry => shallowEqualArrays(keys, entry.keys, entry.equal));\n    if (entry) entry.remove();\n  }\n};\n\nexports.clear = clear;\nexports.peek = peek;\nexports.preload = preload;\nexports.suspend = suspend;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvc3VzcGVuZC1yZWFjdC9pbmRleC5janMuanMiLCJtYXBwaW5ncyI6IkFBQWE7O0FBRWIsOENBQTZDLEVBQUUsYUFBYSxFQUFDOztBQUU3RDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGtCQUFrQixTQUFTOztBQUUzQjtBQUNBOztBQUVBLDREQUE0RDtBQUM1RDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDOztBQUVyQyxtRkFBbUY7O0FBRW5GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxRQUFROzs7QUFHUjtBQUNBO0FBQ0EsSUFBSTs7O0FBR0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQzs7QUFFakM7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSzs7QUFFTCwyQkFBMkI7O0FBRTNCO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSx5RkFBeUY7QUFDekY7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsYUFBYTtBQUNiLFlBQVk7QUFDWixlQUFlO0FBQ2YsZUFBZSIsInNvdXJjZXMiOlsid2VicGFjazovL3RocmVlanMtZGVzaWduLXNoaXJ0Ly4vbm9kZV9tb2R1bGVzL3N1c3BlbmQtcmVhY3QvaW5kZXguY2pzLmpzPzQ3ZDUiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG5jb25zdCBpc1Byb21pc2UgPSBwcm9taXNlID0+IHR5cGVvZiBwcm9taXNlID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgcHJvbWlzZS50aGVuID09PSAnZnVuY3Rpb24nO1xuXG5jb25zdCBnbG9iYWxDYWNoZSA9IFtdO1xuXG5mdW5jdGlvbiBzaGFsbG93RXF1YWxBcnJheXMoYXJyQSwgYXJyQiwgZXF1YWwgPSAoYSwgYikgPT4gYSA9PT0gYikge1xuICBpZiAoYXJyQSA9PT0gYXJyQikgcmV0dXJuIHRydWU7XG4gIGlmICghYXJyQSB8fCAhYXJyQikgcmV0dXJuIGZhbHNlO1xuICBjb25zdCBsZW4gPSBhcnJBLmxlbmd0aDtcbiAgaWYgKGFyckIubGVuZ3RoICE9PSBsZW4pIHJldHVybiBmYWxzZTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKSBpZiAoIWVxdWFsKGFyckFbaV0sIGFyckJbaV0pKSByZXR1cm4gZmFsc2U7XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cbmZ1bmN0aW9uIHF1ZXJ5KGZuLCBrZXlzID0gbnVsbCwgcHJlbG9hZCA9IGZhbHNlLCBjb25maWcgPSB7fSkge1xuICAvLyBJZiBubyBrZXlzIHdlcmUgZ2l2ZW4sIHRoZSBmdW5jdGlvbiBpcyB0aGUga2V5XG4gIGlmIChrZXlzID09PSBudWxsKSBrZXlzID0gW2ZuXTtcblxuICBmb3IgKGNvbnN0IGVudHJ5IG9mIGdsb2JhbENhY2hlKSB7XG4gICAgLy8gRmluZCBhIG1hdGNoXG4gICAgaWYgKHNoYWxsb3dFcXVhbEFycmF5cyhrZXlzLCBlbnRyeS5rZXlzLCBlbnRyeS5lcXVhbCkpIHtcbiAgICAgIC8vIElmIHdlJ3JlIHByZS1sb2FkaW5nIGFuZCB0aGUgZWxlbWVudCBpcyBwcmVzZW50LCBqdXN0IHJldHVyblxuICAgICAgaWYgKHByZWxvYWQpIHJldHVybiB1bmRlZmluZWQ7IC8vIElmIGFuIGVycm9yIG9jY3VycmVkLCB0aHJvd1xuXG4gICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGVudHJ5LCAnZXJyb3InKSkgdGhyb3cgZW50cnkuZXJyb3I7IC8vIElmIGEgcmVzcG9uc2Ugd2FzIHN1Y2Nlc3NmdWwsIHJldHVyblxuXG4gICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGVudHJ5LCAncmVzcG9uc2UnKSkge1xuICAgICAgICBpZiAoY29uZmlnLmxpZmVzcGFuICYmIGNvbmZpZy5saWZlc3BhbiA+IDApIHtcbiAgICAgICAgICBpZiAoZW50cnkudGltZW91dCkgY2xlYXJUaW1lb3V0KGVudHJ5LnRpbWVvdXQpO1xuICAgICAgICAgIGVudHJ5LnRpbWVvdXQgPSBzZXRUaW1lb3V0KGVudHJ5LnJlbW92ZSwgY29uZmlnLmxpZmVzcGFuKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBlbnRyeS5yZXNwb25zZTtcbiAgICAgIH0gLy8gSWYgdGhlIHByb21pc2UgaXMgc3RpbGwgdW5yZXNvbHZlZCwgdGhyb3dcblxuXG4gICAgICBpZiAoIXByZWxvYWQpIHRocm93IGVudHJ5LnByb21pc2U7XG4gICAgfVxuICB9IC8vIFRoZSByZXF1ZXN0IGlzIG5ldyBvciBoYXMgY2hhbmdlZC5cblxuXG4gIGNvbnN0IGVudHJ5ID0ge1xuICAgIGtleXMsXG4gICAgZXF1YWw6IGNvbmZpZy5lcXVhbCxcbiAgICByZW1vdmU6ICgpID0+IHtcbiAgICAgIGNvbnN0IGluZGV4ID0gZ2xvYmFsQ2FjaGUuaW5kZXhPZihlbnRyeSk7XG4gICAgICBpZiAoaW5kZXggIT09IC0xKSBnbG9iYWxDYWNoZS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH0sXG4gICAgcHJvbWlzZTogLy8gRXhlY3V0ZSB0aGUgcHJvbWlzZVxuICAgIChpc1Byb21pc2UoZm4pID8gZm4gOiBmbiguLi5rZXlzKSAvLyBXaGVuIGl0IHJlc29sdmVzLCBzdG9yZSBpdHMgdmFsdWVcbiAgICApLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgZW50cnkucmVzcG9uc2UgPSByZXNwb25zZTsgLy8gUmVtb3ZlIHRoZSBlbnRyeSBpbiB0aW1lIGlmIGEgbGlmZXNwYW4gd2FzIGdpdmVuXG5cbiAgICAgIGlmIChjb25maWcubGlmZXNwYW4gJiYgY29uZmlnLmxpZmVzcGFuID4gMCkge1xuICAgICAgICBlbnRyeS50aW1lb3V0ID0gc2V0VGltZW91dChlbnRyeS5yZW1vdmUsIGNvbmZpZy5saWZlc3Bhbik7XG4gICAgICB9XG4gICAgfSkgLy8gU3RvcmUgY2F1Z2h0IGVycm9ycywgdGhleSB3aWxsIGJlIHRocm93biBpbiB0aGUgcmVuZGVyLXBoYXNlIHRvIGJ1YmJsZSBpbnRvIGFuIGVycm9yLWJvdW5kXG4gICAgLmNhdGNoKGVycm9yID0+IGVudHJ5LmVycm9yID0gZXJyb3IpXG4gIH07IC8vIFJlZ2lzdGVyIHRoZSBlbnRyeVxuXG4gIGdsb2JhbENhY2hlLnB1c2goZW50cnkpOyAvLyBBbmQgdGhyb3cgdGhlIHByb21pc2UsIHRoaXMgeWllbGRzIGNvbnRyb2wgYmFjayB0byBSZWFjdFxuXG4gIGlmICghcHJlbG9hZCkgdGhyb3cgZW50cnkucHJvbWlzZTtcbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cblxuY29uc3Qgc3VzcGVuZCA9IChmbiwga2V5cywgY29uZmlnKSA9PiBxdWVyeShmbiwga2V5cywgZmFsc2UsIGNvbmZpZyk7XG5cbmNvbnN0IHByZWxvYWQgPSAoZm4sIGtleXMsIGNvbmZpZykgPT4gdm9pZCBxdWVyeShmbiwga2V5cywgdHJ1ZSwgY29uZmlnKTtcblxuY29uc3QgcGVlayA9IGtleXMgPT4ge1xuICB2YXIgX2dsb2JhbENhY2hlJGZpbmQ7XG5cbiAgcmV0dXJuIChfZ2xvYmFsQ2FjaGUkZmluZCA9IGdsb2JhbENhY2hlLmZpbmQoZW50cnkgPT4gc2hhbGxvd0VxdWFsQXJyYXlzKGtleXMsIGVudHJ5LmtleXMsIGVudHJ5LmVxdWFsKSkpID09IG51bGwgPyB2b2lkIDAgOiBfZ2xvYmFsQ2FjaGUkZmluZC5yZXNwb25zZTtcbn07XG5cbmNvbnN0IGNsZWFyID0ga2V5cyA9PiB7XG4gIGlmIChrZXlzID09PSB1bmRlZmluZWQgfHwga2V5cy5sZW5ndGggPT09IDApIGdsb2JhbENhY2hlLnNwbGljZSgwLCBnbG9iYWxDYWNoZS5sZW5ndGgpO2Vsc2Uge1xuICAgIGNvbnN0IGVudHJ5ID0gZ2xvYmFsQ2FjaGUuZmluZChlbnRyeSA9PiBzaGFsbG93RXF1YWxBcnJheXMoa2V5cywgZW50cnkua2V5cywgZW50cnkuZXF1YWwpKTtcbiAgICBpZiAoZW50cnkpIGVudHJ5LnJlbW92ZSgpO1xuICB9XG59O1xuXG5leHBvcnRzLmNsZWFyID0gY2xlYXI7XG5leHBvcnRzLnBlZWsgPSBwZWVrO1xuZXhwb3J0cy5wcmVsb2FkID0gcHJlbG9hZDtcbmV4cG9ydHMuc3VzcGVuZCA9IHN1c3BlbmQ7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/suspend-react/index.cjs.js\n");

/***/ })

};
;