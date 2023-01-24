import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface SettingsState {
	mode: "dark" | "light";
}

const initialState: SettingsState = {
	mode: "dark",
};

export const settingsSlice = createSlice({
	name: "settings",
	initialState,
	reducers: {
		toggleMode: (state) => {
			const nextMode = state.mode === "dark" ? "light" : "dark";
			state.mode = nextMode;
		},
	},
});
export const { toggleMode } = settingsSlice.actions;

export default settingsSlice.reducer;
