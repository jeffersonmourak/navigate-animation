class HTMLCompiler {
  compile(htmlString) {
    let _DOMParser = new DOMParser();
    return _DOMParser.parseFromString(htmlString, "text/html");
  }
}

module.exports = new HTMLCompiler();
