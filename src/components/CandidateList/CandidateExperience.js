var React = require('react');

var parseDate = require('../../utils/parse-date');

var CandidateExperience = React.createClass({
  propTypes: {
    data: React.PropTypes.object.isRequired
  },
  render: function () {
    var dateRange = parseDate(this.props.data.startDate, true) + ' to ' + parseDate(this.props.data.endDate, true);
    return (
      <li className="position">
        <div className="position__header">
          <p className="position__company bold-small">{this.props.data.company}</p>
          <p className="position__title">{this.props.data.position}</p>
          <p className="position__date font-xsmall">{dateRange}</p>
        </div>
        <p className="position__summary text">{this.props.data.summary}</p>
      </li>
    );
  }
});

module.exports = CandidateExperience;
