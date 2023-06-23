import images from './imageExporter'
import { createSlice } from '@reduxjs/toolkit'

const CarSlice = createSlice({
  name: 'car',
  initialState: {
    pool: [
      {
        id: 1,
        name: 'BMW i3',
        colors: [
          {
            colorId: 1,
            colorName: 'white',
            colorImage: images.white,
            colorHex: '#fff',
          },
          {
            colorId: 2,
            colorName: 'mineralGrey',
            colorImage: images.mineralGrey,
            colorHex: '#303539',
          },
          {
            colorId: 3,
            colorName: 'orangeMetallic',
            colorImage: images.orangeMetallic,
            colorHex: '#cf5a16',
          },
        ],
        initialPrice: 42400,
      },
      {
        id: 2,
        name: 'BMW i8',
        colors: [
          {
            colorId: 1,
            colorName: 'greyMetallic',
            colorImage: images.greyMetallic,
            colorHex: '#303539',
          },
          {
            colorId: 2,
            colorName: 'whitePerlMetallic',
            colorImage: images.whitePerlMetallic,
            colorHex: '#d1d1d1',
          },
        ],
        initialPrice: 140700,
      },
    ],
    choice: {
      id: -1,
      name: '',
      color: '',
      accessories: [],
      price: 0,
      preview: '',
      previewBig: '',
    },
  },
  reducers: {
    updateChoice: (state, action) => {
      const { previousState } = action.payload
      console.log('previousState', previousState)
      if (previousState.id !== action.payload.id) {
        return {
          ...state,
          choice: {
            ...state.choice,
            ...action.payload,
          },
        }
      } else {
        return {
          ...state,
          choice: {},
        }
      }

      if (state.nextSection == 'Accessories') {
        return {
          ...state,
          choice: {
            ...state.choice,
            ...action.payload,
          },
        }
      }
    },
  },
})

export const { updateChoice } = CarSlice.actions

export default CarSlice.reducer
