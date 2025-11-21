import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "store/hooks";
import {
  clearAnalysisResult,
  selectAnalysisResult,
} from "store/slices/analysisResultSlice";
import { clearUploadedFile } from "store/slices/uploadFileSlice";
import { clearBloodMarkersData } from "store/slices/bloodMarkersSlice";
import { clearSelectedOptions } from "store/slices/optionSlice";
import { STEP_PATHS } from "constants/steps";

export const useResultPage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const analysisResult = useAppSelector(selectAnalysisResult);

  const [pdfPageHeight, setPdfPageHeight] = useState<number>(842);

  useEffect(() => {
    const calculateExactHeight = () => {
      const originalElement = document.getElementById("result-content");
      if (!originalElement) return;

      const clone = originalElement.cloneNode(true) as HTMLElement;

      clone.style.width = "1980px";
      clone.style.position = "absolute";
      clone.style.top = "-9999px";
      clone.style.left = "-9999px";
      clone.style.visibility = "hidden";
      clone.style.height = "auto";
      clone.style.maxHeight = "none";
      clone.style.overflow = "visible";

      document.body.appendChild(clone);

      const contentHeightPx = clone.scrollHeight;

      document.body.removeChild(clone);

      const calculatedPoints = contentHeightPx * 0.57;

      setPdfPageHeight(Math.max(842, calculatedPoints));
    };

    const timer = setTimeout(calculateExactHeight, 500);

    window.addEventListener("resize", calculateExactHeight);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", calculateExactHeight);
    };
  }, [analysisResult]);

  const handlePrintReport = () => {
    window.print();
  };

  const handleStartNewAnalysis = () => {
    dispatch(clearUploadedFile());
    dispatch(clearBloodMarkersData());
    dispatch(clearSelectedOptions());
    dispatch(clearAnalysisResult());
    navigate(STEP_PATHS.upload);
  };

  const handleBack = (): void => {
    navigate(STEP_PATHS.review);
  };

  return {
    analysisResult,
    handlePrintReport,
    handleStartNewAnalysis,
    handleBack,
    pdfPageHeight,
  };
};
