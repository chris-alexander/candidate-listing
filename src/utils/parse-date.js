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

function parseDate(input) {
  if (!input || input.toLowerCase() === 'present') {
    return 'Present';
  }
  input = input.split('-').reverse();
  input[1] = months[input[1] - 1];
  input[0] = Number(input[0]);
  return input.join(' ');
}

module.exports = parseDate;
