modulate-fm
==================

Given a [modulation index](https://www.electronics-notes.com/articles/radio/modulation/fm-frequency-modulation-index-deviation-ratio.php), a modulation frequency, a carrier oscillator, and an AudioContext, hooks up a modulator to the carrier and provides a function to play the sounds.

(Honestly not sure if this is a good abstraction right now.)

[Here's a demo.](https://jimkang.com/modulate-fm/)

Installation
------------

    npm install modulate-fm

Usage
-----

    var modulate = require('modulate-fm');
    var carrierOsc = ctx.createOscillator();
    carrierOsc.type = 'sawtooth';
    carrierOsc.frequency.value = carrierField.value;

    var playModulation = modulate({
      ctx,
      index: indexField.value,
      modFreq: modFreqField.value,
      carrierOsc
    });

    playModulation({ delaySeconds: 0, durationSeconds: 1 });

License
-------

The MIT License (MIT)

Copyright (c) 2020 Jim Kang

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the 'Software'), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
