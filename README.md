CSS Grid System [![Build Status](https://travis-ci.org/nsommer/sass-grids.svg)](https://travis-ci.org/nsommer/sass-grids)
================
A simple, responsive and customizable grid system for CSS, built with Sass.

## Table of Contents
- [Capabilities](#capabilities)
- [Installation](#installation)
    - [npm](#npm)
    - [bower](#bower)
    - [git](#git)
- [Usage](#usage)
- [Customize](#customize)
    - [Number of cell sizing classes](#number-of-cell-sizing-classes)
    - [Gutter](#gutter)
    - [Responsive sizing classes](#responsive-sizing-classes)
- [Float based](#float-based)
- [Yet another grid system?](#yet-another-grid-system)
- [Changelog](#changelog)
- [License](#license)

## Capabilities
- Float based grid system with configurable size classes.
- Natural language class names rather than decimal numbers.
- Utility classes for cell alignment and offsets.
- Configurable optional responsive sizing classes.

## Installation
The easiest way to use sass-grids is to use a package manager like *npm* or *bower*. However, cloning the repository and manually compiling is also possible.

### npm

```shell
npm install sass-grids
```

### bower

```shell
bower install sass-grids
```

### git
You need to install *git*, *node.js*, *npm* and the *sass* gem.

```
git clone https://github.com/nsommer/sass-grids.git
cd sass-grids
npm install
grunt dist
```

## Usage
For detailed documentation, visit the [demo page](https://nsommer.github.io/sass-grids). Here's an example:

```html
<div class="grid">
  <div class="cell cell-five-tenths">I'm a cell taking half the width of my parent.        </div>
  <div class="cell cell-four-tenths">I'm a cell taking a quarter of the width of my parent.</div>
  <div class="cell cell-one-tenth">  I'm a cell taking a quarter of the width of my parent.</div>
</div>
```

To be able to use the grid system with standard values, copy the `dist/sass-grids.css` into your project folder and include it into the head your HTML like that:

```html
<link rel="stylesheet" href="sass-grids.css">
```

Alternatively, you can overwrite the standard settings and compile your own custom grid system.

## Customize
All configuration variables are defined in `src/_variables.scss`. Due to the usage of the `!default` keyword on all variables, it is very easy to customize those values. Just create a Sass file that resets the variables you want to and import `sass-grids` after that (of course outsourcing the variable resets into a scss file of its own would be good practice). E.g.:

```sass
$cells-per-row: 5;
$gutter: 25px;
$responsive-size-classes: false;

@import "sass-grids";
```

### Number of cell sizing classes
The number of cells per row for which css classes are generated ist set by the `$cells-per-row` variable. To create human readable class names, two maps - `$number-names` and `$share-names` - are used. By default, they include entries for grid systems with up to 20 cells per row. If you want to generate a grid system with more than 20 cells per row possible, you have to overwrite the maps with maps that contain enough entries for your grid system.

Default values:

```sass
$cells-per-row: 10;

$number-names: (
  1:  "one",
  2:  "two",
  3:  "three",
  4:  "four",
  5:  "five",
  6:  "six",
  7:  "seven",
  8:  "eight",
  9:  "nine",
  10: "ten",
  11: "eleven",
  12: "twelve",
  13: "thirteen",
  14: "fourteen",
  15: "fifteen",
  16: "sixteen",
  17: "seventeen",
  18: "eighteen",
  19: "nineteen",
  20: "twenty"
) !default;

// Lookup table to get shares as names by numeric value.

$share-names: (
  2:  "half",
  3:  "third",
  4:  "fourth",
  5:  "fifth",
  6:  "sixth",
  7:  "seventh",
  8:  "eighth",
  9:  "ninth",
  10: "tenth",
  11: "eleventh",
  12: "twelfth",
  13: "thirteenth",
  14: "fourteenth",
  15: "fifteenth",
  16: "sixteenth",
  17: "seventeenth",
  18: "eighteenth",
  19: "nineteenth",
  20: "twentieth"
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

## Float based
Besides floating based grid systems, there do also exist solutions that use *flexbox* or *inline-block* and *box-sizing*. I decided to go for a solution using floats because I already knew how that works. *Flexbox* would probably be the best solution technically, but aside from very bad support in IE, this is something I want to explore another time.

## Yet another grid system?
I needed a grid system for a website I was building so I took the opportunity to improve my Sass skills by writing it from scratch by myself. :-)

Check out the [blog post](https://nilssommer.de/articles/2-building-a-grid-system-with-sass) I wrote about it.

## Changelog
- **0.1.2** Eases customization
- **0.1.1** Bug fixes
- **0.1.0** Initial release

## License
MIT license rocks.
