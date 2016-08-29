/* eslint-env mocha */
var React = require('react');
var expect = require('expect');
var enzyme = require('enzyme');

var MainView = require('./Main');

describe('<MainView>', function () {
  var wrapper;
  beforeEach(function () {
    wrapper = enzyme.shallow(<MainView/>);
  });

  it('does a thing', function () {
    expect(wrapper.find('h1').first().text()).toEqual('Hello World');
  });
});
