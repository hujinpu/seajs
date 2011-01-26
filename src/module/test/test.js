module.declare(function(require, exports, module) {

  function sendMessage(msg, a1, a2) {
    var p = window.parent;
    if (p && p[msg]) p[msg](a1, a2);
  }

  exports.print = function(txt, style) {
    sendMessage('printResults', txt, style);
  };

  exports.assert = function (guard, message) {
    if (typeof message === 'undefined') message = '';
    if (guard) {
      exports.print('[PASS] ' + message, 'pass');
    } else {
      exports.print('[FAIL] ' + message, 'fail');
    }
  };

  exports.next = function() {
    sendMessage('testNext');
  };

});
