import imageCompression from "browser-image-compression";

/**
 * Compression settings optimized for OCR
 */
interface CompressionOptions {
  maxSizeMB: number;
  maxWidthOrHeight: number;
  useWebWorker: boolean;
}

const DEFAULT_OPTIONS: CompressionOptions = {
  maxSizeMB: 2, // 2MB max (optimal for Tesseract OCR)
  maxWidthOrHeight: 1920, // Full HD (good quality for text recognition)
  useWebWorker: true, // Use separate thread for better performance
};

/**
 * Compress image file if it exceeds size limit
 * @param file - Original image file
 * @param options - Compression options (optional)
 * @returns Compressed file or original if already small enough
 */
export const compressImage = async (
  file: File,
  options: Partial<CompressionOptions> = {},
): Promise<File> => {
  try {
    const finalOptions = { ...DEFAULT_OPTIONS, ...options };
    const maxBytes = finalOptions.maxSizeMB * 1024 * 1024;

    // Skip compression if file is already small enough
    if (file.size <= maxBytes) {
      return file;
    }

    const compressedFile = await imageCompression(file, finalOptions);

    return compressedFile;
  } catch {
    // If compression fails, return original file
    return file;
  }
};

/**
 * Validate image dimensions
 * @param file - Image file to validate
 * @returns Object with width, height, and validation status
 */
export const validateImageDimensions = async (
  file: File,
): Promise<{ width: number; height: number; isValid: boolean }> => {
  return new Promise((resolve) => {
    const img = new Image();
    const url = URL.createObjectURL(file);

    img.onload = () => {
      URL.revokeObjectURL(url);

      // Minimum resolution for OCR: 640x480
      const isValid = img.width >= 640 && img.height >= 480;

      resolve({
        width: img.width,
        height: img.height,
        isValid,
      });
    };

    img.onerror = () => {
      URL.revokeObjectURL(url);
      resolve({ width: 0, height: 0, isValid: false });
    };

    img.src = url;
  });
};
