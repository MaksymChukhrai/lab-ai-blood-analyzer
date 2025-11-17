import {
  styled,
  Box,
  Typography,
  Button,
  alpha,
  IconButton,
} from "@mui/material";

export const PageContainer = styled(Box)(({ theme }) => ({
  maxWidth: "1284px",
  width: "100%",
  margin: "0 auto ",
  padding: "59px 61px 82px",
  backgroundColor: theme.colors.WHITE,
  borderRadius: "15px",
  boxShadow: `0px 4px 4px 0px ${alpha(theme.colors.PRIMARY_LIGHT, 0.25)}`,
}));

export const Header = styled(Box)({
  marginBottom: "54px",
  textAlign: "center",
});

export const Title = styled(Typography)(({ theme }) => ({
  fontFamily: theme.fontFamily.DM_SANS,
  fontWeight: theme.fontWeight.BOLD,
  fontSize: theme.fontSizes.fontSize32,
  lineHeight: theme.lineHeights.lineHeight70,
  color: theme.colors.PRIMARY_DARK,
}));

export const Subtitle = styled(Typography)(({ theme }) => ({
  fontFamily: theme.fontFamily.POPPINS,
  fontWeight: theme.fontWeight.LIGHT,
  fontSize: theme.fontSizes.fontSize20,
  lineHeight: theme.lineHeights.lineHeight35,
  color: theme.colors.PRIMARY_DARK,
  marginBottom: "30px",
}));

export const WarningBox = styled(Box, {
  shouldForwardProp: (prop) => prop !== "$position",
})<{ $position?: string }>(({ $position }) => ({
  maxWidth: "680px",
  margin: "0 auto",
  display: "flex",
  alignItems: "center",
  textAlign: "start",
  gap: "10px",

  ...($position === "footer" && {
    maxWidth: "100%",
    alignItems: "flex-start",
    gap: "20px",
  }),
}));

export const WarningText = styled(Typography)(({ theme }) => ({
  fontFamily: theme.fontFamily.DM_SANS,
  fontWeight: theme.fontWeight.REGULAR,
  fontSize: theme.fontSizes.fontSize18,
  color: alpha(theme.colors.SECONDARY_RED, 0.8),
}));

export const MarkerTable = styled(Box)(({ theme }) => ({
  boxShadow: `0px 5px 6px -2px ${alpha(theme.colors.PRIMARY_DARK, 0.25)}`,
  borderRadius: "15px",
  overflow: "hidden",
  marginBottom: "50px",
  border: "none",
}));

export const TableHeader = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "2fr 1.5fr 1.5fr 3fr 40px",
  gap: "20px",
  padding: "33px 44px",
  backgroundColor: theme.colors.PRIMARY_DARK,
}));

export const TableHeaderCell = styled(Typography)(({ theme }) => ({
  fontFamily: theme.fontFamily.POPPINS,
  fontWeight: theme.fontWeight.SEMIBOLD,
  fontSize: theme.fontSizes.fontSize20,
  color: theme.colors.WHITE,
}));

export const TableRow = styled(Box, {
  shouldForwardProp: (prop) => prop !== "status",
})<{ status?: string }>(({ theme, status }) => ({
  display: "grid",
  gridTemplateColumns: "2fr 1.5fr 1.5fr 3fr 40px",
  gap: "20px",
  padding: "20px 25px",
  borderBottom: `1px solid ${alpha(theme.colors.PRIMARY_DARK, 0.1)}`,
  backgroundColor: alpha(theme.colors.SECONDARY_GREEN, 0.1),

  ...(status === "abnormal" && {
    backgroundColor: alpha(theme.colors.SECONDARY_RED, 0.1),
  }),

  ...(status === "limit" && {
    backgroundColor: alpha(theme.colors.SECONDARY_YELLOW, 0.1),
  }),

  "&:last-child": {
    borderBottom: "none",
  },
}));

export const StatusBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "50px",
  margin: "0 auto 48px",
});

export const StatusText = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "9px",
  fontFamily: theme.fontFamily.POPPINS,
  fontWeight: theme.fontWeight.REGULAR,
  fontSize: theme.fontSizes.fontSize20,
  lineHeight: theme.lineHeights.lineHeight35,
  color: theme.colors.PRIMARY_DARK,
}));

export const StatusDot = styled(Box, {
  shouldForwardProp: (prop) => prop !== "status",
})<{ status?: string }>(({ theme, status }) => ({
  width: "13px",
  height: "13px",
  borderRadius: "50%",
  flexShrink: 0,
  backgroundColor: theme.colors.SECONDARY_GREEN,

  ...(status === "abnormal" && {
    backgroundColor: theme.colors.SECONDARY_RED,
  }),

  ...(status === "limit" && {
    backgroundColor: theme.colors.SECONDARY_YELLOW,
  }),
}));

export const TableCell = styled(Box)(({ theme }) => ({
  fontFamily: theme.fontFamily.POPPINS,
  fontSize: theme.fontSizes.fontSize18,
  fontWeight: theme.fontWeight.REGULAR,
  lineHeight: theme.lineHeights.lineHeight35,
  color: theme.colors.PRIMARY_DARK,
  display: "flex",
  alignItems: "center",
  gap: "9px",
}));

