import {
  styled,
  Box,
  Typography,
  TextField,
  Select,
  IconButton,
  Button,
  alpha,
} from "@mui/material";

export const ContentContainer = styled(Box)(({ theme }) => ({
  maxWidth: "1284px",
  width: "100%",
  borderRadius: "20px",
  padding: "41px",
  marginBottom: "20px",
  backgroundColor: theme.palette.primary.contrastText,
  boxShadow: `0px 4px 4px 0px ${alpha(theme.palette.primary.main, 0.25)}`,
}));

export const PageTitle = styled(Typography)(({ theme }) => ({
  fontFamily: theme.fontFamily.DM_SANS,
  fontWeight: theme.fontWeight.BOLD,
  fontSize: theme.fontSizes.fontSize32,
  lineHeight: theme.lineHeights.lineHeight40,
  color: theme.colors.PRIMARY_DARK,
  textAlign: "center",
  marginBottom: "5px",
}));

export const PageDescription = styled(Typography)(({ theme }) => ({
  fontFamily: theme.fontFamily.POPPINS,
  fontWeight: theme.fontWeight.LIGHT,
  fontSize: theme.fontSizes.fontSize16,
  lineHeight: theme.lineHeights.lineHeight25,
  color: theme.colors.PRIMARY_DARK,
  textAlign: "center",
  marginBottom: "32px",
}));

export const SectionTitle = styled(Typography)(({ theme }) => ({
  fontFamily: theme.fontFamily.DM_SANS,
  fontWeight: theme.fontWeight.SEMIBOLD,
  fontSize: theme.fontSizes.fontSize18,
  lineHeight: theme.lineHeights.lineHeight25,
  color: theme.colors.PRIMARY_DARK,
  marginBottom: "16px",
  backgroundColor: alpha(theme.colors.PRIMARY_LIGHT, 0.1),
  padding: "12px 20px",
  borderRadius: "10px",
}));

export const PatientInfoBox = styled(Box)({
  display: "flex",
  gap: "32px",
  marginBottom: "32px",
});

export const InputWrapper = styled(Box)({
  flex: 1,
  display: "flex",
  flexDirection: "column",
});

export const InputLabel = styled(Typography)(({ theme }) => ({
  fontFamily: theme.fontFamily.DM_SANS,
  fontWeight: theme.fontWeight.REGULAR,
  fontSize: theme.fontSizes.fontSize16,
  lineHeight: theme.lineHeights.lineHeight35,
  color: theme.colors.PRIMARY_DARK,
  marginBottom: "4px",
}));

export const StyledTextField = styled(TextField)(({ theme }) => ({
  "& .MuiInputBase-root": {
    fontFamily: theme.fontFamily.DM_SANS,
    fontSize: theme.fontSizes.fontSize16,
    height: "45px",
  },
  "& .MuiOutlinedInput-root": {
    borderRadius: "15px",
    "& fieldset": {
      borderColor: alpha(theme.colors.PRIMARY_DARK, 0.5),
      borderWidth: "2px",
    },
    "&:hover fieldset": {
      borderColor: alpha(theme.colors.PRIMARY_DARK, 0.7),
      boxShadow: `0px 2px 4px ${alpha(theme.colors.SECONDARY_GRAY, 0.25)}`,
    },
    "&.Mui-focused fieldset": {
      borderColor: theme.colors.PRIMARY_DARK,
      borderWidth: "3px",
    },
  },
}));

export const StyledSelect = styled(Select)(({ theme }) => ({
  fontFamily: theme.fontFamily.DM_SANS,
  fontSize: theme.fontSizes.fontSize16,
  height: "45px",
  borderRadius: "15px",
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: alpha(theme.colors.PRIMARY_DARK, 0.5),
    borderWidth: "2px",
  },
  "&:hover .MuiOutlinedInput-notchedOutline": {
    borderColor: alpha(theme.colors.PRIMARY_DARK, 0.7),
    boxShadow: `0px 2px 4px ${alpha(theme.colors.SECONDARY_GRAY, 0.25)}`,
  },
  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: theme.colors.PRIMARY_DARK,
    borderWidth: "3px",
  },
}));

export const TableContainer = styled(Box)(({ theme }) => ({
  marginBottom: "24px",
  border: `1px solid ${alpha(theme.colors.PRIMARY_DARK, 0.2)}`,
  borderRadius: "15px",
  overflow: "hidden",
}));

