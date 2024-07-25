let timeoutId = null;
let lastContextMenuEvent = null;
const TIMEOUT_VALUE = 4000;

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'showTooltip') {
    showTooltip(request.message, request.x, request.y);
  }
  if (request.action === 'getContextMenuEvent') {
    sendResponse(lastContextMenuEvent);
  }
});

document.addEventListener('contextmenu', (event) => {
  lastContextMenuEvent = {
    pageX: event.pageX,
    pageY: event.pageY,
  };
});

function showTooltip(message, x, y) {
  clearTimeout(timeoutId);
  let tooltip = document.getElementById('timestamp-tooltip');
  if (!tooltip) {
    tooltip = document.createElement('div');
    tooltip.id = 'timestamp-tooltip';
    document.body.appendChild(tooltip);
  }
  tooltip.textContent = message;
  tooltip.style.left = `${x}px`;
  tooltip.style.top = `${y}px`;
  tooltip.style.visibility = 'visible';
  timeoutId = setTimeout(() => {
    tooltip.style.visibility = 'hidden';
  }, TIMEOUT_VALUE);
}
