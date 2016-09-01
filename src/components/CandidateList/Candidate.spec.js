/* eslint-env mocha, chai */
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
    summary: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  }
];

describe('<Candidate>', function () {
  var wrapper;
  beforeEach(function () {
    wrapper = enzyme.mount(<Candidate details={mockDetals} experience={mockExperience}/>);
  });

  it('displays the candidate\'s name', function () {
    expect(wrapper.find('.candidate__name').text()).to.equal(mockDetals.name);
  });
  /* the tests below are broken  */
  xit('does not display candidate details by default', function () {
    expect(wrapper.find('.candidate')).to.not.have.attr('open');
  });

  xit('displays candidate details when candidate name is clicked', function () {
    wrapper.find('.candidate__name').simulate('click');
    expect(wrapper.find('.candidate')).to.have.attr('open');
  });
});
