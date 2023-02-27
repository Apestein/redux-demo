import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"

export interface pizzaState {
  toppings: string[]
  gluten: boolean
}

const initialState: pizzaState = {
  toppings: ["pepperoni"],
  gluten: true,
}

export const pizzaSlice = createSlice({
  name: "pizza",
  initialState,
  reducers: {
    toggleGluten: (state) => {
      state.gluten = !state.gluten
    },
    addTopping: (state, action: PayloadAction<string>) => {
      state.toppings = [...state.toppings, action.payload]
    },
  },
})

export const { toggleGluten, addTopping } = pizzaSlice.actions
export default pizzaSlice.reducer
