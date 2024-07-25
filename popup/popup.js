import { convertTimestamp } from '../utils/date-helper.js';

const input = document.getElementById('inputTimestamp');
const btnGetCurrentTimestamp = document.getElementById('btnGetCurrentTimestamp');
const btnConvert = document.getElementById('btnConvert');
const output = document.getElementById('result');

btnConvert.addEventListener('click', () => {
  const timestamp = input.value;
  if (timestamp) {
    const date = convertTimestamp(timestamp);
    output.value = date;
    output.select();
  }
});

btnGetCurrentTimestamp.addEventListener('click', () => {
  const timestamp = Date.now();
  input.value = timestamp;
  input.select();
});
