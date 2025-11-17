import { useCallback } from "react";
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

  const handleDownloadPDF = useCallback(async () => {
    try {
      const html2pdf = (await import("html2pdf.js")).default;
      const element = document.getElementById("result-content");

      if (!element) return;

      const contentWidthPx = element.scrollWidth;
      const contentHeightPx = element.scrollHeight;

      const pxToMm = 25.4 / 96;
      const widthMm = contentWidthPx * pxToMm;
      const heightMm = contentHeightPx * pxToMm;
      const finalHeightMm = heightMm + 1;

      const opt = {
        margin: 0,
        filename: `blood-test-analysis-${new Date().getTime()}.pdf`,
        image: { type: "jpeg" as const, quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true },

        jsPDF: {
          unit: "mm",
          format: [widthMm, finalHeightMm] as [number, number],
          orientation: "portrait" as const,
        },
        pagebreak: { mode: "avoid-all" },
      };

      await html2pdf().set(opt).from(element).save();
    } catch (error) {
      console.error("Failed to generate PDF:", error);
    }
  }, []);

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
    handleDownloadPDF,
    handlePrintReport,
    handleStartNewAnalysis,
    handleBack,
  };
};
