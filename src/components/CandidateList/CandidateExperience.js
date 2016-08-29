var React = require('react');

var CandidateExperience = React.createClass({
  propTypes: {
    data: React.PropTypes.object.isRequired
  },
  render: function () {
    return (
      <div className="position">
        <p>{this.props.data.position} at {this.props.data.company}
          <span className="position--date">{this.props.data.startDate + ' ' + this.props.data.endDate}</span>
        </p>
        <p>{this.props.data.summary}</p>
      </div>
    );
  }
});

module.exports = CandidateExperience;
