var months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec'
];

function parseDate(input) {
  if (!input || input.toLowerCase() === 'present') {
    return 'Present';
  }
  input = input.split('-').reverse();
  input[1] = months[input[1] - 1];
  return input.join(' ');
}

module.exports = parseDate;
