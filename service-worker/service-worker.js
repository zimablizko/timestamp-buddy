const convertTimestamp = (timestamp) => {
  if (!timestamp || isNaN(timestamp)) return 'Invalid timestamp';
  if (timestamp.length === 10) timestamp = timestamp * 1000;
  timestamp = Number(timestamp);
  const date = new Date(timestamp);
  return date.toLocaleString();
};

chrome.runtime.onInstalled.addListener(function () {
  chrome.contextMenus.create({
    title: 'Convert Timestamp',
    contexts: ['selection'],
    id: 'convertTimestamp',
  });
});

chrome.contextMenus.onClicked.addListener(convertOnClick);

function convertOnClick(info) {
  const timestamp = info.selectionText;
  if (timestamp) {
    const date = convertTimestamp(timestamp);
    console.log(date);
    chrome.notifications.create({
      type: 'basic',
      iconUrl: '../images/icon-128.png',
      title: 'Timestamp Converter',
      message: date,
    });
  }
}
