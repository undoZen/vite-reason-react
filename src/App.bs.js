// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Curry from "bs-platform/lib/es6/curry.js";
import * as React from "react";
import * as AppCss from "./App.css";
import LogoSvg from "./logo.svg";
import * as AppModuleCss from "./app.module.css";

var logo = LogoSvg;

var textCenter = AppModuleCss.textcenter;

function App(Props) {
  var match = React.useState(function () {
        return 0;
      });
  var setCount = match[1];
  return React.createElement("div", {
              className: textCenter
            }, React.createElement("header", {
                  className: "App-header"
                }, React.createElement("img", {
                      className: "App-logo",
                      alt: "logo",
                      src: logo
                    }), React.createElement("p", undefined, "Hello Vite + React ", React.version), React.createElement("p", undefined, React.createElement("button", {
                          onClick: (function (ev) {
                              return Curry._1(setCount, (function (count) {
                                            return count + 1 | 0;
                                          }));
                            })
                        }, "the count is: ", String(match[0]))), React.createElement("p", undefined, "Edit ", React.createElement("code", undefined, "App.jsx"), " and save to test HMR updates."), React.createElement("p", undefined, "Learn ", React.createElement("a", {
                          className: "App-link",
                          href: "https://reactjs.org",
                          rel: "noopener noreferrer",
                          target: "_blank"
                        }, "React"), " and ", React.createElement("a", {
                          className: "App-link",
                          href: "https://rescript-lang.org/",
                          rel: "noopener noreferrer",
                          target: "_blank"
                        }, "ReScript"), " and ", React.createElement("a", {
                          className: "App-link",
                          href: "https://reasonml.github.io/reason-react/",
                          rel: "noopener noreferrer",
                          target: "_blank"
                        }, "ReasonReact"))));
}

var css;

var make = App;

export {
  logo ,
  css ,
  textCenter ,
  make ,
  
}
/* logo Not a pure module */
