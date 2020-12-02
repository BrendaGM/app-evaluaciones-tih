import { LOGIN } from "../constan";
import { LOGIN_ERROR } from "../constan";
import axios from "axios";

const login = (payload, userData) => {
  return {
    type: LOGIN,
    userDetails: { ...payload },
    userData: userData,
    success: true,
  };
};

export const LoginAction = (payload) => (dispatch, getState) => {
  return new Promise((resolve, reject) => {
    axios({
      //url: `https://anypoint.mulesoft.com/mocking/api/v1/sources/exchange/assets/d4788f6c-c024-43ee-8253-b139c8997e9e/m/usuarios?usuario=${payload.usuario}&contrasena=${payload.contrasena}`,
      url: "http://api-enriquecimiento.us-e2.cloudhub.io/api/gestionPagos/enriquecimiento/v2/contratos?claveEntidad=MONEX&idContrato=123455",
      method: "GET",
      mode: "no-cors",
      headers: {
        "X-Requested-With": "XMLHttpRequest",
        "Content-Type": "application/json;charset=UTF-8",
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((response) => {
        console.log(response);
        dispatch(login(payload, response));
        resolve(login(payload, response));
      })
      .catch((error) => {
        dispatch({ type: LOGIN_ERROR, payload: "No se encontro el usuario." });
        resolve({ error });
        alert(error.response.data.mensaje);
      });
  });
};
