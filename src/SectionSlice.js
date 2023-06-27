import { createSlice } from '@reduxjs/toolkit'

const SectionSlice = createSlice({
  initialState: {
    sections: [
      {
        id: 0,
        name: '',
        textButton: 'Colors',
      },
      {
        id: 1,
        name: 'Colors',
        textButton: 'Accessories',
      },
      {
        id: 2,
        name: 'Accessories',
        textButton: 'Summary',
      },
      {
        id: 3,
        name: 'Summary',
        textButton: 'Buy now',
      },
    ],
    currentSection: 0,
  },
  name: 'sections',
  reducers: {
    updateSection: (state, action) => {
      return {
        ...state,
        currentSection: action.payload.currentSection,
      }
    },
  },
})

export const { updateSection } = SectionSlice.actions

export default SectionSlice.reducer
