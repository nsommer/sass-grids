CSS Grid System
================
This is a very simple CSS grid system, built with Sass. It allows to generate a custom grid system by changing a few variables.

## Capabilities
- Float based grid system with configurable size classes.
- Natural language class names rather than decimal numbers.
- Utility classes for cell alignment and offsets.
- Configurable optional responsive sizing classes.

## Usage
For detailed documentation, visit the [demo page](https://nsommer.github.io/sass-grids). Here's the short version:

```html
<div class="grid">
  <div class="cell cell-half">   I'm a cell taking half the width of my parent.        </div>
  <div class="cell cell-quarter">I'm a cell taking a quarter of the width of my parent.</div>
  <div class="cell cell-quarter">I'm a cell taking a quarter of the width of my parent.</div>
</div>
```

To be able to use the grid system with standard values, copy the `dist/sass-grids.css` into your project folder and include it into the head your HTML like that:

```html
<link rel="stylesheet" href="sass-grids.css">
```

## Customize
All configuration variables are defined in `src/_variables.scss`. Due to the usage of the `!default` keyword on all variables, it is very easy to customize those values. Just create a Sass file that resets the variables you want to and import `sass-grids` after that (of course outsourcing the variable resets into a scss file of its own would be good practice). E.g.:

```sass
$cells-per-row: 5;
$gutter: 25px;
$responsive-size-classes: false;

@import "sass-grids";
```

### Customizing the number of cell sizing classes
The number of cells per row for which css classes are generated ist set by the `$cells-per-row` variable. To create human readable class names, a map (`$dictionary`) is used that contains numeric values to string mappings.

Default values:

```sass
$cells-per-row: 10 !default;
$dictionary: (
  1:  "full",
  2:  "half",
  3:  "third",
  4:  "quarter",
  5:  "fifth",
  6:  "sixth",
  7:  "seventh",
  8:  "eigth",
  9:  "ninth",
  10: "tenth",
  11: "eleventh",
  12: "twelfth",
  13: "thirteenth",
  14: "fourteenth",
  15: "fifteenth"
) !default;
```

### Gutter
The gutter between two cells is defined by the `$gutter` variable.

Default:

```sass
$gutter: 1em !default;
```

### Responsive sizing classes
Sizing classes for specific viewport widths to enable responsive design with a mobile first approach can be toggled at build time by the variable `$responsive-size-classes`. The width breakpoints are defined in the map `$width-breakpoints` which contains mapping for width sizes and strings to enable human readable viewport naming in classes.

Defaults:

```sass
$responsive-size-classes: true !default;
$width-breakpoints: (
  "tablet":     720px,
  "desktop":    960px,
  "widescreen": 1200px
) !default;
```

## Compiling the Sass files
Install Sass on your system if you didn't already.

```bash
gem install sass
```

Assuming you have node and npm installed, switch to the project root and install grunt and its sass plugin.

```bash
npm install
```

After that, compiling the Sass files into CSS is as easy as typing:

```bash
grunt dist
```

## Float based
Besides floating based grid systems, there do also exist solutions that use *flexbox* or *inline-block* and *box-sizing*. I decided to go for a solution using floats because I already knew how that works. *Flexbox* would probably be the best solution technically, but aside from very bad support in IE, this is something I want to explore another time.

## Yet another grid system?
I needed a grid system for a website I was building so I took the opportunity to improve my Sass skills by writing it from scratch by myself. :-)

Check out the [blog post](https://nilssommer.de/articles/2-building-a-grid-system-with-sass) I wrote about it.

## License
MIT license rocks.
