var React = require('react');

var parseDate = require('../../utils/parse-date');

var CandidateExperience = React.createClass({
  propTypes: {
    data: React.PropTypes.object.isRequired
  },
  render: function () {
    var dateRange = parseDate(this.props.data.startDate) + ' - ' + parseDate(this.props.data.endDate);
    return (
      <div className="position">
        <h4 className="position__header heading-small">{this.props.data.position} at {this.props.data.company}</h4>
        <p className="position__date">{dateRange}</p>
        <p className="position__summary">{this.props.data.summary}</p>
      </div>
    );
  }
});

module.exports = CandidateExperience;
