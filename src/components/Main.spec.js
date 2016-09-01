/* eslint-env mocha */
var React = require('react');
var expect = require('chai').expect;
var enzyme = require('enzyme');

var MainView = require('./Main');

describe('<MainView>', function () {
  var wrapper;
  beforeEach(function () {
    wrapper = enzyme.shallow(<MainView/>);
  });

  xit('does a thing', function () {
    expect(wrapper.find('h1').first().text()).to.equal('Hello World');
  });
});
