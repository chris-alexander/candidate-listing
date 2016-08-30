var React = require('react');

var CandidateExperience = require('./CandidateExperience');

var parseDate = require('../../utils/parse-date');

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
    var birthDate = parseDate(this.props.details.birthDate);
    return (
      <div className="candidate" onClick={this.handleClick}>
        <h3 className="heading-small">{this.props.details.name}</h3>
        <p className="candidate__birthDate" hidden={this.state.hideDetails}>{birthDate}</p>
        <div className="candidate__details" hidden={this.state.hideDetails}>
          <div className="candidate__experience">
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
