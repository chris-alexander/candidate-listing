/* eslint-env mocha */
var React = require('react');
var expect = require('chai').expect;
var enzyme = require('enzyme');

var MainView = require('./Main');
var CandidateList = require('./CandidateList/CandidateList');

describe('<MainView>', function () {
  var wrapper;
  beforeEach(function () {
    wrapper = enzyme.shallow(<MainView/>);
  });

  it('renders the CandidateList component', function () {
    expect(wrapper.find(CandidateList)).to.have.length(1);
  });
});
