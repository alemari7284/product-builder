// import { createMiddleware } from '@reduxjs/toolkit'
// import { useNavigate } from 'react-router-dom'

// const navigationMiddleware = (navigate) => (storeAPI) => (next) => (action) => {
//   // Passa l'azione al successivo middleware o al reducer
//   const result = next(action)

//   // Effettua il cambio di componente in base all'azione
//   if (action.type === 'sections/updateSection') {
//     const { path } = action.payload
//     navigate(path)
//   }

//   return result
// }

// // Funzione di configurazione del middleware
// const configureNavigationMiddleware = () => {
//   const navigate = useNavigate()
//   return createMiddleware({
//     preloadedState: null,
//     thunk: false,
//     middleware: (getDefaultMiddleware) =>
//       getDefaultMiddleware().concat(navigationMiddleware(navigate)),
//   })
// }

// export default configureNavigationMiddleware
