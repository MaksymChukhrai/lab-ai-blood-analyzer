import { CircularProgress, MenuItem } from "@mui/material";
import { useTranslation } from "react-i18next";
import { STEPS } from "constants/steps";
import { GENDER_OPTIONS } from "constants/review";
import { AnalysLayout } from "components/AnalysLayout";
import { useReviewPage } from "hooks/useReviewPage";
import arrow from "locals/arrow.svg";
import deleteIcon from "locals/delete.svg";
import {
  ContentContainer,
  PageTitle,
  PageDescription,
  SectionTitle,
  PatientInfoBox,
  InputWrapper,
  InputLabel,
  StyledTextField,
  StyledSelect,
  TableContainer,
  TableHeader,
  TableHeaderCell,
  TableRow,
  TableInput,
  AddRowButton,
  CommentBox,
  CommentLabel,
  StyledTextarea,
  FooterActions,
  BackButton,
  GenerateButton,
} from "./styles";

export const ReviewPage = () => {
  const { t } = useTranslation();
  const {
    markers,
    birthDate,
    gender,
    comment,
    isLoading,
    isError,
    isGenerating,
    handleMarkerValueChange,
    handleAddMarker,
    handleRemoveMarker,
    handleCommentChange,
    handleBirthDateChange,
    handleGenderChange,
    handleBack,
    handleGenerateAnalysis,
  } = useReviewPage();

  if (isLoading) {
    return (
      <AnalysLayout currentStep={STEPS[2]}>
        <ContentContainer
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "400px",
          }}
        >
          <CircularProgress />
        </ContentContainer>
      </AnalysLayout>
    );
  }

  if (isError) {
    return (
      <AnalysLayout currentStep={STEPS[2]}>
        <ContentContainer>
          <PageTitle>Error loading blood markers</PageTitle>
          <PageDescription>
            Please try again or contact support if the problem persists.
          </PageDescription>
        </ContentContainer>
      </AnalysLayout>
    );
  }

  return (
    <AnalysLayout currentStep={STEPS[2]}>
      <ContentContainer>
        <PageTitle>{t("review.title")}</PageTitle>
        <PageDescription>{t("review.description")}</PageDescription>

        <SectionTitle>{t("review.patientInfo")}</SectionTitle>
        <PatientInfoBox>
          <InputWrapper>
            <InputLabel>{t("review.birthDate")}</InputLabel>
            <StyledTextField
              value={birthDate}
              onChange={(e) => handleBirthDateChange(e.target.value)}
              placeholder={t("review.birthDatePlaceholder")}
              fullWidth
            />
          </InputWrapper>
          <InputWrapper>
            <InputLabel>{t("review.gender")}</InputLabel>
            <StyledSelect
              value={gender}
              onChange={(e) => handleGenderChange(e.target.value as string)}
              fullWidth
            >
              {GENDER_OPTIONS.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </StyledSelect>
          </InputWrapper>
        </PatientInfoBox>

        <SectionTitle>{t("review.bloodMarkers")}</SectionTitle>
        <TableContainer>
          <TableHeader>
            <TableHeaderCell>{t("review.marker")}</TableHeaderCell>
            <TableHeaderCell>{t("review.value")}</TableHeaderCell>
            <TableHeaderCell>{t("review.normalRange")}</TableHeaderCell>
            <TableHeaderCell />
          </TableHeader>

          {markers.map((marker, index) => (
            <TableRow key={index} isNormal={marker.isNormal}>
              <TableInput
                value={marker.name}
                placeholder="Marker name"
                onChange={(e) => {
                  const updatedMarkers = [...markers];
                  updatedMarkers[index].name = e.target.value;
                }}
                fullWidth
              />
              <TableInput
                value={marker.value}
                placeholder="Value"
                onChange={(e) => handleMarkerValueChange(index, e.target.value)}
                fullWidth
              />
              <TableInput
                value={`${marker.normalRange} ${marker.unit}`}
                placeholder="Normal range"
                disabled
                fullWidth
              />
              <BackButton
                onClick={() => handleRemoveMarker(index)}
                size="small"
              >
                <img src={deleteIcon} alt="Delete" width={24} height={24} />
              </BackButton>
            </TableRow>
          ))}
        </TableContainer>

        <AddRowButton onClick={handleAddMarker}>
          {t("review.addRow")}
        </AddRowButton>

        <CommentBox>
          <CommentLabel>{t("review.commentLabel")}</CommentLabel>
          <StyledTextarea
            value={comment}
            onChange={(e) => handleCommentChange(e.target.value)}
            placeholder={t("review.commentPlaceholder")}
          />
        </CommentBox>

        <FooterActions>
          <BackButton onClick={handleBack} aria-label="Back">
            <img src={arrow} alt="Back" />
          </BackButton>
          <GenerateButton
            onClick={handleGenerateAnalysis}
            disabled={isGenerating || markers.length === 0}
            variant="contained"
          >
            {isGenerating ? t("common.loading") : t("review.generate")}
          </GenerateButton>
        </FooterActions>
      </ContentContainer>
    </AnalysLayout>
  );
};
