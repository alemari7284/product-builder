import { createSlice } from '@reduxjs/toolkit'

const SectionSlice = createSlice({
  initialState: {
    sections: [
      {
        id: 0,
        name: '',
        textButton: 'Colors',
        secundaryTitle: 'Select Model',
      },
      {
        id: 1,
        name: 'Colors',
        textButton: 'Accessories',
        secundaryTitle: 'Select Color',
      },
      {
        id: 2,
        name: 'Accessories',
        textButton: 'Summary',
        secundaryTitle: 'Accessories',
      },
      {
        id: 3,
        name: 'Summary',
        textButton: 'Buy now',
        secundaryTitle: 'Summary',
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
