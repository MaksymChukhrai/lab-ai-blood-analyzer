import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  useGetBloodMarkersQuery,
  useGenerateAnalysisMutation,
} from "store/api/bloodMarkersApi";
import { useAppDispatch, useAppSelector } from "store/hooks";
import {
  setBloodMarkersData,
  updateMarkerValue,
  addMarker,
  removeMarker,
  setComment,
  updateAge,
  updateGender,
  selectBloodMarkers,
  selectAge,
  selectGender,
  selectComment,
} from "store/slices/bloodMarkersSlice";
import { selectSelectedOptions } from "store/slices/optionSlice";
import { STEP_PATHS } from "constants/steps";
import type { BloodMarker } from "store/api/bloodMarkersApi";

export const useReviewPage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { data, isLoading, isError } = useGetBloodMarkersQuery();
  const [generateAnalysis, { isLoading: isGenerating }] =
    useGenerateAnalysisMutation();

  const markers = useAppSelector(selectBloodMarkers);
  const age = useAppSelector(selectAge);
  const gender = useAppSelector(selectGender);
  const comment = useAppSelector(selectComment);
  const selectedOptions = useAppSelector(selectSelectedOptions);

  const [birthDate, setBirthDate] = useState<string>("");

  useEffect(() => {
    if (data) {
      dispatch(setBloodMarkersData(data));

      const calculatedBirthYear = new Date().getFullYear() - data.age;
      setBirthDate(`01-01-${calculatedBirthYear}`);
    }
  }, [data, dispatch]);

  const handleMarkerValueChange = (index: number, value: string): void => {
    dispatch(updateMarkerValue({ index, value }));
  };

  const handleAddMarker = (): void => {
    const newMarker: BloodMarker = {
      name: "",
      value: "",
      unit: "",
      normalRange: "",
      isNormal: true,
    };
    dispatch(addMarker(newMarker));
  };

  const handleRemoveMarker = (index: number): void => {
    dispatch(removeMarker(index));
  };

  const handleCommentChange = (value: string): void => {
    dispatch(setComment(value));
  };

  const handleBirthDateChange = (value: string): void => {
    setBirthDate(value);

    const [year] = value.split("-");
    if (year && year.length === 4) {
      const calculatedAge = new Date().getFullYear() - parseInt(year, 10);
      dispatch(updateAge(calculatedAge));
    }
  };

  const handleGenderChange = (value: string): void => {
    dispatch(updateGender(value));
  };

  const handleBack = (): void => {
    navigate(STEP_PATHS.options);
  };

  const handleGenerateAnalysis = async (): Promise<void> => {
    try {
      const analysisData = {
        age,
        gender,
        markers: markers.map((marker) => ({
          name: marker.name,
          value: marker.value,
          unit: marker.unit,
        })),
        comment,
        selectedOptions,
      };

      await generateAnalysis(analysisData).unwrap();

      navigate(STEP_PATHS.result);
    } catch (error) {
      console.error("Failed to generate analysis:", error);
    }
  };

  return {
    markers,
    age,
    gender,
    birthDate,
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
  };
};
