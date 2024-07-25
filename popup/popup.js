import { convertTimestamp, normalizeTimestamp } from '../utils/date-helper.js';

const input = document.getElementById('inputTimestamp');
const btnGetCurrentTimestamp = document.getElementById('btnGetCurrentTimestamp');
const btnConvert = document.getElementById('btnConvert');
const output = document.getElementById('result');

btnConvert.addEventListener('click', () => {
  if (!input.value) {
    setCurrentTimestamp();
  }
  const timestamp = normalizeTimestamp(input.value);
  input.value = timestamp;
  if (timestamp) {
    const date = convertTimestamp(timestamp);
    output.value = date;
    output.select();
  }
});

btnGetCurrentTimestamp.addEventListener('click', () => {
  setCurrentTimestamp();
  input.select();
});

const setCurrentTimestamp = () => {
  const timestamp = Date.now();
  input.value = timestamp;
};
