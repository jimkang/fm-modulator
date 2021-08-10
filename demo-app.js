var modulate = require('./index');
var handleError = require('handle-error-web');
var oknok = require('oknok');
var ContextKeeper = require('audio-context-singleton');
var wireRecorder = require('./recorder');

var { getCurrentContext } = ContextKeeper();

document.getElementById('start-button').addEventListener('click', start);
var indexField = document.getElementById('index-field');
var modFreqField = document.getElementById('mod-freq-field');
var carrierField = document.getElementById('carrier-field');
var carrierTypeSelect = document.getElementById('wave-type-select');
var durationField = document.getElementById('duration-field');

var signalBuffer;

wireRecorder({ onError: handleError, onRecorded });

function start() {
  console.log('started');

  getCurrentContext(oknok({ ok: useContext, nok: handleError }));

  function useContext(ctx) {
    var carrierOsc = ctx.createOscillator();
    carrierOsc.type = carrierTypeSelect.value;
    carrierOsc.frequency.value = carrierField.value;

    var playModulation = modulate({
      ctx,
      index: +indexField.value,
      modFreq: +modFreqField.value,
      carrierOsc,
      signalBuffer,
    });

    playModulation({ delaySeconds: 0, durationSeconds: +durationField.value });
  }
}

function onRecorded(audioBuffer) {
  signalBuffer = audioBuffer;
}
