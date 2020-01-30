# Analyzing Text in JavaScript

## Contents <!-- omit in toc -->


- [About This Project](#about-this-project)
- [Getting Started](#getting-started)
  - [Files In This Repository](#files-in-this-repository)
- [Why We Are Doing This](#why-we-are-doing-this)
- [Requesting Feedback](#requesting-feedback)
- [Iterations](#iterations)
  - [[v0.1] Basic Count Statistics](#v01-basic-count-statistics)
  - [[v0.2] String to Characters](#v02-string-to-characters)
  - [[v0.3] Basic String Sanitizing](#v03-basic-string-sanitizing)
    - [Some Notes on String Sanitizing](#some-notes-on-string-sanitizing)
  - [[v0.4] Reading From a Hard-Coded File](#v04-reading-from-a-hard-coded-file)
  - [[v1.0] Reading From a User-Supplied File](#v10-reading-from-a-user-supplied-file)
  - [Command Line Arguments](#command-line-arguments)
- [[v1.1] Basic Frequency Statistics](#v11-basic-frequency-statistics)
  - [Stretch Approach](#stretch-approach)
- [[v1.2] Pretty Histograms](#v12-pretty-histograms)
- [[v2.0] More Features](#v20-more-features)

## About This Project

We're going to write a set of simple command line tools to display basic
statistics about a text file or set of text files.  Some basic statistics
include...

1. Character count, word count, and sentence count
1. Letter frequency
1. Word frequency, e.g., most common and least common words

We'll also work towards adding the ability to...

1. Download data from an arbitrary URL
1. Extract the text from a web page for analysis
1. Display the results in different formats, e.g., charts, histograms, etc.
1. Export the results to a spreadsheet

Here's a screenshot of a program that downloads the
[*entire* text of Moby Dick][moby-dick] from [Project Gutenberg][gutenberg] and
prints out a [histogram][wiki-histogram] of the letter frequencies.

![Letter frequencies in Moby Dick][img-moby-dick-screenshot]

It turns out that the letter "t" makes up 9.25% of all the letters in Moby Dick.

## Getting Started

To get started, you'll need to...

1. Fork this repository to your own GitHub account
1. Open a Terminal and clone this repository to your local computer
1. Navigate to the repository on your local computer
1. Open the repository in [Sublime Text 3][sublime-text-3], [Atom][atom], [VS Code](vs-code), or
    your editor of choice.
1. Run `npm install` to install the required packages.
1. Read the [Why Are We Doing This?](#why-are-we-doing-this) section
1. Start working on the [Iterations](#iterations)

### Files In This Repository

- `textalyze.js` is the source code for this project
- `sample_data` is a directory containing sample text files to analyze, mostly
    from [Project Gutenberg][gutenberg].

The `textalyze.js` file that comes with this repository is filled with comments
designed to help you get started.  You should feel free to delete them in order
to make the program easier to read.

## Why We Are Doing This

Think about the questions you'd need to be able to answer in
order to make it work, though:

1. How do I open and read data contained in file on my computer?
1. Once I have the data (from a file or elsewhere), how do I go about calculating
   the relevant statistics?
1. Once I've calculated the relevant statistics, how do I display them in a
   user-friendly way?

These questions run the gamut from nitty-gritty Ruby to user experience, while
also starting us down the path of becoming comfortable with how the web works.

## Requesting Feedback

To request feedback on your code, use the standard [GitHub flow](https://guides.github.com/introduction/flow/) process.

1. Fork this repository to your own account.
1. For each iteration, create a feature branch
1. When you're ready for feedback, submit a pull request from your feature branch to
   your master branch.
1. Ping the instructors on GitHub or Slack to get a review.

## Iterations

This project is structured as a sequence of iterations, each of which builds on
previous iterations. Iterations serve three important roles:

1. Models for good engineering and product management, i.e., what do we build,
   in what order, and why?
1. Natural checkpoints to ask for a code review or other feedback
1. The ability to accommodate students with different interests, skill levels,
   and time constraints.

### [v0.1] Basic Count Statistics

Using hard-coded examples, write a function that takes an `Array` containing
arbitrary and possibly duplicated items as input and returns an `Object` containing
item/count pairs. We've written some

This iteration has tests written for you.  Run

```console
npm test
```

to see the failing tests.  Remember to run `npm install` first!

That is, if the input has 100 entries and 20 of them are the letter "a" then then
resulting `Object` should contain

```javascript
{ 'a': 20 }
```

"Sensible" is up to you to define, but here's a suggested format, pretending we
hard-coded the input as `["a", "a", "a", "b", "b", "c"]`.

```shell-session
user@host project-js-textalyze $ node textalyze.js
The counts for ["a", "a", "a", "b", "b", "c"] are...
a   3
b   2
c   1
user@host project-js-textalyze $
```

### [v0.2] String to Characters

Using hard-coded examples, write a function that takes an arbitrary `String` as
input and returns an `Array` of all the characters in the string, including
spaces and punctuation.

Feed this into the array-counting function from the previous iteration to get an
`Object` containing letter/count pairs. Print out those pairs in a sensible way.

### [v0.3] Basic String Sanitizing

Create a file `lib/sanitize.js` and define a function called `sanitize` inside.
As in `lib/itemCounts.js`, the last line should be

```javascript
module.exports = sanitize
```

The `sanitize` function should take an arbitrary `String` — perhaps containing
spaces, punctuation, line breaks, etc. — and return a "sanitized" string that
replaces all upper-case letters with their lower-case equivalent. This will
ensure that the letters `'A'` and `'a'` are not treated as two distinct letters
when we analyze our text.  We'll handle punctuation and other bits in a later
iteration.

It should work like this

```javascript
sanitize('This is a sentence.')        // => 'this is a sentence.'
sanitize('WHY AM I YELLING?')          // => 'why am i yelling?'
sanitize('HEY: ThIs Is hArD tO rEaD!') // => 'hey: this is hard to read!'
```

Lucky for us, JavaScript comes with a built-in function to help us:
[String.prototype.toLowerCase][docs-javascript-string-tolowercase].

Integrate this function into current program so that the `Map` of results
contains, e.g.,

```javascript
{ 'a': 25 }
```

instead of

```javascript
{ 'a': 19, 'A': 6 }
```

#### Some Notes on String Sanitizing

Oftentimes the data we want isn't in a format that makes it easy to analyze. The
process of taking poorly-formatted data and transforming it into something we
can make use of is called <dfn>sanitizing</dfn> our data.

What counts as "sanitizing" varies depending on the underlying data and our
needs. For example, if we wanted to look at all the text in an HTML document, we
wouldn't want to be counting all the HTML tags.  Conversely, if we wanted a
report on the most commonly-used tags in an HTML document, we'd want to *keep*
the tags but remove the text.

In our case, we've designed our program such that it treats upper-case letters
and lower-case letters as distinct letters, i.e., our results `Map` might
contain

```javascript
{ 'a': 20, 'A': 5 }
```

but we'd probably rather it just contain

```javascript
{ 'a': 25 }
```

Likewise, we probably don't care about punctuation (periods, commas, hyphens,
colons, etc.), although this is harder to deal with than differences between
upper-case and lower-case letters.

### [v0.4] Reading From a Hard-Coded File

The base repository contains a directory called `sample_data` that contains a
handful of text files.  Hard-code the name of one of these files into your
program and read the contents of that file into a string.  Pass that string into
your current program, so that it now prints out the letter-count statistics for
that specific file instead of the hard-coded strings you had in the previous
iteration.

To read the contents of a file into a string, see
[fs.readFile][docs-node-fs-readfile] and
[fs.readFileSync][docs-node-fs-readfilesync].

### [v1.0] Reading From a User-Supplied File

We don't want to edit our JavaScript code every time we need to change the file
from which we're reading data.  Let's change it so that the user running the
program can pass in the name of the file from which to read.  We'll do this
using <dfn>command line arguments</dfn>.

This iteration marks v1.0 of our program.  As it stands, our program — although
limited — is self-contained enough that you could give it to another person and
they could use it as you intended without having to know how to edit JavaScript
code.

<img src="https://abs.twimg.com/emoji/v1/72x72/1f389.png" height="15px" width="15px">  Congrats! <img src="https://abs.twimg.com/emoji/v1/72x72/1f389.png" height="15px" width="15px">

### Command Line Arguments

Consider the following command run from the Terminal:

![Example of command line arguments][img-cli-arguments-screenshot]

```shell-session
node some-program.js first_argument second_argument banana
```

The <dfn>command line arguments</dfn> are `first_argument`, `second_argument`,
and `banana`, with a space denoting the separation between each argument.
`first_argument` is the *first* command line argument and `banana` is the
*third* command line argument.

## [v1.1] Basic Frequency Statistics

Using hard-coded examples, write a function that takes an `Array` containing
arbitrary and possibly duplicated entries as input and returns a `Map`
containing item/frequency pairs. Print out those pairs in a sensible way.

That is, if the input has 100 entries and 20 of the are letter "a" then then
resultant `Map` should have

```javascript
{ 'a': 0.20 }
```

### Stretch Approach

You've already written a function that takes an `Array` and returns a `Map`
containing entry/count pairs and you'll need these counts (one way or another)
in order to calculate the overall frequency.  If you want to stretch yourself,
try writing your "frequency statistics" function in a way that makes use of your
"counting statistics" function, so that you don't have to duplicate as much code
or work in your program.

This is a "stretch approach," which means it's absolutely *not* necessary for
you to write your program this way.  Like we've been saying, it's much better to
write *something* and get feedback on it than get stuck while trying to puzzle
out a "better", "faster", "more elegant", etc. approach.

## [v1.2] Pretty Histograms

Print out a histogram of letter frequencies, a la the original screenshot.

**Hint:** You can use the frequency for each item as a way to scale the length
of the histogram.

## [v2.0] More Features

Here are some additional features you might add:

- Install and use the [request module][github-request-module] to add support for
  passing in URLs as well as file names. For example, rather than having to
  download *Moby Dick* first, you could run

  ```console
  node textalyze.js http://www.gutenberg.org/cache/epub/2701/pg2701.txt
  ```

- Add support for displaying out the 5 (or `N`) most common words instead of
  just letter frequencies.
- Add support for exporting the data in a format you can load into Excel, like a
  [CSV file][wiki-csv]. You can install and use the [csv-writer
  module][github-csv-writer-module] to do this.
- Find texts from multiple languages and compare the letter frequency between
  languages. A language's letter frequency acts as a kind of fingerprint, and
  you'd surprised at how little text it takes to identify a language once you
  know the letter frequencies.
- Use a charting library like [AnyChart][github-anychart-module] to export a
  graphical histogram.

To install a module, run the following command (replacing `nameOfModule` with
the name of the desired module):

```console
npm install --save nameOfModule
```

This will update `package.json` and add the module as a dependency. Read each
module's documentation to see how to `require` and use it.

[sublime-text-3]: http://www.sublimetext.com/3
[vs-code]: https://code.visualstudio.com/
[atom]: https://atom.io/
[gutenberg]: http://www.gutenberg.org/
[moby-dick]: http://www.gutenberg.org/cache/epub/2701/pg2701.txt
[wiki-histogram]: http://en.wikipedia.org/wiki/Histogram
[img-moby-dick-screenshot]: https://dad6pq311uj47.cloudfront.net/items/3K3y3H0A422Z2M0B253P/Screen%20Shot%202019-03-25%20at%201.10.24%20PM.png
[docs-javascript-string-tolowercase]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase
[img-cli-arguments-screenshot]: https://dad6pq311uj47.cloudfront.net/items/3j153T1p1X1W282h3D3y/Screen%20Shot%202019-03-25%20at%2012.01.58%20PM.png
[docs-mdn-map]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
[docs-node-fs-readfile]: https://nodejs.org/api/fs.html#fs_fs_readfile_path_options_callback
[docs-node-fs-readfilesync]: https://nodejs.org/api/fs.html#fs_fs_readfilesync_path_options
[github-request-module]: https://github.com/request/request
[wiki-csv]: https://en.wikipedia.org/wiki/Comma-separated_values
[github-csv-writer-module]: https://github.com/ryu1kn/csv-writer#readme
[github-anychart-module]: https://www.npmjs.com/package/anychart-nodejs
