var React = require('react');
var $ = require('jquery');

var Candidate = require('./Candidate');

var CandidateList = React.createClass({
  propTypes: {
    url: React.PropTypes.string.isRequired
  },
  getInitialState: function () {
    return {
      data: []
    };
  },
  componentDidMount: function () {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function (data) {
        this.setState({data: data.candidates});
      }.bind(this),
      error: function (xhr, status, error) {
        console.error(this.props.url, status, error.toString());
      }.bind(this)
    });
  },
  render: function () {
    return (
      <div className="candidate">
        <h2>Candidates:</h2>
        {this.state.data.map(function (candidate) {
          return (
            <Candidate
              details={candidate.basics}
              experience={candidate.work}
              key={candidate.id}
              />);
        })}
      </div>
    );
  }
});

module.exports = CandidateList;
