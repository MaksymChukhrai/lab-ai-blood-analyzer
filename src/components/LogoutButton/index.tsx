import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { LogoutModal } from "./LogoutModal";
import { StyledLogoutButton } from "./styles";
import { logout } from "@/api/authService";
import { PATHS } from "@/constants/navigation";

export const LogoutButton = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogoutClick = () => {
    setIsModalOpen(true);
  };

  const handleConfirmLogout = async () => {
    setIsLoading(true);
    try {
      await logout();
      setIsModalOpen(false);
      navigate(PATHS.DEFAULT);
    } catch (error) {
      console.error("Logout failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCancelLogout = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <StyledLogoutButton
        variant="contained"
        onClick={handleLogoutClick}
        disabled={isLoading}
      >
        {t("logout.button")}
      </StyledLogoutButton>

      <LogoutModal
        open={isModalOpen}
        onConfirm={handleConfirmLogout}
        onCancel={handleCancelLogout}
        isLoading={isLoading}
      />
    </>
  );
};