export const TableHeader = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "2fr 1fr 2fr 48px",
  gap: "16px",
  padding: "16px 24px",
  backgroundColor: theme.colors.PRIMARY_DARK,
  color: theme.colors.WHITE,
}));

export const TableHeaderCell = styled(Typography)(({ theme }) => ({
  fontFamily: theme.fontFamily.DM_SANS,
  fontWeight: theme.fontWeight.SEMIBOLD,
  fontSize: theme.fontSizes.fontSize16,
  lineHeight: theme.lineHeights.lineHeight20,
  color: theme.colors.WHITE,
}));

export const TableRow = styled(Box, {
  shouldForwardProp: (prop) => prop !== "isNormal",
})<{ isNormal?: boolean }>(({ theme, isNormal = true }) => ({
  display: "grid",
  gridTemplateColumns: "2fr 1fr 2fr 48px",
  gap: "16px",
  padding: "16px 24px",
  alignItems: "center",
  borderBottom: `1px solid ${alpha(theme.colors.PRIMARY_DARK, 0.1)}`,
  backgroundColor: isNormal
    ? theme.colors.WHITE
    : alpha(theme.colors.SECONDARY_RED, 0.05),
  "&:last-child": {
    borderBottom: "none",
  },
}));

export const TableInput = styled(TextField)(({ theme }) => ({
  "& .MuiInputBase-root": {
    fontFamily: theme.fontFamily.DM_SANS,
    fontSize: theme.fontSizes.fontSize14,
    height: "40px",
  },
  "& .MuiOutlinedInput-root": {
    borderRadius: "8px",
    "& fieldset": {
      borderColor: alpha(theme.colors.PRIMARY_DARK, 0.3),
    },
    "&:hover fieldset": {
      borderColor: alpha(theme.colors.PRIMARY_DARK, 0.5),
    },
    "&.Mui-focused fieldset": {
      borderColor: theme.colors.PRIMARY_DARK,
      borderWidth: "2px",
    },
  },
}));

export const AddRowButton = styled(Button)(({ theme }) => ({
  alignSelf: "flex-start",
  marginBottom: "32px",
  color: theme.colors.PRIMARY_DARK,
  backgroundColor: "transparent",
  border: `2px dashed ${alpha(theme.colors.PRIMARY_DARK, 0.3)}`,
  padding: "10px 20px",
  "&:hover": {
    backgroundColor: alpha(theme.colors.PRIMARY_LIGHT, 0.1),
    border: `2px dashed ${theme.colors.PRIMARY_DARK}`,
  },
}));

export const CommentBox = styled(Box)({
  marginBottom: "32px",
});

export const CommentLabel = styled(Typography)(({ theme }) => ({
  fontFamily: theme.fontFamily.DM_SANS,
  fontWeight: theme.fontWeight.REGULAR,
  fontSize: theme.fontSizes.fontSize16,
  lineHeight: theme.lineHeights.lineHeight25,
  color: theme.colors.PRIMARY_DARK,
  marginBottom: "8px",
}));

export const StyledTextarea = styled("textarea")(({ theme }) => ({
  width: "100%",
  minHeight: "150px",
  padding: "15px",
  fontFamily: theme.fontFamily.DM_SANS,
  fontSize: theme.fontSizes.fontSize16,
  lineHeight: theme.lineHeights.lineHeight25,
  fontWeight: theme.fontWeight.REGULAR,
  color: theme.colors.PRIMARY_DARK,
  border: `2px solid ${alpha(theme.colors.PRIMARY_DARK, 0.5)}`,
  borderRadius: "15px",
  outline: "none",
  resize: "vertical",
  transition: "all 0.2s ease-in-out",
  boxSizing: "border-box",
  backgroundColor: theme.colors.WHITE,
  "&::placeholder": {
    color: alpha(theme.colors.SECONDARY_GRAY, 0.6),
    fontWeight: theme.fontWeight.LIGHT,
  },
  "&:hover": {
    boxShadow: `0px 4px 4px ${alpha(theme.colors.PRIMARY_DARK, 0.15)}`,
    borderColor: alpha(theme.colors.PRIMARY_DARK, 0.7),
  },
  "&:focus": {
    border: `3px solid ${theme.colors.PRIMARY_DARK}`,
    boxShadow: "none",
    padding: "14px",
  },
}));

export const FooterActions = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginTop: "40px",
});

export const BackButton = styled(IconButton)({
  transition: "all 0.3s ease-in-out",
});

export const GenerateButton = styled(Button)({
  minWidth: "240px",
  height: "44px",
});
