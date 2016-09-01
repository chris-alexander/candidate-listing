/* eslint-env mocha */
var React = require('react');
var expect = require('chai').expect;
var enzyme = require('enzyme');

var Candidate = require('./Candidate');

var mockDetals = {
  name: 'Test Candidate',
  birthDate: '1990-03-08'
};
var mockExperience = [
  {
    company: 'RobCo Industries Inc.',
    position: 'Business Analyst',
    startDate: '2012-08-05',
    endDate: '2016-04-30',
    summary: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  }
];

describe('<Candidate>', function () {
  var wrapper;
  beforeEach(function () {
    wrapper = enzyme.shallow(<Candidate details={mockDetals} experience={mockExperience}/>);
  });

  it('displays the candidate\'s name', function () {
    expect(wrapper.find('.candidate__name').text()).to.equal(mockDetals.name);
  });
});
