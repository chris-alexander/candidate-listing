var months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

function parseDate(input, monthOnly) {
  monthOnly = (typeof monthOnly === 'undefined') ? false : monthOnly;
  if (!input || input.toLowerCase() === 'present') {
    return 'Present';
  }
  input = input.split('-').reverse();
  input[1] = months[input[1] - 1];
  if (monthOnly) {
    input.shift();
  } else {
    input[0] = Number(input[0]);
  }
  return input.join(' ');
}

module.exports = parseDate;