export const SectionBox = styled(Box, {
  shouldForwardProp: (prop) => prop !== "$variant",
})<{ $variant?: string }>(({ theme, $variant }) => ({
  marginBottom: "40px",
  backgroundColor: theme.colors.WHITE,
  borderRadius: "15px",
  boxShadow: `0px 2px 8px ${alpha(theme.colors.PRIMARY_DARK, 0.1)}`,

  ...($variant === "question" && {
    backgroundColor: alpha(theme.colors.SECONDARY_GREEN, 0.15),
    padding: "30px",
    marginBottom: "50px",
  }),

  ...($variant === "recommendations" && {
    backgroundColor: alpha(theme.colors.SECONDARY_GREEN, 0.1),
    padding: "30px 40px 40px",
    marginBottom: "50px",
  }),

  ...($variant === "medicalAssessment" && {
    backgroundColor: alpha(theme.colors.SECONDARY_ORANGE, 0.15),
    padding: "46px 33px",
    marginBottom: "12px",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  }),
}));

export const SectionTitle = styled(Typography, {
  shouldForwardProp: (prop) => prop !== "$variant",
})<{ $variant?: string }>(({ theme, $variant }) => ({
  fontFamily: theme.fontFamily.DM_SANS,
  fontWeight: theme.fontWeight.BOLD,
  fontSize: theme.fontSizes.fontSize22,
  lineHeight: theme.lineHeights.lineHeight25,
  color: theme.colors.SECONDARY_GREEN,
  marginBottom: "10px",

  ...($variant === "question" && {
    color: theme.colors.SECONDARY_GREEN,
    textTransform: "capitalize",
  }),

  ...($variant === "medicalAssessment" && {
    color: theme.colors.SECONDARY_ORANGE,
    marginBottom: "0px",
  }),
}));

export const SectionSubtitle = styled(Typography)(({ theme }) => ({
  fontFamily: theme.fontFamily.POPPINS,
  fontWeight: theme.fontWeight.REGULAR,
  fontSize: theme.fontSizes.fontSize18,
  lineHeight: theme.lineHeights.lineHeight24,
  color: theme.colors.SECONDARY_GREEN,
  marginBottom: "10px",
  textDecoration: "underline",
}));

export const RecommendationGrid = styled(Box)({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  columnGap: "40px",
  rowGap: "20px",
  marginTop: "35px",
});

export const RecommendationText = styled(Typography)(({ theme }) => ({
  fontFamily: theme.fontFamily.POPPINS,
  fontWeight: theme.fontWeight.MEDIUM,
  fontSize: theme.fontSizes.fontSize18,
  lineHeight: theme.lineHeights.lineHeight30,
  color: theme.colors.SECONDARY_GREEN,
  marginBottom: "15px",
}));

export const RecommendationBox = styled(Box)(({ theme }) => ({
  borderRadius: "10px",
  backgroundColor: theme.colors.WHITE,
  display: "flex",
  alignItems: "flex-start",
  padding: "20px 30px",
  gap: "30px",
}));

export const CardBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
});

export const CardImage = styled("img")({
  width: "31px",
  height: "31px",
});

export const CardTitle = styled(Typography)(({ theme }) => ({
  fontFamily: theme.fontFamily.POPPINS,
  fontWeight: theme.fontWeight.SEMIBOLD,
  fontSize: theme.fontSizes.fontSize20,
  lineHeight: theme.lineHeights.lineHeight24,
  color: theme.colors.PRIMARY_DARK,
}));

export const CardContent = styled(Typography)(({ theme }) => ({
  fontFamily: theme.fontFamily.POPPINS,
  fontWeight: theme.fontWeight.REGULAR,
  fontSize: theme.fontSizes.fontSize20,
  lineHeight: theme.lineHeights.lineHeight24,
  color: theme.colors.PRIMARY_DARK,
}));

export const AssessmentText = styled(Typography)(({ theme }) => ({
  fontFamily: theme.fontFamily.POPPINS,
  fontWeight: theme.fontWeight.MEDIUM,
  fontSize: theme.fontSizes.fontSize18,
  lineHeight: theme.lineHeights.lineHeight24,
  color: theme.colors.SECONDARY_ORANGE,
}));

export const FooterActions = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginTop: "60px",
});

export const ButtonGroup = styled(Box)({
  display: "flex",
  gap: "30px",
});

export const BackButton = styled(IconButton)({
  minWidth: "auto",
});

export const ActionButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== "$variant",
})<{ $variant?: string }>(({ theme, $variant }) => ({
  minWidth: "150px",
  padding: "12px 25px",
  border: "1px solid transparent",

  ...($variant === "download" && {
    backgroundColor: alpha(theme.colors.PRIMARY_LIGHT, 0.7),
    boxShadow: "none",
    "&:hover": {
      boxShadow: `0px 3px 5px 0px ${alpha(theme.colors.PRIMARY_DARK, 0.4)}`,
      backgroundColor: alpha(theme.colors.PRIMARY_LIGHT, 0.7),
    },
    "&:active": {
      border: "1px solid transparent",
      backgroundColor: theme.colors.PRIMARY_DARK,
      color: theme.colors.WHITE,
    },
    "&:focus-visible": {
      border: `2px solid ${theme.colors.PRIMARY_LIGHT}`,
    },
  }),

  ...($variant === "startNew" && {
    backgroundColor: theme.colors.WHITE,
    color: theme.colors.PRIMARY_DARK,
    borderColor: theme.colors.PRIMARY_DARK,
    boxShadow: "none",
    "&:hover": {
      boxShadow: `0px 3px 5px 0px ${alpha(theme.colors.PRIMARY_DARK, 0.4)}`,
      backgroundColor: "transparent",
    },
    "&:active": {
      border: "1px solid transparent",
      backgroundColor: theme.colors.PRIMARY_DARK,
      boxShadow: `0px 4px 4px 0px ${alpha(theme.colors.PRIMARY_DARK, 0.4)}`,
      color: theme.colors.WHITE,
    },
    "&:focus-visible": {
      border: `2px solid ${theme.colors.PRIMARY_LIGHT}`,
    },
  }),
}));
