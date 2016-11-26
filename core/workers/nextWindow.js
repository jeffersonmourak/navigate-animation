var HTMLCompiler = require('./htmlCompiler');
var Animation = require('./animation');
class NextWindow {
  constructor() {
    this.nextWindow = document.createElement('div');
    this.nextWindow.style.display = 'none';
    this.nextWindow.id = 'navigate-animation-next-window';
    this.head = null;
    this.body = null;
    this.url = null;
    this.host = "http://"+window.location.host;
  }
  prepare() {
    let nextWindow = document.getElementById('navigate-animation-next-window');
    if (nextWindow !== null) {
      this.nextWindow = nextWindow;
    }
    document.body.appendChild(this.nextWindow);
  }
  loadNextWindowData(data, url) {
    let page = HTMLCompiler.compile(data);
    this.head = page.getElementsByTagName('head')[0];
    this.body = page.getElementsByTagName('body')[0];
    this.nextWindow.appendChild(this.body);
    this.url = url;
  }
  _clearBody(){
    while (document.body.firstChild) {
        document.body.removeChild(document.body.firstChild);
    }
  }
  _clearHead() {
    while (document.head.firstChild) {
        document.head.removeChild(document.head.firstChild);
    }
  }
  updateURL() {
    let nextURL = this.url.replace(this.host, '');
    history.pushState('title', 'title', nextURL);
  }
  _moveChildren(element, target) {
    while(element.firstChild) {
      let child = element.firstChild;
      target.appendChild(child);
    }
  }
  setAsCurrent() {
    this._clearBody();
    this._moveChildren(this.body, document.body);
    
    let to = setTimeout(() => {
      this._clearHead();
      this._moveChildren(this.head, document.head);
    },20);

  }
}

module.exports = new NextWindow();
