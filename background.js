chrome.commands.onCommand.addListener(function(command) {
  switch (command) {
    case 'close-download-bar':
      chrome.downloads.setShelfEnabled(false);
      break;
    case 'toggle-pin-tab':
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        var current = tabs[0]
        chrome.tabs.update(current.id, {'pinned': !current.pinned});
      });
      break;
  }
});

// reopens download bar after next download
chrome.downloads.onCreated.addListener(_item => {
  chrome.downloads.setShelfEnabled(true);
});