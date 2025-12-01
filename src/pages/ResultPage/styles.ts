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

  [theme.breakpoints.down("md")]: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "33px 16px",
  },
}));

export const Header = styled(Box)(({ theme }) => ({
  marginBottom: "54px",
  textAlign: "center",

  [theme.breakpoints.down("md")]: {
    marginBottom: "30px",
  },
}));

export const Title = styled(Typography)(({ theme }) => ({
  fontFamily: theme.fontFamily.DM_SANS,
  fontWeight: theme.fontWeight.BOLD,
  fontSize: theme.fontSizes.fontSize32,
  color: theme.colors.PRIMARY_DARK,
  [theme.breakpoints.down("md")]: {
    fontSize: theme.fontSizes.fontSize20,
    lineHeight: "normal",
    textTransform: "capitalize",
    maxWidth: "200px",
    margin: "0 auto 10px",
  },
}));

export const Subtitle = styled(Typography)(({ theme }) => ({
  fontFamily: theme.fontFamily.POPPINS,
  fontWeight: theme.fontWeight.LIGHT,
  fontSize: theme.fontSizes.fontSize20,
  color: theme.colors.PRIMARY_DARK,
  marginBottom: "30px",
  [theme.breakpoints.down("md")]: {
    fontSize: theme.fontSizes.fontSize16,
    lineHeight: "normal",
    maxWidth: "280px",
    margin: "0 auto 20px",
  },
}));

export const WarningBox = styled(Box, {
  shouldForwardProp: (prop) => prop !== "$position",
})<{ $position?: string }>(({ $position, theme }) => ({
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

  [theme.breakpoints.down("md")]: {
    alignItems: "flex-start",

    ...($position === "footer" && {
      maxWidth: "300px",
      gap: "10px",
    }),
  },
}));

export const WarningText = styled(Typography)(({ theme }) => ({
  fontFamily: theme.fontFamily.DM_SANS,
  fontWeight: theme.fontWeight.REGULAR,
  fontSize: theme.fontSizes.fontSize18,
  color: alpha(theme.colors.SECONDARY_RED, 0.8),
  [theme.breakpoints.down("md")]: {
    fontSize: theme.fontSizes.fontSize16,
    lineHeight: "normal",
  },
}));

export const MarkerTable = styled(Box)(({ theme }) => ({
  boxShadow: `0px 5px 6px -2px ${alpha(theme.colors.PRIMARY_DARK, 0.25)}`,
  borderRadius: "15px",
  overflow: "hidden",
  marginBottom: "50px",
  border: "none",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

export const MobileMarkersContainer = styled(Box)(({ theme }) => ({
  display: "none",
  [theme.breakpoints.down("md")]: {
    display: "flex",
    flexDirection: "column",
    gap: "0px",
    borderRadius: "15px",
    overflow: "hidden",
  },
}));

export const MobileMarkerCard = styled(Box, {
  shouldForwardProp: (prop) => prop !== "status",
})<{ status?: string }>(({ theme, status }) => ({
  overflow: "hidden",
  backgroundColor: alpha(theme.colors.SECONDARY_GREEN, 0.1),
  borderBottom: `1px solid ${alpha(theme.colors.PRIMARY_DARK, 0.1)} `,

  ...(status === "abnormal" && {
    backgroundColor: alpha(theme.colors.SECONDARY_RED, 0.1),
  }),
  ...(status === "limit" && {
    backgroundColor: alpha(theme.colors.SECONDARY_YELLOW, 0.1),
  }),
}));

export const MobileMarkerHeader = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "15px",
});

export const MobileMarkerInfo = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "10px",
});

export const MobileMarkerValue = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  fontFamily: theme.fontFamily.POPPINS,
  fontWeight: theme.fontWeight.REGULAR,
  fontSize: theme.fontSizes.fontSize15,
  color: theme.colors.PRIMARY_DARK,
}));

export const MobileMarkerArrow = styled("img", {
  shouldForwardProp: (prop) => prop !== "isExpanded",
})<{ isExpanded?: boolean }>(({ isExpanded }) => ({
  transform: isExpanded ? "rotate(180deg)" : "rotate(0deg)",
  transition: "transform 0.3s ease",
  width: "12px",
  marginLeft: "10px",
}));

export const MobileMarkerDetails = styled(Box)({
  padding: "10px 15px 24px",
  backgroundColor: "transparent",
});

export const MobileDetailBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.colors.WHITE,
  borderRadius: "10px",
  padding: "12px",
  boxShadow: `0px 4px 4px 0px ${alpha(theme.colors.PRIMARY_DARK, 0.25)} `,
}));

export const MobileLabel = styled(Typography)(({ theme }) => ({
  fontFamily: theme.fontFamily.POPPINS,
  fontWeight: theme.fontWeight.MEDIUM,
  fontSize: theme.fontSizes.fontSize14,
  color: theme.colors.PRIMARY_DARK,
}));

export const MobileText = styled(Typography)(({ theme }) => ({
  fontFamily: theme.fontFamily.POPPINS,
  fontSize: theme.fontSizes.fontSize14,
  color: theme.colors.PRIMARY_DARK,
  fontWeight: theme.fontWeight.LIGHT,
  lineHeight: "normal",
  marginBottom: "10px",
}));

export const TableHeader = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "2fr 1.5fr 1.5fr 3fr 40px",
  gap: "20px",
  padding: "33px 44px",
  backgroundColor: theme.colors.PRIMARY_DARK,
  [theme.breakpoints.down("md")]: {
    gridTemplateColumns: "3fr 2fr",
    padding: "17px 15px",
  },
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

export const StatusBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "50px",
  margin: "0 auto 48px",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "10px",
    margin: "0 auto 30px",
    width: "fit-content",
  },
}));

