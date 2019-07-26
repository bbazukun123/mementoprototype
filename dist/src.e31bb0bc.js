// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"../node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"scss/style.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"index.js":[function(require,module,exports) {
"use strict";

require("./scss/style.scss");

var photobooksContent = {
  banner: {
    title: "Photobooks",
    message: function message(language) {
      switch (language) {
        case "en":
          return "Bring impressive stories together into a photobook";
          break;

        case "th":
          return "ร้อยเรียงเรื่องราวประทับใจใส่ลงในสมุดภาพ";
          break;

        default:
          break;
      }
    },
    image: "https://thephotobookmemento.getprintbox.com/img/cms/assets/images/photobookLanding/banner.png",
    button: {
      type: "default",
      onclick: function onclick(language) {
        return "https://thephotobookmemento.getprintbox.com/".concat(language, "/photobooks/product_list");
      }
    }
  },
  sections: [{
    theme: "default",
    title: "Select Your Theme",
    message: function message(language) {
      switch (language) {
        case "en":
          return "Choose your preferred theme and personalize it further to make it truly yours.";
          break;

        case "th":
          return "เลือกธีมเพื่อปรับแต่งสมุดภาพของคุณไม่ให้เหมือนใคร ร้อยเรียงเรื่องราวประทับใจในแบบของคุณเอง";
          break;

        default:
          break;
      }
    },
    content: {
      type: "carousel",
      speed: 3500,
      images: ["https://thephotobookmemento.getprintbox.com/img/cms/assets/images/photobookLanding/theme1.png", "https://thephotobookmemento.getprintbox.com/img/cms/assets/images/photobookLanding/theme2.png", "https://thephotobookmemento.getprintbox.com/img/cms/assets/images/photobookLanding/theme3.png"]
    },
    button: {
      type: "theme",
      onclick: function onclick(language) {
        return "https://thephotobookmemento.getprintbox.com/".concat(language, "/photobooks/product_list");
      }
    }
  }, {
    theme: "dark",
    title: "Design Your Cover",
    message: function message(language) {
      switch (language) {
        case "en":
          return "Be it soft or hard cover, you can be assured that your photobook will be finely processed with care. Your memories will be well taken care of to perfection.";
          break;

        case "th":
          return "จะปกอ่อนหรือปกแข็ง ก็มั่นใจได้ว่าสมุดภาพของคุณจะผ่านกระบวนการเข้าเล่มอย่างประณีต ความทรงจำของคุณจะได้รับการดูแลอย่างดีและสมบูรณ์แบบที่สุด";
          break;

        default:
          break;
      }
    },
    content: {
      type: "cards",
      cards: [{
        image: "https://thephotobookmemento.getprintbox.com/img/cms/assets/images/photobookLanding/cover_soft.png",
        title: function title(language) {
          switch (language) {
            case "en":
              return "Soft Cover";
              break;

            case "th":
              return "ปกอ่อน";
              break;

            default:
              break;
          }
        }
      }, {
        image: "https://thephotobookmemento.getprintbox.com/img/cms/assets/images/photobookLanding/cover_hard.png",
        title: function title(language) {
          switch (language) {
            case "en":
              return "Hard Cover";
              break;

            case "th":
              return "ปกแข็ง";
              break;

            default:
              break;
          }
        }
      }]
    }
  }, {
    theme: "default",
    title: "Popular Sizes",
    message: function message(language) {
      switch (language) {
        case "en":
          return "The right size will help you store your valuable moments perfectly.";
          break;

        case "th":
          return "ขนาดที่ถูกใจช่วยให้การจัดเก็บเหตุการณ์ที่มีคุณค่าของคุณสมบูรณ์แบบ";
          break;

        default:
          break;
      }
    },
    content: {
      type: "cards",
      cards: [{
        image: "https://thephotobookmemento.getprintbox.com/img/cms/assets/images/photobookLanding/8x8.jpg",
        title: "8\"x 8\"",
        supplement: "(20.3cm x 20.3cm)",
        description: function description(language) {
          switch (language) {
            case "en":
              return "Standard-sized square photobook";
              break;

            case "th":
              return "สมุดภาพสี่เหลี่ยมขนาดมาตรฐาน";
              break;

            default:
              break;
          }
        }
      }, {
        image: "https://thephotobookmemento.getprintbox.com/img/cms/assets/images/photobookLanding/8x10-5.jpg",
        title: "8\"x 10.5\"",
        supplement: "(20.3cm x 26.7cm)",
        description: function description(language) {
          switch (language) {
            case "en":
              return "Standard-sized portrait photobook";
              break;

            case "th":
              return "สมุดภาพแนวตั้งขนาดมาตรฐาน";
              break;

            default:
              break;
          }
        }
      }, {
        image: "https://thephotobookmemento.getprintbox.com/img/cms/assets/images/photobookLanding/10-5x8.jpg",
        title: "10.5\"x 8\"",
        supplement: "(26.7cm x 20.3cm)",
        description: function description(language) {
          switch (language) {
            case "en":
              return "Standard-sized landscape photobook";
              break;

            case "th":
              return "สมุดภาพแนวนอนขนาดมาตรฐาน";
              break;

            default:
              break;
          }
        }
      }]
    }
  }, {
    theme: "default",
    title: "Customize Your Memory",
    message: function message(language) {
      switch (language) {
        case "en":
          return "5 simple steps to get your perfect photobook.";
          break;

        case "th":
          return "5 ขั้นตอนง่ายๆ ในการออกแบบ Photobook ของคุณ";
          break;

        default:
          break;
      }
    },
    content: {
      type: "steps",
      steps: ["theme", "size", "design", "payment", "delivery"]
    },
    button: {
      type: "default",
      onclick: function onclick(language) {
        return "https://thephotobookmemento.getprintbox.com/".concat(language, "/photobooks/product_list");
      }
    }
  }]
};
var photoframesContent = {
  banner: {
    title: "Photo Frames",
    message: function message(language) {
      switch (language) {
        case "en":
          return "Showcase your favourite moment on a photo frame";
          break;

        case "th":
          return "พิมพ์ภาพประทับใจลงผืนผ้าใบ";
          break;

        default:
          break;
      }
    },
    image: "https://thephotobookmemento.getprintbox.com/img/cms/assets/images/canvasLanding/banner.png",
    button: {
      type: "default",
      onclick: function onclick(language) {
        return "https://thephotobookmemento.getprintbox.com/".concat(language, "/canvas/size");
      }
    }
  },
  sections: [{
    theme: "default",
    title: "Popular Sizes",
    message: function message(language) {
      switch (language) {
        case "en":
          return "Select the perfect size that works for your space.";
          break;

        case "th":
          return "เลือกขนาดที่ต้องการ เพื่อให้เหมาะกับพื้นที่ในการจัดวางภาพพิเศษของคุณ";
          break;

        default:
          break;
      }
    },
    content: {
      type: "cards",
      cards: [{
        image: "https://thephotobookmemento.getprintbox.com/img/cms/assets/images/canvasLanding/16x16.jpg",
        title: "16\"x 16\"",
        supplement: "(40.6cm x 40.6cm)",
        description: function description(language) {
          switch (language) {
            case "en":
              return "Standard-sized Canvas<br><span>฿ 220 / Piece</span>";
              break;

            case "th":
              return "Canvas ขนาดมาตรฐาน<br><span>ราคาชิ้นละ 220 บาท</span>";
              break;

            default:
              break;
          }
        },
        onclick: function onclick(language) {
          return "https://thephotobookmemento.getprintbox.com/".concat(language, "/canvas/style?size=Square%2016%22x%2016%");
        }
      }, {
        image: "https://thephotobookmemento.getprintbox.com/img/cms/assets/images/canvasLanding/12x18.jpg",
        title: "12\"x 18\"",
        supplement: "(30.4cm x 45.7cm)",
        description: function description(language) {
          switch (language) {
            case "en":
              return "Standard-sized Canvas<br><span>฿ 220 / Piece</span>";
              break;

            case "th":
              return "Canvas ขนาดมาตรฐาน<br><span>ราคาชิ้นละ 220 บาท</span>";
              break;

            default:
              break;
          }
        },
        onclick: function onclick(language) {
          return "https://thephotobookmemento.getprintbox.com/".concat(language, "/canvas/style?size=Portrait%2012%22x%2018%22");
        }
      }, {
        image: "https://thephotobookmemento.getprintbox.com/img/cms/assets/images/canvasLanding/16x20.jpg",
        title: "16\"x 20\"",
        supplement: "(40.6cm x 50.8cm)",
        description: function description(language) {
          switch (language) {
            case "en":
              return "Standard-sized Canvas<br><span>฿ 220 / Piece</span>";
              break;

            case "th":
              return "Canvas ขนาดมาตรฐาน<br><span>ราคาชิ้นละ 220 บาท</span>";
              break;

            default:
              break;
          }
        },
        onclick: function onclick(language) {
          return "https://thephotobookmemento.getprintbox.com/".concat(language, "/canvas/style?size=Portrait%2016%22x%2020%22");
        }
      }]
    }
  }, {
    theme: "dark",
    title: "Design Your Style",
    message: function message(language) {
      switch (language) {
        case "en":
          return "Choose the right style and transform your photo into an art piece.";
          break;

        case "th":
          return "เลือกรูปแบบที่ถูกใจ แล้วเปลี่ยนภาพถ่ายของคุณให้กลายเป็นศิลปะบนผืนผ้าใบ";
          break;

        default:
          break;
      }
    },
    content: {
      type: "cards",
      cards: [{
        image: "https://thephotobookmemento.getprintbox.com/img/cms/assets/images/canvasLanding/overflow.png",
        title: function title(language) {
          switch (language) {
            case "en":
              return "Overflow";
              break;

            case "th":
              return "มีขอบ";
              break;

            default:
              break;
          }
        }
      }, {
        image: "https://thephotobookmemento.getprintbox.com/img/cms/assets/images/canvasLanding/borderless.png",
        title: function title(language) {
          switch (language) {
            case "en":
              return "Borderless";
              break;

            case "th":
              return "ไร้ขอบ";
              break;

            default:
              break;
          }
        }
      }]
    }
  }, {
    theme: "default",
    title: "Inspiration for Everyroom",
    message: function message(language) {
      switch (language) {
        case "en":
          return "Let meaningful photo frames fill your space with inspirations.";
          break;

        case "th":
          return "ให้ภาพที่มีความหมาย เติมเต็มแรงบันดาลใจให้พื้นที่พิเศษของคุณ";
          break;

        default:
          break;
      }
    },
    content: {
      type: "banner",
      image: "https://thephotobookmemento.getprintbox.com/img/cms/assets/images/canvasLanding/heroBanner.jpg"
    }
  }, {
    theme: "default",
    title: "Customize Your Memory",
    message: function message(language) {
      switch (language) {
        case "en":
          return "4 simple steps to get your perfect photo frame.";
          break;

        case "th":
          return "4 ขั้นตอนง่ายๆ ในการออกแบบ Photo Frame ของคุณ";
          break;

        default:
          break;
      }
    },
    content: {
      type: "steps",
      steps: ["size", "design", "payment", "delivery"]
    },
    button: {
      type: "default",
      onclick: function onclick(language) {
        return "https://thephotobookmemento.getprintbox.com/".concat(language, "/canvas/size");
      }
    }
  }]
};
var stickersContent = {
  banner: {
    title: "Stickers",
    message: function message(language) {
      switch (language) {
        case "en":
          return "Transform your photos into fun sticker pieces";
          break;

        case "th":
          return "เปลี่ยนภาพของคุณให้เป็นสติกเกอร์แสนสนุกแปะได้ทุกที่";
          break;

        default:
          break;
      }
    },
    image: "https://thephotobookmemento.getprintbox.com/img/cms/assets/images/stickerLanding/banner.png",
    button: {
      type: "default",
      onclick: function onclick(language) {
        return "https://thephotobookmemento.getprintbox.com/".concat(language, "/stickers/product_list");
      }
    }
  },
  sections: [{
    theme: "default",
    title: "Various Styles",
    message: function message(language) {
      switch (language) {
        case "en":
          return "Choose your preferred sticker style and size.";
          break;

        case "th":
          return "เลือกรูปแบบและขนาดของสติกเกอร์ในสไตล์ของคุณ";
          break;

        default:
          break;
      }
    },
    content: {
      type: "cards",
      cards: [{
        image: "https://thephotobookmemento.getprintbox.com/img/cms/assets/images/stickerLanding/circular.jpg",
        title: "Circular",
        supplement: "(4cm)",
        description: function description(language) {
          switch (language) {
            case "en":
              return "Pocket-sized Stickers<br><span>฿ 100 / Set</span>";
              break;

            case "th":
              return "สติกเกอร์ขนาดพอเหมาะ<br><span>ราคาแผ่นละ 100 บาท</span>";
              break;

            default:
              break;
          }
        },
        onclick: function onclick(language) {
          return "https://thephotobookmemento.getprintbox.com/".concat(language, "/stickers/product_card/circular-set");
        }
      }, {
        image: "https://thephotobookmemento.getprintbox.com/img/cms/assets/images/stickerLanding/square.jpg",
        title: "Square",
        supplement: "(2.4cm x 2.4cm)",
        description: function description(language) {
          switch (language) {
            case "en":
              return "Pocket-sized Stickers<br><span>฿ 100 / Set</span>";
              break;

            case "th":
              return "สติกเกอร์ขนาดพอเหมาะ<br><span>ราคาแผ่นละ 100 บาท</span>";
              break;

            default:
              break;
          }
        },
        onclick: function onclick(language) {
          return "https://thephotobookmemento.getprintbox.com/".concat(language, "/stickers/product_card/square-set");
        }
      }, {
        image: "https://thephotobookmemento.getprintbox.com/img/cms/assets/images/stickerLanding/long.jpg",
        title: "Long",
        supplement: "(5.5cm x 16cm)",
        description: function description(language) {
          switch (language) {
            case "en":
              return "Pocket-sized Stickers<br><span>฿ 100 / Set</span>";
              break;

            case "th":
              return "สติกเกอร์ขนาดพอเหมาะ<br><span>ราคาแผ่นละ 100 บาท</span>";
              break;

            default:
              break;
          }
        },
        onclick: function onclick(language) {
          return "https://thephotobookmemento.getprintbox.com/".concat(language, "/stickers/product_card/long-set");
        }
      }, {
        image: "https://thephotobookmemento.getprintbox.com/img/cms/assets/images/stickerLanding/rectangle.jpg",
        title: "Rectangle",
        supplement: "(4cm x 2.6cm)",
        description: function description(language) {
          switch (language) {
            case "en":
              return "Pocket-sized Stickers<br><span>฿ 100 / Set</span>";
              break;

            case "th":
              return "สติกเกอร์ขนาดพอเหมาะ<br><span>ราคาแผ่นละ 100 บาท</span>";
              break;

            default:
              break;
          }
        },
        onclick: function onclick(language) {
          return "https://thephotobookmemento.getprintbox.com/".concat(language, "/stickers/product_card/rectangle-set");
        }
      }]
    }
  }, {
    theme: "dark",
    title: "Make Any Surface Playful",
    message: function message(language) {
      switch (language) {
        case "en":
          return "Decorate ordinary surfaces and make them come alive.";
          break;

        case "th":
          return "ตกแต่งพื้นผิวธรรมดาๆของคุณให้ดูมีชีวิตชีวาเพิ่มขึ้น";
          break;

        default:
          break;
      }
    },
    content: {
      type: "banner",
      image: "https://thephotobookmemento.getprintbox.com/img/cms/assets/images/stickerLanding/heroBanner.png"
    }
  }, {
    theme: "default",
    title: "Customize Your Memory",
    message: function message(language) {
      switch (language) {
        case "en":
          return "4 simple steps to get your perfect stickers.";
          break;

        case "th":
          return "4 ขั้นตอนง่ายๆ ในการออกแบบสติกเกอร์ของคุณ";
          break;

        default:
          break;
      }
    },
    content: {
      type: "steps",
      steps: ["size", "design", "payment", "delivery"]
    },
    button: {
      type: "default",
      onclick: function onclick(language) {
        return "https://thephotobookmemento.getprintbox.com/".concat(language, "/stickers/product_list");
      }
    }
  }]
};
var cardsContent = {
  banner: {
    title: "Cards",
    message: function message(language) {
      switch (language) {
        case "en":
          return "Keep your dear memories close by with a variety of cards";
          break;

        case "th":
          return "เก็บความรู้สึกดีๆไว้ใกล้ตัวด้วยการ์ดขนาดกะทัดรัด";
          break;

        default:
          break;
      }
    },
    image: "https://thephotobookmemento.getprintbox.com/img/cms/assets/images/cardLanding/banner.png",
    button: {
      type: "default",
      onclick: function onclick(language) {
        return "https://thephotobookmemento.getprintbox.com/".concat(language, "/cards/product_list");
      }
    }
  },
  sections: [{
    theme: "default",
    title: "Various Styles",
    message: function message(language) {
      switch (language) {
        case "en":
          return "Choose the style and size of your cards that you can take along with or give to special ones.";
          break;

        case "th":
          return "เลือกรูปแบบและขนาดของการ์ดที่สามารถพกพาไปได้ทุกที่ให้ตัวคุณหรือคนพิเศษ";
          break;

        default:
          break;
      }
    },
    content: {
      type: "cards",
      cards: [{
        image: "https://thephotobookmemento.getprintbox.com/img/cms/assets/images/cardLanding/polaroid.jpg",
        title: "Polaroid",
        supplement: "(8.9cm x 10.6cm)",
        description: function description(language) {
          switch (language) {
            case "en":
              return "Polaroid-style Photos<br><span>฿ 120 / Pack</span>";
              break;

            case "th":
              return "รูปโพลาลอยด์<br><span>ราคาใบละ 120 บาท</span>";
              break;

            default:
              break;
          }
        },
        onclick: function onclick(language) {
          return "https://thephotobookmemento.getprintbox.com/".concat(language, "/cards/product_card/polaroid-set");
        }
      }, {
        image: "https://thephotobookmemento.getprintbox.com/img/cms/assets/images/cardLanding/postcard.jpg",
        title: "Postcard",
        supplement: "(4\" x 6\")",
        description: function description(language) {
          switch (language) {
            case "en":
              return "Photo-based Postcards<br><span>฿ 120 / Pack</span>";
              break;

            case "th":
              return "โปสการ์ดรูปภาพ<br><span>ราคาใบละ 120 บาท</span>";
              break;

            default:
              break;
          }
        },
        onclick: function onclick(language) {
          return "https://thephotobookmemento.getprintbox.com/".concat(language, "/cards/product_card/postcard-pack");
        }
      }, {
        image: "https://thephotobookmemento.getprintbox.com/img/cms/assets/images/cardLanding/square.jpg",
        title: "Square Print",
        supplement: "(4\" x 4\")",
        description: function description(language) {
          switch (language) {
            case "en":
              return "Square Photo Prints<br><span>฿ 120 / Pack</span>";
              break;

            case "th":
              return "การ์ดรูปภาพจตุรัส<br><span>ราคาใบละ 120 บาท</span>";
              break;

            default:
              break;
          }
        },
        onclick: function onclick(language) {
          return "https://thephotobookmemento.getprintbox.com/".concat(language, "/cards/product_card/square-print-4x4");
        }
      }, {
        image: "https://thephotobookmemento.getprintbox.com/img/cms/assets/images/cardLanding/photocard.jpg",
        title: "Photocard",
        supplement: "(5.5cm x 8.5cm)",
        description: function description(language) {
          switch (language) {
            case "en":
              return "Rectangle Photocards<br><span>฿ 120 / Pack</span>";
              break;

            case "th":
              return "โฟโต้การ์ด<br><span>ราคาใบละ 120 บาท</span>";
              break;

            default:
              break;
          }
        },
        onclick: function onclick(language) {
          return "https://thephotobookmemento.getprintbox.com/".concat(language, "/cards/product_card/photo-card");
        }
      }]
    }
  }, {
    theme: "dark",
    title: "Pocket-sized Memories",
    message: function message(language) {
      switch (language) {
        case "en":
          return "Take your precious memories everywhere with you.";
          break;

        case "th":
          return "พกพาความทรงจำดีๆติดตัวไปกับคุณทุกที่";
          break;

        default:
          break;
      }
    },
    content: {
      type: "banner",
      image: "https://thephotobookmemento.getprintbox.com/img/cms/assets/images/cardLanding/heroBanner.png"
    }
  }, {
    theme: "default",
    title: "Customize Your Memory",
    message: function message(language) {
      switch (language) {
        case "en":
          return "4 simple steps to get your perfect cards.";
          break;

        case "th":
          return "4 ขั้นตอนง่ายๆ ในการออกแบบการ์ดของคุณ";
          break;

        default:
          break;
      }
    },
    content: {
      type: "steps",
      steps: ["size", "design", "payment", "delivery"]
    },
    button: {
      type: "default",
      onclick: function onclick(language) {
        return "https://thephotobookmemento.getprintbox.com/".concat(language, "/cards/product_list");
      }
    }
  }]
};
var calendarsContent = {
  banner: {
    title: "Calendars",
    message: function message(language) {
      switch (language) {
        case "en":
          return "Store your moments in your own day-month-year calendar";
          break;

        case "th":
          return "เก็บความทรงจำที่ดีไว้ในวัน-เดือน-ปีของคุณ";
          break;

        default:
          break;
      }
    },
    image: "https://thephotobookmemento.getprintbox.com/img/cms/assets/images/calendarLanding/banner.png",
    button: {
      type: "default",
      onclick: function onclick(language) {
        return "https://thephotobookmemento.getprintbox.com/".concat(language, "/calendars/product_list");
      }
    }
  },
  sections: [{
    theme: "default",
    title: "Select Your Theme",
    message: function message(language) {
      switch (language) {
        case "en":
          return "Select and customize a unique calendar that is truly yours. Put impressive stories together into your days.";
          break;

        case "th":
          return "เลือกธีมเพื่อปรับแต่งปฏิทินของคุณให้ไม่เหมือนใคร ร้อยเรื่องราวประทับใจใส่ลงในทุกวันของคุณ";
          break;

        default:
          break;
      }
    },
    content: {
      type: "carousel",
      speed: 3500,
      images: ["https://thephotobookmemento.getprintbox.com/img/cms/assets/images/calendarLanding/theme1.png", "https://thephotobookmemento.getprintbox.com/img/cms/assets/images/calendarLanding/theme2.png", "https://thephotobookmemento.getprintbox.com/img/cms/assets/images/calendarLanding/theme3.png"]
    },
    button: {
      type: "theme",
      onclick: function onclick(language) {
        return "https://thephotobookmemento.getprintbox.com/".concat(language, "/calendars/product_list");
      }
    }
  }, {
    theme: "dark",
    title: "Design Your Special Date",
    message: function message(language) {
      switch (language) {
        case "en":
          return "Bring photos into your calendar and mark important dates such as anniversaries, birthdays, and so on.";
          break;

        case "th":
          return "หยิบเอาภาพถ่ายมาใส่ในปฏิทิน พร้อมกำหนดวันสำคัญ เช่น วันครบรอบ หรือวันเกิดด้วยตัวคุณเอง";
          break;

        default:
          break;
      }
    },
    content: {
      type: "cards",
      cards: [{
        image: "https://thephotobookmemento.getprintbox.com/img/cms/assets/images/calendarLanding/design1.jpg"
      }, {
        image: "https://thephotobookmemento.getprintbox.com/img/cms/assets/images/calendarLanding/design2.jpg"
      }]
    }
  }, {
    theme: "default",
    title: "Select Your Layout",
    message: function message(language) {
      switch (language) {
        case "en":
          return "Pick between a vertical or a horizontal calendar to suit the customization of your memories.";
          break;

        case "th":
          return "ปฏิทินแนวตั้งหรือแนวนอน เพื่อให้เหมาะกับพื้นที่ในการจัดวางความทรงจำของคุณ";
          break;

        default:
          break;
      }
    },
    content: {
      type: "cards",
      cards: [{
        image: "https://thephotobookmemento.getprintbox.com/img/cms/assets/images/calendarLanding/portrait.jpg",
        title: "Portrait",
        description: function description(language) {
          switch (language) {
            case "en":
              return "6\" x 8\" Vertical Calendar consists of 14 sheets and 28 pages";
              break;

            case "th":
              return "ปฏิทินแนวตั้งขนาด 6\" x 8\" ประกอบด้วย 14 แผ่น 28 หน้า";
              break;

            default:
              break;
          }
        }
      }, {
        image: "https://thephotobookmemento.getprintbox.com/img/cms/assets/images/calendarLanding/landscape.jpg",
        title: "Landscape",
        description: function description(language) {
          switch (language) {
            case "en":
              return "8\" x 6\" Horizontal Calendar consists of 14 sheets and 28 pages";
              break;

            case "th":
              return "ปฏิทินแนวตั้งขนาด 8\" x 6\" ประกอบด้วย 14 แผ่น 28 หน้า";
              break;

            default:
              break;
          }
        }
      }]
    }
  }, {
    theme: "default",
    title: "Customize Your Memory",
    message: function message(language) {
      switch (language) {
        case "en":
          return "5 simple steps to get your perfect calendar";
          break;

        case "th":
          return "5 ขั้นตอนง่ายๆ ในการออกแบบปฏิทินของคุณ";
          break;

        default:
          break;
      }
    },
    content: {
      type: "steps",
      steps: ["theme", "layout", "design", "payment", "delivery"]
    },
    button: {
      type: "default",
      onclick: function onclick(language) {
        return "https://thephotobookmemento.getprintbox.com/".concat(language, "/calendars/product_list");
      }
    }
  }] //-----------------UTILITY FUNCTIONS--------------------

};

