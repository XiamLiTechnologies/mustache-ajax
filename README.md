# mustache-ajax

[![Release](https://img.shields.io/badge/release-1.1.0-brightgreen.svg)]()
[![License](https://img.shields.io/github/license/XiamLiTechnologies/mustache-ajax.svg)]()
[![Maintenance](https://img.shields.io/maintenance/yes/2019.svg)]()

Plugin for Mustache that automatically loads required templates via ajax.

## Installation

Just add one of the following scripts to your website (and also [Mustache](https://github.com/janl/mustache.js) obviously):

#### Not minified
```html
<script src="https://cdn.xiamli.com/mustache-ajax-1.1.0.js" integrity="sha384-zJbfM01a/E65lSRze+E52Kz3xZS3aJxZL16VcM2t+e+UHNlN4IqL5Zc+TqubqpE/" crossorigin="anonymous"></script>
```

#### Minified
```html
<script src="https://cdn.xiamli.com/mustache-ajax-1.1.0.min.js" integrity="sha384-mFMlxhMZno3UApG/mV5UzloZ4AruUjJpL7UWWrr+wbSYd1pGbRjsFhPFjmfkxkno" crossorigin="anonymous"></script>
```

## Usage
After adding the script to your website you're ready to go.
Example use:

```html
<div id="someDiv">
  <p>Hello there!</p>
</h2>
```

templates/aTemplate.mustache:
```mustache
<p>Welcome back {{ name }}!</p>
```

javascript:
```javascript
MustacheAjax.html('someDiv', 'aTemplate', {name: 'Dorian'})
```

would result in:

```html
<div id="someDiv">
  <p>Welcome back Dorian!</p>
</h2>
```

## Latest Release

Version 1.1.0

# Author
  - Dorian H. - <dorian@xiamli.com> / <dorian@d0x7.com> - https://d0x7.com
	
# Copyright and License

Copyright © 2018 XiamLi Technologies

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
