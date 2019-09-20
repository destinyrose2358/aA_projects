class DOMNodeCollection {
  constructor(arr){
    this.elements = arr;
  }

  html(str){
    if (str !== undefined){
      this.elements.forEach(el => {
        el.innerHTML = str;
      })
    } else{
      return this.elements[0].innerHTML;
    }
  }

  empty(){
    this.elements.forEach(el => {
      el.innerHTML = '';
    })
  }

  append(arg){
    if (typeof arg === "string") {
      this.elements.forEach(el => {
        el.innerHTML += arg;
      });
    } else if (arg instanceof HTMLElement) {
      this.elements.forEach(el => {
        el.innerHTML += arg.outerHTML;
      });
    } else if (arg instanceof DOMNodeCollection) {
      this.elements.forEach(el => {
        arg.elements.forEach(el2 => {
          el.innerHTML += el2.outerHTML;
        })
      });
    }
  }

  attr(key, value) {
    if (value !== undefined) {
      this.elements.forEach(el => {
        el.setAttribute(key, value);
      })
    } else {
      return this.elements[0].getAttribute(key);
    } 
  }

  addClass(className) {
    this.elements.forEach(el => {
      el.classList.add(className);
    })
  }
  
  removeClass(className) {
    this.elements.forEach(el => {
      el.classList.remove(className);
    })
  }

  children() {
    let children = [];

    this.elements.forEach(el =>{
      children = children.concat(Array.from(el.children));
    })

    return new DOMNodeCollection(children);
  }

  parent() {
    let parent = [];

    this.elements.forEach(el =>{
      parent.push(el.parentNode);
    })

    return new DOMNodeCollection(parent);
  }

  find(selector) {
    let nodes = [];
    this.elements.forEach(el => {
      nodes = nodes.concat(Array.from(el.querySelectorAll(selector)));
    })
    return new DOMNodeCollection(nodes);
  }

  remove() {
    this.elements.forEach(el => {
      el.parentNode.removeChild(el);
    })
  }

  on(event, handler) {
    this.elements.forEach(el => {
      el.addEventListener(event, handler);
      el[event + "-handlers"] = (el[event + "-handlers"] === undefined) ? [handler] : el[event + "-handlers"].concat([handler]);
    })
  }

  off(event) {
    this.elements.forEach(el => {
      el[event + "-handlers"].forEach(handler => {
        el.removeEventListener(event, handler);
      });
      el[event + "-handlers"] = [];
    });
  }
}

module.exports = DOMNodeCollection;