var chai = require('chai');
var chaiEnzyme = require('chai-enzyme');
chai.use(chaiEnzyme());

var context = require.context('./src', true, /\.spec\.jsx?$/);
context.keys().forEach(context);