export const StatusText = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "9px",
  fontFamily: theme.fontFamily.POPPINS,
  fontWeight: theme.fontWeight.REGULAR,
  fontSize: theme.fontSizes.fontSize20,
  color: theme.colors.PRIMARY_DARK,
  [theme.breakpoints.down("md")]: {
    fontSize: "14px",
  },
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
    [theme.breakpoints.down("md")]: {
      marginBottom: "20px",
      padding: "20px",
      borderRadius: "10px",
    },
  }),

  ...($variant === "recommendations" && {
    backgroundColor: alpha(theme.colors.SECONDARY_GREEN, 0.1),
    padding: "30px 40px 40px",
    marginBottom: "50px",
    [theme.breakpoints.down("md")]: {
      padding: "20px",
      borderRadius: "10px",
      marginBottom: "20px",
    },
  }),

  ...($variant === "medicalAssessment" && {
    backgroundColor: alpha(theme.colors.SECONDARY_ORANGE, 0.15),
    padding: "46px 33px",
    marginBottom: "12px",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    [theme.breakpoints.down("md")]: {
      padding: "20px",
      borderRadius: "10px",
    },
  }),
}));

export const SectionTitle = styled(Typography, {
  shouldForwardProp: (prop) => prop !== "$variant",
})<{ $variant?: string }>(({ theme, $variant }) => ({
  fontFamily: theme.fontFamily.DM_SANS,
  fontWeight: theme.fontWeight.BOLD,
  fontSize: theme.fontSizes.fontSize22,
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

  [theme.breakpoints.down("md")]: {
    fontSize: "18px",
  },
}));

export const SectionSubtitle = styled(Typography)(({ theme }) => ({
  fontFamily: theme.fontFamily.POPPINS,
  fontWeight: theme.fontWeight.REGULAR,
  fontSize: theme.fontSizes.fontSize18,
  color: theme.colors.SECONDARY_GREEN,
  marginBottom: "10px",
  textDecoration: "underline",
  [theme.breakpoints.down("md")]: {
    fontSize: "14px",
  },
}));

export const RecommendationGrid = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  columnGap: "40px",
  rowGap: "20px",
  marginTop: "35px",
  [theme.breakpoints.down("md")]: {
    gridTemplateColumns: "1fr",
    rowGap: "15px",
    marginTop: "20px",
  },
}));

export const RecommendationText = styled(Typography)(({ theme }) => ({
  fontFamily: theme.fontFamily.POPPINS,
  fontWeight: theme.fontWeight.MEDIUM,
  fontSize: theme.fontSizes.fontSize18,
  color: theme.colors.SECONDARY_GREEN,
  marginBottom: "15px",
  [theme.breakpoints.down("md")]: {
    fontSize: "14px",
    marginBottom: "0",
  },
}));

export const RecommendationBox = styled(Box)(({ theme }) => ({
  borderRadius: "10px",
  backgroundColor: theme.colors.WHITE,
  display: "flex",
  alignItems: "flex-start",
  padding: "20px 30px",
  gap: "30px",
  [theme.breakpoints.down("md")]: {
    padding: "15px",
    gap: "15px",
  },
}));

export const CollapseContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "20px",
});

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
  color: theme.colors.PRIMARY_DARK,
  [theme.breakpoints.down("md")]: {
    fontSize: "16px",
  },
}));

export const CardContent = styled(Typography)(({ theme }) => ({
  fontFamily: theme.fontFamily.POPPINS,
  fontWeight: theme.fontWeight.REGULAR,
  fontSize: theme.fontSizes.fontSize20,
  color: theme.colors.PRIMARY_DARK,
  [theme.breakpoints.down("md")]: {
    fontSize: "14px",
  },
}));

export const AssessmentText = styled(Typography)(({ theme }) => ({
  fontFamily: theme.fontFamily.POPPINS,
  fontWeight: theme.fontWeight.MEDIUM,
  fontSize: theme.fontSizes.fontSize18,
  color: theme.colors.SECONDARY_ORANGE,
  [theme.breakpoints.down("md")]: {
    fontSize: "14px",
  },
}));

export const FooterActions = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginTop: "60px",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column-reverse",
    gap: "20px",
    marginTop: "30px",
  },
}));

export const ButtonGroup = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "30px",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    gap: "15px",
    width: "100%",
  },
}));

export const BackButton = styled(IconButton)(({ theme }) => ({
  minWidth: "auto",
  [theme.breakpoints.down("md")]: {
    alignSelf: "flex-start",
  },
}));

export const ToggleRecommendationsButton = styled(Button)(({ theme }) => ({
  padding: "5px 20px",
  marginBottom: "20px",
  borderRadius: "30px",
  border: `1px solid ${alpha(theme.colors.PRIMARY_DARK, 0.7)}`,
  color: alpha(theme.colors.PRIMARY_DARK, 0.7),
  fontFamily: theme.fontFamily.DM_SANS,
  fontSize: theme.fontSizes.fontSize14,
  backgroundColor: "transparent",
  textTransform: "none",
  boxShadow: "none",
}));

export const ActionButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== "$variant",
})<{ $variant?: string }>(({ theme, $variant }) => ({
  minWidth: "150px",
  padding: "12px 25px",
  border: "1px solid transparent",

  [theme.breakpoints.down("md")]: {
    width: "100%",
    borderRadius: "30px",
    padding: "5px 78px",
  },

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

  ...($variant === "print" && {
    backgroundColor: theme.colors.PRIMARY_DARK,
    color: theme.colors.WHITE,
    "&:hover": {
      backgroundColor: alpha(theme.colors.PRIMARY_DARK, 0.9),
    },
  }),
}));
