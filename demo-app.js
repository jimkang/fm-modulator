var modulate = require('./index');
var handleError = require('handle-error-web');
var oknok = require('oknok');
var ContextKeeper = require('audio-context-singleton');

var { getCurrentContext } = ContextKeeper();

document.getElementById('start-button').addEventListener('click', start);
var indexField = document.getElementById('index-field');
var modFreqField = document.getElementById('mod-freq-field');
var carrierField = document.getElementById('carrier-field');

function start() {
  console.log('started');

  getCurrentContext(oknok({ ok: useContext, nok: handleError }));

  function useContext(ctx) {
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
  }
}
