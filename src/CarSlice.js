import React from 'react'
import p1col1 from './assets/prod01/product01_col01.jpg'
import p1col2 from './assets/prod01/product01_col02.jpg'
import p1col3 from './assets/prod01/product01_col03.jpg'
import p2col1 from './assets/prod02/product02_col01.jpg'
import p2col2 from './assets/prod02/product02_col02.jpg'
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
            colorImage: p1col1,
          },
          {
            colorId: 2,
            colorName: 'mineralGrey',
            colorImage: p1col2,
          },
          {
            colorId: 3,
            colorName: 'orangeMetallic',
            colorImage: p1col3,
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
            colorImage: p2col1,
          },
          {
            colorId: 2,
            colorName: 'whitePerlMetallic',
            colorImage: p2col2,
          },
        ],
        initialPrice: 140700,
      },
    ],
    choice: {
      name: '',
      color: '',
      accessories: [],
    },
    error: null,
    isLoading: false,
  },
  reducers: {
    updateChoice: (state, action) => {
      console.log(action.payload)
      state.choice = {
        ...state.choice,
        ...action.payload,
      }
    },
  },
})

export const { updateChoice } = CarSlice.actions

export default CarSlice.reducer
