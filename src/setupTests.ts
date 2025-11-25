import "@testing-library/jest-dom";

Object.defineProperty(window, "URL", {
  value: {
    createObjectURL: jest.fn(),
  },
  writable: true,
});

if (typeof globalThis.TextEncoder === "undefined") {
  class TextEncoderPolyfill {
    encode(input: string): Uint8Array {
      const encoder = new Array(input.length);
      for (let i = 0; i < input.length; i++) {
        encoder[i] = input.charCodeAt(i);
      }

      return new Uint8Array(encoder);
    }
  }

  class TextDecoderPolyfill {
    decode(input: Uint8Array): string {
      return String.fromCharCode(...Array.from(input));
    }
  }

  globalThis.TextEncoder = TextEncoderPolyfill as typeof TextEncoder;
  globalThis.TextDecoder = TextDecoderPolyfill as typeof TextDecoder;
}
