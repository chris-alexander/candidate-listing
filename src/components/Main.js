var React = require('react');

var CandidateList = require('./CandidateList/CandidateList');

var MainView = React.createClass({
  render: function () {
    return (
      <div>
        <CandidateList url="./data/candidates.json"/>
      </div>
    );
  }
});

module.exports = MainView;
