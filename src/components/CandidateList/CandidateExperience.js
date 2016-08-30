var React = require('react');

var CandidateExperience = React.createClass({
  propTypes: {
    data: React.PropTypes.object.isRequired
  },
  render: function () {
    return (
      <div className="position">
        <p className="position__header">{this.props.data.position} at {this.props.data.company}
          <span className="position__date">{this.props.data.startDate + ' ' + this.props.data.endDate}</span>
        </p>
        <p className="position__summary">{this.props.data.summary}</p>
      </div>
    );
  }
});

module.exports = CandidateExperience;
