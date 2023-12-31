import images from './imageExporter'
import { createSlice } from '@reduxjs/toolkit'

const initialChoice = {
  id: -1,
  name: '',
  color: '',
  accessories: [],
  price: 0,
  preview: '',
  previewBig: '',
}

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
            colorPrice: 0,
          },
          {
            colorId: 2,
            colorName: 'mineralGrey',
            colorImage: images.mineralGrey,
            colorHex: '#303539',
            colorPrice: 550,
          },
          {
            colorId: 3,
            colorName: 'orangeMetallic',
            colorImage: images.orangeMetallic,
            colorHex: '#cf5a16',
            colorPrice: 550,
          },
        ],
        accessories: [
          {
            title: 'BMW Charging Station',
            price: 1080,
          },
          {
            title: 'BMW Maintenance Program Upgrade',
            price: 1895,
          },
          {
            title: '1 Year BMW Maintenance Program Upgrade',
            price: 975,
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
            colorPrice: 0,
          },
          {
            colorId: 2,
            colorName: 'whitePerlMetallic',
            colorImage: images.whitePerlMetallic,
            colorHex: '#d1d1d1',
            colorPrice: 1800,
          },
        ],
        accessories: [
          {
            title: 'BMW Laserlight',
            price: 6300,
          },
          {
            title: 'BMW Charging Station',
            price: 1080,
          },
          {
            title: 'BMW Maintenance Program Upgrade',
            price: 1895,
          },
          {
            title: '1 Year BMW Maintenance Program Upgrade',
            price: 975,
          },
        ],
        initialPrice: 140700,
      },
    ],
    choice: initialChoice,
    error: false,
  },
  reducers: {
    updateChoice: (state, action) => {
      const { previousState } = action.payload
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
          choice: initialChoice,
        }
      }
    },
    updateAccessories: (state, action) => {
      const { optional, price } = action.payload
      const myAccessories = [...state.choice.accessories]

      const elementIndex = myAccessories.findIndex(
        (obj) => obj.optional === optional,
      )

      if (elementIndex !== -1) {
        // se lo trovo, allora lo rimuovo
        myAccessories.splice(elementIndex, 1)
        return {
          ...state,
          choice: {
            ...state.choice,
            price: state.choice.price - price,
            accessories: myAccessories,
          },
        }
      } else {
        // altrimenti lo inserisco
        myAccessories.push({ optional, price })
        return {
          ...state,
          choice: {
            ...state.choice,
            price: state.choice.price + price,
            accessories: myAccessories,
          },
        }
      }
    },
    launchError: (state, action) => {
      return {
        ...state,
        error: action.payload.error,
      }
    },
  },
})

export const { updateChoice, updateAccessories, launchError } = CarSlice.actions

export default CarSlice.reducer
