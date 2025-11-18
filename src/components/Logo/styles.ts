import { alpha, styled } from "@mui/material/styles";
import { Typography, Box } from "@mui/material";

export const LogoContainer = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  gap: 15,
  width: "fitContent",

  "@media (max-width: 426px)": {
    gap: 20,
    marginBottom: "31px !important",
  },
}));

export const LogoImage = styled("img", {
  shouldForwardProp: (prop) => prop !== "$variant",
})<{ $variant?: "default" | "hero" | "page" }>(({ theme, $variant }) => ({
  width: 40,
  height: 40,
  objectFit: "cover",
  display: "block",

  ...($variant === "hero" && {
    width: 44,
    height: 44,
  }),

  ...($variant === "page" && {
    width: 56,
    height: 56,
    filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
  }),

  "@media (max-width: 426px)": {
    width: 33,
    height: 33,
    borderRadius: 5,
    boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
    backgroundColor: theme.colors.PRIMARY_DARK,
    padding: "1px 4px 1px 4px",

    ...($variant === "hero" && {
      width: 33,
      height: 33,
    }),

    ...($variant === "page" && {
      width: 33,
      height: 33,
      filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
    }),
  },
}));

export const LogoText = styled(Typography, {
  shouldForwardProp: (prop) => prop !== "$light" && prop !== "$variant",
})<{ $light?: boolean; $variant?: "default" | "hero" | "page" }>(
  ({ theme, $light, $variant }) => ({
    fontFamily: theme.fontFamily.DM_SANS,
    fontWeight: theme.fontWeight.BOLD,
    fontSize: theme.fontSizes.fontSize36,
    lineHeight: theme.lineHeights.lineHeight100,
    color: $light ? theme.colors.WHITE : theme.colors.PRIMARY_DARK,
    paddingBottom: 8,

    ...($variant === "hero" && {
      fontSize: theme.fontSizes.fontSize50,
      textShadow: `0 4px 4px ${alpha(theme.colors.PRIMARY_DARK, 0.3)}`,
    }),

    ...($variant === "page" && {
      fontSize: theme.fontSizes.fontSize55,
      lineHeight: "100%",
      paddingBottom: 0,
      filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
    }),

    "@media (max-width: 426px)": {
      fontSize: theme.fontSizes.fontSize36,
      fontWeight: theme.fontWeight.BOLD,
      lineHeight: 1.31,

      ...($variant === "hero" && {
        fontSize: theme.fontSizes.fontSize36,
        lineHeight: 1.31,
        textShadow: `0 4px 4px ${alpha(theme.colors.PRIMARY_DARK, 0.3)}`,
      }),

      ...($variant === "page" && {
        fontSize: theme.fontSizes.fontSize36,
        lineHeight: 1.31,
        paddingBottom: 0,
        filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
      }),
    },
  }),
);
