import { UiState } from './';
import { ICliente, ICar } from '../../interfaces';



type UiActionType = 
   | { type: '[UI] - ToggleMenu' } 
   | { type: '[UI] - getUser', payload: ICliente } 
   |  {type: '[UI] - insertCar', payload: ICar[] }
   |  {type: '[UI] - ListarCars', payload: ICar[] }


export const uiReducer = ( state: UiState, action: UiActionType ): UiState => {

   switch (action.type) {
      case '[UI] - ToggleMenu':
         return {
            ...state,
            isMenuOpen: !state.isMenuOpen
        }
      case  '[UI] - getUser':
         return {
            ...state,
            cliente: action.payload 
         }

      case '[UI] - insertCar':
      case '[UI] - ListarCars':   
         return {
            ...state,
            cars:  [...action.payload] 
         }





       default:
          return state;
   }

}