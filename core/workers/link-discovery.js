class LinkDiscovery{
  constructor() {
    this.linksElements = [];
    this.navigationSubscribers = [];
  }
  updateLinks() {
    let _links = document.querySelectorAll('a:not([navigate-animation])');
    _links.forEach((element, index) => {
      element.setAttribute('navigate-animation','');
      element.setAttribute('navigate-animation-id', index);
      element.onclick = this.initEvent.bind(this, element);
    });
  }
  initEvent(element, event) {
    event.preventDefault();
    this.navigationSubscribers.forEach((callback) => {
      callback(element, event);
    });
  }
  onNavigate(callback) {
    this.navigationSubscribers.push(callback);
  }
}

module.exports = new LinkDiscovery();
