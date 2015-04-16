Pyngular
========

Do you love static page generators but you still miss some full-stack
features? With **pyngular** you will be able to build AngularJS single page
applications with the same methodology and accessibility of static
pages.

Once you initialize your application the pages on the `pages`
directory will be parsed for metadata and compiled to `HTML` using
`pandoc`. The metadata will be stored on a `json` file at the root of
the compiled site so that you can use it to build your AngularJS app.

After all that you should have something similar to this:

[Demo page](http://kniren.github.io/pyngular)

Getting started
---------------

Clone the repository and make it accesible in your `$PATH`.
Pyngular requires:

- [Python 3.4](https://www.python.org/downloads/)
- [Watchdog](https://pypi.python.org/pypi/watchdog)
- [Pandoc](http://johnmacfarlane.net/pandoc/)
- [SASS](http://sass-lang.com/)

Initialize the folder you wish to work in with the example templates:

    mkdir exampleapp
    pyngular init -d exampleapp -e
    cd exampleapp

Put your markdown pages on the `pages` directory and build the example
app with:

    pyngular build

After that you can use

    pyngular server

To serve the application on `http://localhost:8000` and

    pyngular watch

To rebuild it if any of the base files change.


Available commands
------------------

    // Scaffold on current directory
    pyngular init

    // Scaffold on DIR 
    pyngular init -d DIR

    // Scaffold on DIR and copy the example application 
    pyngular init -d DIR -e

    // Build the application on _site
    pyngular build

    // Clean _site and _cache directories
    pyngular clean

    // Clean and rebuild the site
    pyngular rebuild
    
    // Serve the _site on http://localhost:8000
    pyngular server
