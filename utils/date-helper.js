export const convertTimestamp = (timestamp) => {
  if (!timestamp || isNaN(timestamp)) return 'Invalid timestamp';
  const date = new Date(timestamp);
  return date.toLocaleString();
};

export const normalizeTimestamp = (timestamp) => {
  let timestampString = timestamp.toString();
  if (timestampString.length < 13) {
    timestampString = timestampString.padEnd(13, '0');
  }
  if (timestamp.length > 13) {
    timestampString = timestampString.slice(0, 13);
  }
  return Number(timestampString);
};
