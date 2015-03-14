var React = require("react");

var wrapFactory = exports.wrapFactory = function(factory) {
    return function(cls) {
        var args = [typeof cls === "string" ? { className: cls } : cls],
            c = arguments.length;
        for (var n = 1; n < c; n++) {
            args.push(arguments[n]);
        }
        return factory.apply(this, args);
    }
};

var tags = ["a", "abbr", "address", "area", "article", "aside", "audio", "b",
    "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button",
    "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist",
    "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed",
    "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3",
    "h4", "h5", "h6", "head", "header", "hr", "html", "i", "iframe", "img",
    "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main",
    "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript",
    "object", "ol", "optgroup", "option", "output", "p", "param", "picture",
    "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script",
    "section", "select", "small", "source", "span", "strong", "style", "sub",
    "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th",
    "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr"];

tags.forEach(function(tag) {
    exports[tag] = wrapFactory(React.DOM[tag]);
});