function generateButton(button, language) {
  var buttonText;

  switch (button.type) {
    case "default":
      switch (language) {
        case "en":
          buttonText = "Create Now";
          break;

        case "th":
          buttonText = "สร้างเลย";
          break;

        default:
          break;
      }

      break;

    case "theme":
      switch (language) {
        case "en":
          buttonText = "Explore Themes";
          break;

        case "th":
          buttonText = "ค้นหาธีมของคุณ";
          break;

        default:
          break;
      }

      break;

    default:
      break;
  }

  return "<button style=\"cursor: pointer;\" onclick=\"window.location='".concat(button.onclick(language), "'\">").concat(buttonText, "</button>");
}

function generateStep(number, step, language) {
  switch (step) {
    case "theme":
      return "<div class=\"step\">\n                        <object type=\"image/svg+xml\" data=\"https://thephotobookmemento.getprintbox.com/img/cms/assets/images/icons/steps/themeStep.svg\">Your browser does not support SVG</object>\n                        <h3><span>".concat(number, "</span><br>").concat(language === "en" ? "Select Theme" : "เลือกธีม", "</h3>\n                    </div>");
      break;

    case "size":
      return "<div class=\"step\">\n                        <object type=\"image/svg+xml\" data=\"https://thephotobookmemento.getprintbox.com/img/cms/assets/images/icons/steps/sizeStep.svg\">Your browser does not support SVG</object>\n                        <h3><span>".concat(number, "</span><br>").concat(language === "en" ? "Select Size" : "เลือกขนาด", "</h3>\n                    </div>");
      break;

    case "design":
      return "<div class=\"step\">\n                        <object type=\"image/svg+xml\" data=\"https://thephotobookmemento.getprintbox.com/img/cms/assets/images/icons/steps/designStep.svg\">Your browser does not support SVG</object>\n                        <h3><span>".concat(number, "</span><br>").concat(language === "en" ? "Customize" : "ออกแบบ", "</h3>\n                    </div>");
      break;

    case "payment":
      return "<div class=\"step\">\n                        <object type=\"image/svg+xml\" data=\"https://thephotobookmemento.getprintbox.com/img/cms/assets/images/icons/steps/paymentStep.svg\">Your browser does not support SVG</object>\n                        <h3><span>".concat(number, "</span><br>").concat(language === "en" ? "Pay" : "ชำระเงิน", "</h3>\n                    </div>");
      break;

    case "delivery":
      return "<div class=\"step\">\n                        <object type=\"image/svg+xml\" data=\"https://thephotobookmemento.getprintbox.com/img/cms/assets/images/icons/steps/deliveryStep.svg\">Your browser does not support SVG</object>\n                        <h3><span>".concat(number, "</span><br>").concat(language === "en" ? "Track Parcel" : "รอรับสินค้า", "</h3>\n                    </div>");
      break;

    case "layout":
      return "<div class=\"step\">\n                        <object type=\"image/svg+xml\" data=\"https://thephotobookmemento.getprintbox.com/img/cms/assets/images/icons/steps/layoutStep.svg\">Your browser does not support SVG</object>\n                        <h3><span>".concat(number, "</span><br>").concat(language === "en" ? "Select Layout" : "เลือก Layout", "</h3>\n                    </div>");
      break;

    default:
      break;
  }
}

