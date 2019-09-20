const DOMNodeCollection = require('./dom_node_collection');
const Snake = require('./snake');
const View = require("./view");

function $l(selector) {
  let elements;

  if (typeof selector === "string")  {
    let nodes = document.querySelectorAll(selector);
    elements = Array.from(nodes);
  } else if (selector instanceof HTMLElement){
    elements = [selector];
  } else if (typeof selector === "function") {
    if (document.readyState === "interactive" || document.readyState === "complete") {
      selector();
    } else {
      document.addEventListener("DOMContentLoaded", selector);
    }
  }

  return new DOMNodeCollection(elements);
}

$l.extend = function(object1, ...otherObjects) {
  otherObjects.forEach(object => {
    Object.assign(object1, object);
  })
};

$l.ajax = function(options) {
  let defaults = {
    contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
    method: "GET",
    url: "",
    data: {},
    success: () => {},
    error: () => {}
  };

  $l.extend(defaults, options);
  const xhr = new XMLHttpRequest();
  xhr.open(defaults.method, defaults.url);

  xhr.onload = function() {
    let responseObject;
    if (options.dataType === "json") {
      responseObject = JSON.parse(xhr.response);
    } else {
      responseObject = xhr.response;
    }

    if (xhr.status === 200) {
      defaults.success(responseObject, xhr.status, xhr);
    } else {
      defaults.error(responseObject, xhr.status, xhr);
    }
  }

  xhr.send(defaults.data);
};

window.$l = $l;
window.Snake = Snake;
window.View = View;