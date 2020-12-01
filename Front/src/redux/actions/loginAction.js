import {LOGIN} from '../constan';
import {LOGIN_ERROR} from '../constan'
import Axios from 'axios'

/*export const LoginAction = (payload) => {
    return (dispatch)=>{
        //let result={...payload};
        //dispatch({ type: LOGIN, payload: result });
        //console.log(payload)
        /*Axios.get(`https://anypoint.mulesoft.com/mocking/api/v1/sources/exchange/assets/d4788f6c-c024-43ee-8253-b139c8997e9e/usuarios/1.0.0/m/usuarios?usuario=${payload.usuario}&contrasena=${payload.contrasena}`)
        Axios.get('http://jsonplaceholder.typicode.com/posts')
        .then(response=>{
            console.log(response.data)
            dispatch({ type: LOGIN, payload: response.data });
        })
        .catch(error=>{
            dispatch({type: LOGIN_ERROR, payload: 'No se encontro el usuario'})
        });
    }
}*/
const login =(payload,userData)=>{
    return{
        type: LOGIN,
        userDetails:{...payload},
        userData:userData,
        success: true
    }
}

export const LoginAction = (payload) => (dispatch, getState)=>{
    return new Promise((resolve, reject) =>{
        /*Axios.get(`https://anypoint.mulesoft.com/mocking/api/v1/sources/exchange/assets/d4788f6c-c024-43ee-8253-b139c8997e9e/`+
        `usuarios/1.0.0/m/usuarios?usuario=${payload.usuario}&contrasena=${payload.contrasena}`)*/
        let url=`https://anypoint.mulesoft.com/mocking/api/v1/sources/exchange/assets/d4788f6c-c024-43ee-8253-b139c8997e9e/`+
        `usuarios/1.0.0/m/usuarios?usuario=${payload.usuario}&contrasena=${payload.contrasena}`;
        fetch({
            method: 'get',
            url: url,
            headers: {'X-Requested-With': 'XMLHttpRequest'}

          })
        /*Axios.get('http://jsonplaceholder.typicode.com/posts')*/
        /*Axios.get('https://pokeapi.co/api/v2/berry/cheri')*/
        /*Axios.get('http://api-mesadecontrol.us-e2.cloudhub.io/api/gestionPagos/mesadecontrol/v1/reglas/dnovig/_aplicacion')*/
        .then(response=>{
            dispatch(login(payload,response));
            resolve(login(payload,response))
        })
        .catch((error)=>{
            dispatch({type: LOGIN_ERROR, payload: 'No se encontro el usuario'})
            resolve({error})
        });
});
}
