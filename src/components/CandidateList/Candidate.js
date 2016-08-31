var React = require('react');

var CandidateExperience = require('./CandidateExperience');

var parseDate = require('../../utils/parse-date');

var Candidate = React.createClass({
  propTypes: {
    details: React.PropTypes.object.isRequired,
    experience: React.PropTypes.array.isRequired
  },
  render: function () {
    var birthDate = parseDate(this.props.details.birthDate);
    return (
      <li>
        <details className="candidate">
          <summary className="candidate__name heading-medium">{this.props.details.name}</summary>
          <div className="candidate__details">
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
        </details>
      </li>
    );
  }
});

module.exports = Candidate;
