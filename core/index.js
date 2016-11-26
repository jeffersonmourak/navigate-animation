var linkDiscovery = require('./workers/link-discovery');
var nextWindow = require('./workers/nextWindow');
var axios = require('axios');
linkDiscovery.updateLinks();

linkDiscovery.onNavigate((url, event) => {
  nextWindow.prepare();
  axios.get(url).then( response => {
    nextWindow.loadNextWindowData(response.data, url);
    nextWindow.setAsCurrent();
    if (event.type !== 'popstate') {
      nextWindow.updateURL();
    }
    linkDiscovery.updateLinks();
  });
})
