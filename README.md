# react-classname

Allows elements to be created with a plain string specifying className

## Purpose

To support the use of React without JSX - the unfortunate stain on an otherwise
interesting library. With this module, you can render structural elements that
just have a `className` very succinctly (more so than JSX).

## Installation

    npm install dre-react-classname --save

It's a commonJS module so you `require` it. If you're using fancy new ES6
transpilation, you can do this to import the specific elements you want to
render:

    import { div, span } from "dre-react-classname"

Then you can use them in your `render` function:

    return div("foo", span("bar"));

Here, `foo` and `span` are CSS class names. They get expanded automatically
so the above is equivalent to:

    return div({ className: "foo" }, span({ className: "bar" }));

If you're not using ES6 yet you can simulate the above import-and-declare
pattern:

    var X = require("dre-react-classname");
    var div = X.div, span = X.span;

## TypeScript

A declaration file is supplied in the `typings` folder.
