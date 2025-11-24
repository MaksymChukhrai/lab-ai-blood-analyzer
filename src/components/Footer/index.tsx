import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Box, Grid } from "@mui/material";
import { COMPANY_LINKS, SUPPORT_LINKS } from "constants/navigation";
import { Logo } from "components/Logo";
import { ContactUsModal } from "components/Contact";
import {
  FooterWrapper,
  Description,
  FooterLink,
  FooterDivider,
  FooterLinkContainer,
  GridWrapper,
  LinkTitle,
  Caption,
} from "./styles";

interface FooterProps {
  variant?: "full" | "compact";
}

export const Footer = ({ variant = "full" }: FooterProps) => {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleOpenModal = (): void => {
    setIsModalOpen(true);
  };

  const handleCloseModal = (): void => {
    setIsModalOpen(false);
  };

  return (
    <FooterWrapper $variant={variant}>
      <GridWrapper container spacing={5} $variant={variant}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Logo light variant="footer" />
          <Description $variant={variant}>
            {t("footer.description")}
          </Description>
        </Grid>

        {variant === "full" && (
          <Grid
            size={{ xs: 12, md: 3 }}
            sx={{ display: { xs: "none", md: "block" } }}
          >
            <LinkTitle>{t("footer.companyTitle")}</LinkTitle>
            <Box component="nav">
              {COMPANY_LINKS.map((link) => (
                <FooterLink
                  href={link.path}
                  key={link.key}
                  variant="body1"
                  display="block"
                  mb={"4px"}
                >
                  {t(link.key)}
                </FooterLink>
              ))}
            </Box>
          </Grid>
        )}
        <Grid size={{ xs: 12, md: variant === "full" ? 3 : 4 }}>
          {variant === "full" && (
            <LinkTitle>{t("footer.supportTitle")}</LinkTitle>
          )}
          <FooterLinkContainer $variant={variant}>
            <FooterLink display="block" onClick={handleOpenModal}>
              {t("footer.links.contactUs")}
            </FooterLink>
            <ContactUsModal isOpen={isModalOpen} onClose={handleCloseModal} />
            {SUPPORT_LINKS.map((link) => (
              <FooterLink href={link.path} key={link.key} display="block">
                {t(link.key)}
              </FooterLink>
            ))}
          </FooterLinkContainer>
        </Grid>
      </GridWrapper>
      {variant === "full" && (
        <>
          <FooterDivider />
          <Caption>{t("footer.copyright")}</Caption>
        </>
      )}
    </FooterWrapper>
  );
};
