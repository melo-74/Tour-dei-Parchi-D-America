/**
 * Ambient Desert Wind & Cinematic Harmonic Drone using Web Audio API
 * No external mp3 files required, fully reliable and lightweight.
 */

let audioCtx: AudioContext | null = null;
let masterGain: GainNode | null = null;
let noiseNode: AudioNode | null = null;
let oscNodes: OscillatorNode[] = [];

export function toggleDesertAmbiance(start: boolean): boolean {
  try {
    if (!start) {
      if (masterGain && audioCtx) {
        masterGain.gain.linearRampToValueAtTime(0.0001, audioCtx.currentTime + 1.2);
        setTimeout(() => {
          oscNodes.forEach((o) => {
            try {
              o.stop();
              o.disconnect();
            } catch {
              // ignore
            }
          });
          oscNodes = [];
          if (noiseNode) {
            try {
              noiseNode.disconnect();
            } catch {
              // ignore
            }
            noiseNode = null;
          }
          if (audioCtx && audioCtx.state !== 'closed') {
            audioCtx.close();
            audioCtx = null;
          }
        }, 1300);
      }
      return false;
    }

    // Start audio
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AudioContextClass) return false;

    audioCtx = new AudioContextClass();
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }

    masterGain = audioCtx.createGain();
    masterGain.gain.setValueAtTime(0.001, audioCtx.currentTime);
    masterGain.gain.exponentialRampToValueAtTime(0.08, audioCtx.currentTime + 2); // Soft, non-intrusive volume
    masterGain.connect(audioCtx.destination);

    // Warm desert chord (D-minor / open fifths: D2, A2, D3, F3)
    const frequencies = [73.42, 110.0, 146.83, 174.61];

    frequencies.forEach((freq, idx) => {
      if (!audioCtx || !masterGain) return;
      const osc = audioCtx.createOscillator();
      const oscGain = audioCtx.createGain();

      osc.type = idx % 2 === 0 ? 'sine' : 'triangle';
      osc.frequency.setValueAtTime(freq, audioCtx.currentTime);

      // Low pass filter for warm, dreamy landscape tone
      const filter = audioCtx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(320 + idx * 80, audioCtx.currentTime);

      oscGain.gain.setValueAtTime(0.25 / frequencies.length, audioCtx.currentTime);

      osc.connect(filter);
      filter.connect(oscGain);
      oscGain.connect(masterGain);

      osc.start();
      oscNodes.push(osc);
    });

    // Subtle desert breeze pink noise generator
    const bufferSize = audioCtx.sampleRate * 2;
    const noiseBuffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
    const output = noiseBuffer.getChannelData(0);
    let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;
    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1;
      b0 = 0.99886 * b0 + white * 0.0555179;
      b1 = 0.99332 * b1 + white * 0.0750759;
      b2 = 0.96900 * b2 + white * 0.1538520;
      b3 = 0.86650 * b3 + white * 0.3104856;
      b4 = 0.55000 * b4 + white * 0.5329522;
      b5 = -0.7616 * b5 - white * 0.0168980;
      output[i] = b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362;
      output[i] *= 0.03; // quiet
      b6 = white * 0.115926;
    }

    const whiteNoise = audioCtx.createBufferSource();
    whiteNoise.buffer = noiseBuffer;
    whiteNoise.loop = true;

    const windFilter = audioCtx.createBiquadFilter();
    windFilter.type = 'bandpass';
    windFilter.frequency.setValueAtTime(240, audioCtx.currentTime);
    windFilter.Q.setValueAtTime(1.5, audioCtx.currentTime);

    const windGain = audioCtx.createGain();
    windGain.gain.setValueAtTime(0.3, audioCtx.currentTime);

    whiteNoise.connect(windFilter);
    windFilter.connect(windGain);
    windGain.connect(masterGain);

    whiteNoise.start();
    noiseNode = whiteNoise;

    return true;
  } catch (err) {
    console.warn('Audio ambiance not available:', err);
    return false;
  }
}
