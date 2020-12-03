import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/login.css'
import {useState} from 'react'
import Logo from '../images/SPS.jpg'
import {Form, Button,Image,InputGroup,Modal} from 'react-bootstrap';
import {connect} from 'react-redux'
import dataUser from '../Database/user.json'
import {LoginAction} from '../redux/actions/loginAction'
import api from '../api';

const Login=(props)=>{
    let sps='@spsolutions.com.mx';
    const [validated, setValidated] = useState(false);
    const [validated2, setValidated2] = useState(false);
    const [user,setUser]=useState(dataUser);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const login= (usuario,contrasena)=>{
        let payload ={usuario: usuario, contrasena: contrasena}
        props.loginAction(payload)
        .then(response =>{
            console.log(response);
            if(response.success){
                props.history.push('/home');
            }
        })
    }

    //const data = api.badges.list();
/*
    const response =  fetch(
        "http://localhost:18081/api/usuarios?usuario=bg&contrasena=da", {
            method: "GET",
            redirect: "follow",
            mode: "no-cors",
            headers: {
              "Content-Type": "application/json",
            }
        }
    );
    
    console.log("RESPONSE: " + response);*/

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
            let aux=user.usuario+sps
            setUser(u=>{return {...user,usuario:aux}})
            user.usuario.length && user.contrasena.length && login(aux,user.contrasena);
            event.preventDefault();
        }
    
        setValidated(true);
      };
      const handleSubmit2 = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }else{
            event.preventDefault();
            handleClose();
        }
    
        setValidated2(true);
      };

    return (
        <div className="login">
            <Image src={Logo} alt="SPS" className="spsLogo"/>
            <p className="opacos">Proporciona tus credenciales para iniciar sesión en la App de Evaluaciones</p>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Group md="6" controlId="validationCustom03">
                    <InputGroup>
                        <Form.Control
                        type="text"
                        placeholder="Usuario"
                        name="usuario"
                        onChange={handleChange}
                        required
                        />
                        <Form.Control.Feedback type="invalid">Ingresa un usuario valido.</Form.Control.Feedback>
                        <InputGroup.Append>
                            <InputGroup.Text id="inputGroupPrepend">@spsolutions.com.mx</InputGroup.Text>
                        </InputGroup.Append>
                    </InputGroup>    
                </Form.Group>
                <Form.Group md="3" controlId="validationCustom04">
                    <Form.Control type="password" placeholder="Contraseña" name="contrasena" onChange={handleChange} required />
                </Form.Group>
                <Button md="6" type="submit" variant="primary" className="botonCentral" size="md" /*onClick={handleClick}*/ >Iniciar Sesión</Button>
            </Form>
            <Button variant="link" className="opacos" onClick={handleShow}>Olvidé mi contraseña</Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Talento In House</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form noValidate validated={validated2} onSubmit={handleSubmit2}>
                        <Form.Group>
                            <Form.Label>Escribe tu correo para recstablcer tu contraseña</Form.Label>
                            <Form.Control type="email" placeholder="example@spsolutions.com.mx" required/>
                        </Form.Group>
                        <Button type="submit" variant="primary" className="botonPrimary">Enviar</Button>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="danger" onClick={handleClose}>Cerrar</Button>
                
                </Modal.Footer>
            </Modal>
        </div>
    );
}

const mapStateToProps=(state)=>{
    return{
        userDetails: state.login.userDetails,
    }
}

const mapDispatchToProps ={
    loginAction:LoginAction
}

export default connect(mapStateToProps,mapDispatchToProps)(Login);