import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/login.css'
import {useState} from 'react'
import Logo from '../images/SPS.jpg'
import {Form, Button,Image} from 'react-bootstrap';
import {Link} from 'wouter'
import dataUser from '../Database/user.json'
export default function Login(props){
    const [validated, setValidated] = useState(false);
    const [user,setUser]=useState(dataUser);
    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
        }else{
            event.preventDefault();
            if(user.userl===dataUser.user && user.password===dataUser.password){
                props.handleLogin();
            }
            //event.stopPropagation();
        }

        setValidated(true);
    };
    const handleChange=(e)=>{
        setUser({
            [e.target.name]:e.target.value
        }
        )
    }
    
    return (
        <div className="login">
            <Image src={Logo} alt="SPS" className="spsLogo"/>
            <p className="opacos">Proporciona tus credenciales para iniciar sesión en la App de Evaluaciones</p>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Group md="6" controlId="validationCustom03">
                    <Form.Control type="email" placeholder="Usuario" name="userl" onChange={handleChange} required />
                    <Form.Control.Feedback type="invalid">Ingresa un usuario valido.</Form.Control.Feedback>
                </Form.Group>
                <Form.Group md="3" controlId="validationCustom04">
                    <Form.Control type="password" placeholder="Contraseña" name="password" onChange={handleChange} required />
                </Form.Group>
                <Link to="/tih/home"><Button md="6" type="submit" variant="secondary" size="md" active block>Iniciar Sesión</Button></Link>
            </Form>
            <Button variant="link" className="opacos" onClick={()=>{alert('Contacta al administrador :\'(')}}>Olvidé mi contraseña</Button>
        </div>
    );
}