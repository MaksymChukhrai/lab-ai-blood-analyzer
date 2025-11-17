import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../index";
import type { AnalysisRequest, AnalysisResponse } from "../api/bloodMarkersApi";

interface AnalysisResultState {
  result: AnalysisResponse | null;
  generatedWith: AnalysisRequest | null;
}

const initialState: AnalysisResultState = {
  result: null,
  generatedWith: null,
};

export const analysisResultSlice = createSlice({
  name: "analysisResult",
  initialState,
  reducers: {
    setAnalysisResult: (
      state,
      action: PayloadAction<{
        response: AnalysisResponse;
        input: AnalysisRequest;
      }>,
    ) => {
      state.result = action.payload.response;
      state.generatedWith = action.payload.input;
    },
    clearAnalysisResult: (state) => {
      state.result = null;
      state.generatedWith = null;
    },
  },
});

export const { setAnalysisResult, clearAnalysisResult } =
  analysisResultSlice.actions;

export const selectAnalysisResult = (state: RootState) =>
  state.analysisResult.result;
export const selectGeneratedWith = (state: RootState) =>
  state.analysisResult.generatedWith;

export default analysisResultSlice.reducer;
