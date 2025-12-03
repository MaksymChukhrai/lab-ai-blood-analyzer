import { useNavigate } from "react-router-dom";
import { PATHS } from "constants/navigation";

export const useLoader = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(PATHS.OPTION);
  };

  const handleContinue = (
    nextLoaderStep: 1 | 2 = 1,
    waitingForApi: boolean = false,
  ) => {
    navigate(PATHS.LOADER, {
      state: { loaderStep: nextLoaderStep, waitingForApi },
    });
  };

  const handleContinueSelf = (currentLoaderStep: 1 | 2) => {
    const targetPath = currentLoaderStep === 2 ? PATHS.RESULT : PATHS.REVIEW;

    navigate(targetPath);
  };

  return {
    handleBack,
    handleContinue,
    handleContinueSelf,
  };
};
