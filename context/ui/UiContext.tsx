

import { createContext } from 'react';
import { ICliente } from '../../interfaces';
import { ICar } from '../../interfaces';


interface ContextProps {
    isMenuOpen: boolean;
    

    // Methods
    toggleSideMenu: () => void;
    crearCliente: (cliente: ICliente) => Promise<{
        hasError: boolean;
        message?: string;
    }>;
    getCliente: (cliente: ICliente) => void;
    crearCar: (car: ICar) => Promise<{
        hasError: boolean;
        message?: string;
    }>
}


export const UiContext = createContext({} as ContextProps );