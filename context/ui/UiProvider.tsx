import { FC, useReducer } from 'react';
import { ICar, ICliente } from '../../interfaces';
import { UiContext, uiReducer } from './';
import axios from 'axios';
import { tesloApi } from '../../api';


export interface UiState {
    isMenuOpen: boolean;
    cliente : ICliente | undefined;
    car : ICar | undefined;
    
}

type reactChildren = {
    children: React.ReactNode
}


const UI_INITIAL_STATE: UiState = {
    isMenuOpen: false,
    cliente: undefined  ,
    car: undefined
    
}


export const UiProvider:FC<reactChildren> = ({ children}) => {

    const [state, dispatch] = useReducer( uiReducer , UI_INITIAL_STATE );

    const toggleSideMenu = () => {
        dispatch({ type: '[UI] - ToggleMenu' });
    }

    const getCliente =  async ( cliente : ICliente) => {
      

        dispatch({type: '[UI] - getUser' , payload: cliente})

    }


    const crearCliente = async(cliente: ICliente): Promise<{hasError: boolean; message?: string}> => {

        try {

            const {data} = await tesloApi.post('/cliente/agregar', {cliente})

            console.log(data)
            dispatch({type: '[UI] - getUser' , payload: data.cliente})
            return {
                hasError: false
            }
            
        } catch (error) {
            if ( axios.isAxiosError(error) ) {
                return {
                    hasError: true,
                    message: error.response?.data.message
                }
            }

            return {
                hasError: true,
                message: 'No se pudo crear el usuario - intente de nuevo'
            }
        }
    }

    const crearCar = async(car: ICar): Promise<{hasError: boolean; message?: string}> => {

        console.log(`desde context ${JSON.stringify(car)}`)
        try {

            const {data} = await tesloApi.post('/cliente/car', {car})

            console.log(data)
            dispatch({type: '[UI] - insertCar' , payload: data.car})
            return {
                hasError: false
            }
            
        } catch (error) {
            if ( axios.isAxiosError(error) ) {
                return {
                    hasError: true,
                    message: error.response?.data.message
                }
            }

            return {
                hasError: true,
                message: 'No se pudo crear el usuario - intente de nuevo'
            }
        }
    }

    


    return (
        <UiContext.Provider value={{
            ...state,

            // Methods
            toggleSideMenu,
            crearCliente,
            getCliente,
            crearCar,
        }}>
            { children }
        </UiContext.Provider>
    )
};