function renderContent(content, language) {
  var sectionContent = "";
  var counter = 1;

  switch (content.type) {
    case "carousel":
      content.images.forEach(function (img) {
        sectionContent += "<img src=\"".concat(img, "\" class=\"pos").concat(counter, "\">");
        counter++;
      });
      break;

    case "cards":
      content.cards.forEach(function (card) {
        sectionContent += "<div class=\"card\"".concat(card.onclick ? "style=\"cursor: pointer;\" onclick=\"window.location='".concat(card.onclick(language), "'\"") : "", ">\n                        <img class=\"card-img\" src=\"").concat(card.image, "\">\n                        ").concat(card.title ? "<div class=\"card-text\">\n                        <h2>".concat(typeof card.title === "function" ? card.title(language) : card.title, "</h2>\n                        ").concat(card.supplement ? "<h4>".concat(card.supplement, "</h4>") : "", "\n                        ").concat(card.description ? "<h3>".concat(card.description(language), "</h3>") : "", "\n                        </div>") : "", "\n                    </div>");
      });
      break;

    case "banner":
      break;

    case "steps":
      content.steps.forEach(function (step) {
        sectionContent += generateStep(counter, step, language);
        counter++;
      });
      break;

    default:
      break;
  }

  return sectionContent;
} //-----------------INIT--------------------


