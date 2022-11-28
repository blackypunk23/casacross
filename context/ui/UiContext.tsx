

import { createContext } from 'react';
import { ICliente } from '../../interfaces';
import { ICar } from '../../interfaces';


interface ContextProps {
    isMenuOpen: boolean;
    cliente: ICliente;
    cars: ICar[]
    

    // Methods
    toggleSideMenu: () => void;
    crearCliente: (cliente: ICliente) => Promise<{
        hasError: boolean;
        message?: string;
    }>;
    getCliente: (id: string) => void;
    listarCars: (id: string) => void;
    crearCar: (car: ICar) => Promise<{
        hasError: boolean;
        message?: string;
    }>
}


export const UiContext = createContext({} as ContextProps );