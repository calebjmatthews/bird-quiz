function floatTo16BitPCM(float32Array: Float32Array<ArrayBufferLike>): Int16Array {
  const buffer = new Int16Array(float32Array.length);
  for (let i = 0; i < float32Array.length; i++) {
    let s = Math.max(-1, Math.min(1, float32Array[i])); // clamp
    buffer[i] = s < 0 ? s * 0x8000 : s * 0x7fff;
  };
  return buffer;
};

function writeWavHeader(view: DataView, sampleRate: number, numChannels: number, numSamples: number) {
  const bytesPerSample = 2;
  const blockAlign = numChannels * bytesPerSample;
  const byteRate = sampleRate * blockAlign;

  // RIFF identifier
  writeString(view, 0, 'RIFF');
  view.setUint32(4, 36 + numSamples * blockAlign, true);
  writeString(view, 8, 'WAVE');

  // fmt chunk
  writeString(view, 12, 'fmt ');
  view.setUint32(16, 16, true); // Subchunk1Size
  view.setUint16(20, 1, true);  // AudioFormat (1 = PCM)
  view.setUint16(22, numChannels, true);
  view.setUint32(24, sampleRate, true);
  view.setUint32(28, byteRate, true);
  view.setUint16(32, blockAlign, true);
  view.setUint16(34, bytesPerSample * 8, true);

  // data chunk
  writeString(view, 36, 'data');
  view.setUint32(40, numSamples * blockAlign, true);
};

function writeString(view: DataView, offset: number, str: string) {
  for (let i = 0; i < str.length; i++) {
    view.setUint8(offset + i, str.charCodeAt(i));
  };
};

export default function float32ToWav(
  float32Array: Float32Array<ArrayBufferLike>,
  sampleRate: number = 44100,
  numChannels: number = 1
): Blob {
  const pcm16 = floatTo16BitPCM(float32Array);

  const buffer = new ArrayBuffer(44 + pcm16.length * 2);
  const view = new DataView(buffer);

  writeWavHeader(view, sampleRate, numChannels, pcm16.length);

  let offset = 44;
  for (let i = 0; i < pcm16.length; i++, offset += 2) {
    view.setInt16(offset, pcm16[i], true);
  };

  return new Blob([buffer], { type: 'audio/wav' });
};

