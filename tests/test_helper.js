import jsdom from "jsdom";
import chai from "chai";
import chaiImmutable from "chai-immutable";
import hook from "css-modules-require-hook";
import sass from "node-sass";
import path from "path";

const doc = jsdom.jsdom("<!doctype html><html><body></body></html>");
const win = doc.defaultView;

global.document = doc;
global.window = win;

Object.keys(window).forEach((key) => {
  if (!(key in global)) {
    global[key] = window[key];
  }
});

chai.use(chaiImmutable);

// Prevent to process scss file.
hook({
  extensions: [".scss"],
  preprocessCss: function (css, filepath) {
    var result =  sass.renderSync({
      data: css,
      includePaths: [ path.resolve(filepath, "..") ]
    });

    return result.css;
  }
});
