import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/login.css'
import {useState} from 'react'
import Logo from '../images/SPS.jpg'
import {Form, Button,Image} from 'react-bootstrap';
import {connect} from 'react-redux'
import dataUser from '../Database/user.json'
import {LoginAction} from '../redux/actions/loginAction'

const Login=(props)=>{
    const [validated, setValidated] = useState(false);
    const [user,setUser]=useState(dataUser);
    
    const login= (usuario,contrasena)=>{
        let payload ={usuario: usuario, contrasena: contrasena}
        props.loginAction(payload)
        .then(response =>{
            if(response.success){
                props.history.push('/tih/home');
            }
        })
    }

    const handleChange=(e)=>{
        setUser({
                ...user,
                [e.target.name]:e.target.value
            }
        )
    }
    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }else{
            event.preventDefault();
            user.usuario.length && user.contrasena.length && login(user.usuario,user.contrasena);
        }
    
        setValidated(true);
      };
    /*const handleClick=(event)=>{
        event.preventDefault();
        user.usuario.length && user.contrasena.length && login(user.usuario,user.contrasena);
    }*/
    return (
        <div className="login">
            <Image src={Logo} alt="SPS" className="spsLogo"/>
            <p className="opacos">Proporciona tus credenciales para iniciar sesión en la App de Evaluaciones</p>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Group md="6" controlId="validationCustom03">
                    <Form.Control type="email" placeholder="Usuario" name="usuario" onChange={handleChange} required />
                    <Form.Control.Feedback type="invalid">Ingresa un usuario valido.</Form.Control.Feedback>
                </Form.Group>
                <Form.Group md="3" controlId="validationCustom04">
                    <Form.Control type="password" placeholder="Contraseña" name="contrasena" onChange={handleChange} required />
                </Form.Group>
                <Button md="6" type="submit" variant="primary" className="botonCentral" size="md" /*onClick={handleClick}*/ >Iniciar Sesión</Button>
            </Form>
            <Button variant="link" className="opacos" onClick={()=>{alert('Contacta al administrador :\'(')}}>Olvidé mi contraseña</Button>
        </div>
    );
}

const mapStateToProps=(state)=>{
    console.log('state',state);
    return{
        userDetails: state.login.userDetails,
    }
}

const mapDispatchToProps ={
    loginAction:LoginAction
}

export default connect(mapStateToProps,mapDispatchToProps)(Login);