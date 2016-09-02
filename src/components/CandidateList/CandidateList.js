var React = require('react');
var $ = require('jquery');

var Candidate = require('./Candidate');

var CandidateList = React.createClass({
  propTypes: {
    url: React.PropTypes.string.isRequired
  },
  getInitialState: function () {
    return {
      data: {
        vacancy: {},
        candidates: []
      }
    };
  },
  componentDidMount: function () {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function (data) {
        this.setState({data: data});
      }.bind(this),
      error: function (xhr, status, error) {
        console.error(this.props.url, status, error.toString());
      }.bind(this)
    });
  },
  render: function () {
    var candidates = this.state.data.candidates;
    var vacancyRef = this.state.data.vacancy.reference + ' - ' + this.state.data.vacancy.title;
    return (
      <div className="candidate-list">
        <h1 className="heading-large">Candidates:</h1>
        <p className="text">Below you will find a list of Candidates who have been shortlisted for your vacancy: <em>{vacancyRef}</em>. Click on each candidate's name to view more detail. Please contact your HR business partner when you have chosen a suitable candidate.</p>
        <hr/>
        <ul className="list">{candidates.map(function (candidate) {
          return (
            <Candidate
              details={candidate.basics}
              experience={candidate.work}
              key={candidate.id}
              />);
        })}</ul>
      </div>
    );
  }
});

module.exports = CandidateList;
