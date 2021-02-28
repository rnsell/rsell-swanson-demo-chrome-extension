function gotMessage(message, sender, sendResponse) {
  window.postMessage(message, window);
}

chrome.runtime.onMessage.addListener(gotMessage);
