var linkDiscovery = require('./workers/link-discovery');
var nextWindow = require('./workers/nextWindow');
var axios = require('axios');
linkDiscovery.updateLinks();

linkDiscovery.onNavigate((element, event) => {
  nextWindow.prepare();
  axios.get(element.href).then( response => {
    nextWindow.loadNextWindowData(response.data);
    nextWindow.setAsCurrent();
  });
})
