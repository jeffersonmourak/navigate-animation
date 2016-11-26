class LinkDiscovery{
  constructor() {
    this.linksElements = [];
    this.navigationSubscribers = [];
    window.onpopstate = this._historyTrap.bind(this);
  }
  _historyTrap(event) {
    this.initEvent(event.target.location.href, event);
  }
  updateLinks() {
    let _links = document.querySelectorAll('a:not([navigate-animation])');
    _links.forEach((element, index) => {
      element.setAttribute('navigate-animation','');
      element.setAttribute('navigate-animation-id', index);
      element.onclick = this.initEvent.bind(this, element.href);
    });
  }
  initEvent(url, event) {
    event.preventDefault();
    this.navigationSubscribers.forEach((callback) => {
      callback(url, event);
    });
  }
  onNavigate(callback) {
    this.navigationSubscribers.push(callback);
  }
}

module.exports = new LinkDiscovery();
