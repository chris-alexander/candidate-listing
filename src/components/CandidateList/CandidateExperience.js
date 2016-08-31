var React = require('react');

var parseDate = require('../../utils/parse-date');

var CandidateExperience = React.createClass({
  propTypes: {
    data: React.PropTypes.object.isRequired
  },
  render: function () {
    var dateRange = parseDate(this.props.data.startDate) + ' to ' + parseDate(this.props.data.endDate);
    return (
      <li className="position">
        <p className="position__header bold-small"><em>{this.props.data.position}</em> at {this.props.data.company}</p>
        <p className="position__date font-xsmall">{dateRange}</p>
        <p className="position__summary text">{this.props.data.summary}</p>
      </li>
    );
  }
});

module.exports = CandidateExperience;
