class Animation{
  constructor() {
    this.header = null;
  }

  loadHeader(header) {
    this.header = header;
    this.styles = header.querySelectorAll('style');
  }

  animate(target) {
    this.styles.forEach(style => {
      target.appendChild(style);
    });
  }
}

module.exports = new Animation();
