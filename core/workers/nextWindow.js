var HTMLCompiler = require('./htmlCompiler');
class NextWindow {
  constructor() {
    this.nextWindow = document.createElement('div');
    this.nextWindow.style.display = 'none';
    this.nextWindow.id = 'navigate-animation-next-window';
    this.header = null;
    this.body = null;
  }
  prepare() {
    let nextWindow = document.getElementById('navigate-animation-next-window');
    if (nextWindow !== null) {
      this.nextWindow = nextWindow;
    }
    document.body.appendChild(this.nextWindow);
  }
  loadNextWindowData(data) {
    let page = HTMLCompiler.compile(data);
    this.header = page.getElementsByTagName('head')[0];
    this.body = page.getElementsByTagName('body')[0];
    this.nextWindow.appendChild(this.body);
  }
  setAsCurrent() {
    this.nextWindow.style.display = 'block';
  }
}

module.exports = new NextWindow();
