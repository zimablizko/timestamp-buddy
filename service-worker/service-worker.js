import { convertTimestamp, normalizeTimestamp } from '../utils/date-helper.js';

chrome.runtime.onInstalled.addListener(function () {
  chrome.contextMenus.create({
    title: 'Convert Timestamp',
    contexts: ['selection'],
    id: 'convertTimestamp',
  });
});

chrome.contextMenus.onClicked.addListener(convertOnClick);

function convertOnClick(info, tab) {
  if (!tab || tab.id < 0) return;
  const timestamp = normalizeTimestamp(info.selectionText);
  if (timestamp) {
    const date = convertTimestamp(timestamp);
    chrome.tabs.sendMessage(tab.id, { action: 'getContextMenuEvent' }, (response) => {
      if (response) {
        chrome.tabs.sendMessage(tab.id, {
          action: 'showTooltip',
          message: date,
          x: response.pageX,
          y: response.pageY,
        });
      }
    });
  }
}
