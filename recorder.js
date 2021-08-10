var micToBuffer = require('mic-to-buffer');
var toWav = require('audiobuffer-to-wav');

var recording = false;
var recordButton = document.getElementById('record-button');
var signalPlayer = document.getElementById('signal-player');
var stopRecordingFn;

function wireRecorder({ onRecorded, onError }) {
  recordButton.addEventListener('click', toggleRecord);

  function toggleRecord() {
    if (!recording) {
      micToBuffer({ onEnded, onError, onRecordingStart });
    } else {
      recording = false;
      stopRecordingFn();
    }
  }

  function onRecordingStart(stopRecording) {
    stopRecordingFn = stopRecording;
    recordButton.textContent = 'Stop recording';
    recording = true;
  }

  function onEnded(audioBuffer) {
    var recordingFile = new Blob([toWav(audioBuffer)]);
    signalPlayer.setAttribute('src', URL.createObjectURL(recordingFile));
    signalPlayer.classList.remove('hidden');
    onRecorded(audioBuffer);
  }
}

module.exports = wireRecorder;
