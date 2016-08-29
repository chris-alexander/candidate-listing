var React = require('react');

var CandidateExperience = require('./CandidateExperience');

var Candidate = React.createClass({
  propTypes: {
    details: React.PropTypes.object.isRequired,
    experience: React.PropTypes.array.isRequired
  },
  getInitialState: function () {
    return {
      hideDetails: true
    };
  },
  handleClick: function () {
    this.setState({hideDetails: !this.state.hideDetails});
  },
  render: function () {
    return (
      <div className="candidate" onClick={this.handleClick}>
        <h3>{this.props.details.name}</h3>
        <p className="candidate--birthDate" hidden={this.state.hideDetails}>{this.props.details.birthDate}</p>
        <div className="candidate--details" hidden={this.state.hideDetails}>
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
