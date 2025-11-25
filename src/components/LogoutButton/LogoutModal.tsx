import { useTranslation } from "react-i18next";
import { Modal } from "@mui/material";
import {
  StyledModalBox,
  StyledModalIcon,
  StyledModalTitle,
  StyledModalButtonContainer,
  StyledConfirmButton,
  StyledCancelButton,
  modalBackdropStyles,
} from "./styles";
import type { LogoutModalProps } from "./types";

export const LogoutModal = ({
  open,
  onConfirm,
  onCancel,
  isLoading,
}: LogoutModalProps) => {
  const { t } = useTranslation();

  return (
    <Modal
      open={open}
      onClose={onCancel}
      aria-labelledby="logout-modal-title"
      aria-describedby="logout-modal-description"
      slotProps={{
        backdrop: {
          sx: modalBackdropStyles,
        },
      }}
    >
      <StyledModalBox>
        <StyledModalIcon data-testid="logout-modal-icon" />

        <StyledModalTitle id="logout-modal-title">
          {t("logout.modal.title")}
        </StyledModalTitle>

        <StyledModalButtonContainer>
          <StyledConfirmButton
            variant="contained"
            onClick={onConfirm}
            disabled={isLoading}
          >
            {t("logout.modal.yes")}
          </StyledConfirmButton>

          <StyledCancelButton
            variant="outlined"
            onClick={onCancel}
            disabled={isLoading}
          >
            {t("logout.modal.no")}
          </StyledCancelButton>
        </StyledModalButtonContainer>
      </StyledModalBox>
    </Modal>
  );
};