var language = document.documentElement.lang === "en-us" ? "en" : "th";
var bannerElem = document.querySelector(".cta-hero");

var data = function (landingType) {
  switch (landingType) {
    case "photobooks":
      return photobooksContent;
      break;

    case "photoframes":
      return photoframesContent;
      break;

    case "stickers":
      return stickersContent;
      break;

    case "cards":
      return cardsContent;
      break;

    case "calendars":
      return calendarsContent;
      break;

    default:
      break;
  }
}(bannerElem.id); //Init Banner


bannerElem.style.backgroundImage = "url(".concat(data.banner.image, ")");
bannerElem.querySelector("h1").innerText = data.banner.title;
bannerElem.querySelector("h2").innerText = data.banner.message(language);
bannerElem.querySelector("div").innerHTML += generateButton(data.banner.button, language); //Generate Sections

var pageContent = "";
var carouselSpeed = null;
data.sections.forEach(function (section) {
  var theme = section.theme,
      title = section.title,
      message = section.message,
      content = section.content,
      button = section.button;
  pageContent += "<section".concat(theme === "dark" ? " class=\"dark\"" : "", ">\n            <div>\n                <h2>").concat(title, "</h2>\n                <h3>").concat(message(language), "</h3>\n                <div class=\"").concat(function (type) {
    switch (type) {
      case "carousel":
        carouselSpeed = content.speed;
        return content.type;
        break;

      case "cards":
        return "card-container";
        break;

      case "banner":
        return "banner-container";
        break;

      case "steps":
        return "step-container";
        break;

      default:
        break;
    }
  }(content.type), "\"").concat(content.type === "banner" ? "style=\"background-image: url(".concat(content.image, ");\"") : "", ">\n                    ").concat(renderContent(content, language), "\n                </div>\n                ").concat(button ? generateButton(button, language) : "", "\n            </div>\n        </section>");
});
document.getElementById("main-content").innerHTML = pageContent; //-----------------Listeners & Animators--------------------

function rotateCarousel(speed) {
  var image1 = document.querySelector(".pos1");
  var image2 = document.querySelector(".pos2");
  var image3 = document.querySelector(".pos3");
  image3.style.zIndex = "0";
  image1.style.zIndex = "1";
  setTimeout(function () {
    image2.style.zIndex = "0";
  }, 700);
  setTimeout(function () {
    image1.style.zIndex = "2";
  }, 500);
  image1.classList.replace("pos1", "pos2");
  image2.classList.replace("pos2", "pos3");
  image3.classList.replace("pos3", "pos1");
  setTimeout(function () {
    rotateCarousel(speed);
  }, speed);
}

if (carouselSpeed) {
  var image1 = document.querySelector(".pos1");
  var image2 = document.querySelector(".pos2");
  var image3 = document.querySelector(".pos3");
  image1.style.zIndex = "1";
  image2.style.zIndex = "2";
  image3.style.zIndex = "0";
  setTimeout(function () {
    rotateCarousel(carouselSpeed);
  }, carouselSpeed);
}
},{"./scss/style.scss":"scss/style.scss"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "60855" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else {
        window.location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/src.e31bb0bc.js.map