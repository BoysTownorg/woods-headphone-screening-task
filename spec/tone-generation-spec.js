import { pure } from "../lib/tone-generation.js";

describe("tone generation", () => {
  it("tbd", () => {
    expect(
      pure({
        sampleRate_Hz: 44100,
        frequency_Hz: 440,
        duration_ms: 1000,
      }).slice(0, 5)
    ).toEqual([
      Math.sin(2 * Math.PI * 440 * 0),
      Math.sin((2 * Math.PI * 440 * 1) / 44100),
      Math.sin((2 * Math.PI * 440 * 2) / 44100),
      Math.sin((2 * Math.PI * 440 * 3) / 44100),
      Math.sin((2 * Math.PI * 440 * 4) / 44100),
    ]);
  });
});
