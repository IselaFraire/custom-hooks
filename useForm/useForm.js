import { useState } from "react";

export const useForm = (initialForm = {}) => {

    const [formState, setFormState] = useState({ initialForm });

    //Funcion con evento 
    const onInputChange = ({ target }) => {
        //Obtener las propiedades del target
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value
        });
    }

    //Funcion que limpia
    const onResetForm = () => {
        setFormState (initialForm);
    }

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm
    }
}

export default useForm