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
      <div className="candidate">
        <h2 className="heading-medium" onClick={this.handleClick}>{this.props.details.name}</h2>
        <div className="candidate__details" hidden={this.state.hideDetails}>
          <p className="candidate__birthDate">Date of Birth: {birthDate}</p>
          <div className="candidate__experience">
            <h3 className="heading-small">Experience:</h3>
            <ol className="list">{this.props.experience.map(function (position, index) {
              return (
                <CandidateExperience data={position} key={index}/>
              );
            })}</ol>
          </div>
          <hr/>
        </div>
      </div>
    );
  }
});

module.exports = Candidate;
