import { createSlice } from '@reduxjs/toolkit'

const SectionSlice = createSlice({
  initialState: {
    sections: [
      {
        id: 1,
        name: '',
        textButton: 'Colors',
      },
      {
        id: 2,
        name: 'Colors',
        textButton: 'Accessories',
      },
      {
        id: 3,
        name: 'Accessories',
        textButton: 'Summary',
      },
      {
        id: 4,
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
