export const convertTimestamp = (timestamp) => {
  if (!timestamp || isNaN(timestamp)) return 'Invalid timestamp';
  timestamp = Number(timestamp);
  if (timestamp.length === 10) timestamp = timestamp * 1000;
  const date = new Date(timestamp);
  return date.toLocaleString();
};
