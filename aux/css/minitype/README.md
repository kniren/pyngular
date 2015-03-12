Minitype
========

A minimalistic type framework to help you keep the vertical rhythm on
your website using modular scales.

![Minitype preview](http://s27.postimg.org/4a4ayh6eb/preview.png)

To use it just set your desired parameters on the `_config.scss` file
and include `_minitype.scss` on your main sass file

After that you are free to use the built-in variables for the font
size and line height. These are named after LaTeX size conventions.

| Font Size  | Line Heights |
| ---------- | ------------ |
| $f-tiny    | $lh-tiny     |
| $f-small   | $lh-small    |
| $f-large   | $lh-large    |
| $f-Large   | $lh-Large    |
| $f-huge    | $lh-huge     |
| $f-Huge    | $lh-Huge     |
| $f-HUGE    | $lh-HUGE     |

## Mixins

You can also use the included mixins to insert the adjusted headings
and several media queries for responsive design.

    @import 'minitype/minitype'

    // Include the formatted headings adjusted for the chosen scale
    @include includeHeadings();

    // Include the base elements for typographic design
    @include includeBase();

    // Include media queries to adjust the font size
    @include includeMediaQueries();

    // All the above 
    @include minitype();

## Margins and borders

In order to keep the vertical rhythm on the document, we should set
the margins to multiples of the base line height `$lh`. By default,
minitype set `margin-top:0` and `margin-bottom:$lh`. This make it so
the headings will maintain an equal separation. If you wish to set the
headings closer to the element below but you still want to keep the
vertical rhythm you can set the padding so that it compensates the
difference:

    h2 {
      padding-top:   $lh * 0.75;
      margin-bottom: $lh * 0.25;
    }

## License

The MIT License (MIT)

Copyright (c) 2015 Alejandro Sánchez Brotons

Permission is hereby granted, free of charge, to any person obtaining
a copy
of this software and associated documentation files (the "Software"),
to deal
in the Software without restriction, including without limitation the
rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or
sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be
included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT
SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
IN
THE SOFTWARE.
