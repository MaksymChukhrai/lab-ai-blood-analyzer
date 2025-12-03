import Tesseract from "tesseract.js";
import { OCR_LANGUAGES } from "@/constants/fileUpload";

export const extractTextFromFile = async (file: File): Promise<string> => {
  try {
    const imageUrl = URL.createObjectURL(file);
    const result = await Tesseract.recognize(imageUrl, OCR_LANGUAGES);
    URL.revokeObjectURL(imageUrl);

    return result.data.text;
  } catch {
    throw new Error("error.ocr");
  }
};
