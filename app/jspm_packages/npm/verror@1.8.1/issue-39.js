/* */ 
var mod_verror = require('./lib/verror');
var mod_util = require('util');
function MyError() {
  mod_verror.WError.apply(this, Array.prototype.slice.call(arguments));
}
mod_util.inherits(MyError, mod_verror.WError);
function one() {
  two();
}
function two() {
  console.error(new Error('an Error').stack);
  console.error(new mod_verror.VError('a VError').stack);
  console.error(new mod_verror.WError('a WError').stack);
  console.error(new MyError('a MyError').stack);
}
one();
