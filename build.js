"format register";

System.register("test-template.html!view", [], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  module.exports = "<template>\r\n  <div>Hello world</div>\r\n</template>\r\n";
  global.define = __define;
  return module.exports;
});



//# sourceMappingURL=build.js.map