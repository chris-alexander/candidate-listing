var React = require('react');

var CandidateExperience = require('./CandidateExperience');

var Candidate = React.createClass({
  propTypes: {
    details: React.PropTypes.object.isRequired,
    experience: React.PropTypes.array.isRequired
  },
  render: function () {
    return (
      <div className="candidate">
        <h3>{this.props.details.name}</h3>
        <div className="candidate--details">
          <p>{this.props.details.birthDate}</p>
          <div className="candidate--experience">
            {this.props.experience.map(function (position, index) {
              return (
                <CandidateExperience data={position} key={index}/>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Candidate;
