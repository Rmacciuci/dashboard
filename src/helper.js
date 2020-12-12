import Langs from "./Lang/Langs";
import Swal from 'sweetalert2'

const Helper = {
    
}
export default Helper;

export const Lang = (name) => {
    const lang = PrivateFunc.get_lang();

    return Langs[lang][name] || name;
}


const PrivateFunc = {
    get_lang: () => localStorage.getItem('@lang') || 'es'
}