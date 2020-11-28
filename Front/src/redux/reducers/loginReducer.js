import { LOGIN} from '../constan';

const initial_state = {
    userDetails: {
        usuario:"",
        contrasena:""
    }
}
const LoginReducer = (state = initial_state, action) => {
    switch (action.type) {
        case LOGIN:
            return { ...state, userDetails: { ...action.payload } };
    default:
        return state;
    }
}
export default LoginReducer;