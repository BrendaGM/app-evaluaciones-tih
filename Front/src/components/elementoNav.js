import {Button, Nav, Image} from 'react-bootstrap'
import '../styles/home.css'
import {FaAngleDown} from 'react-icons/fa'
export default function ElementoNav(props){
    return(
        props.banderaImagen?(
            <>
            <Nav.Link className='pestanaCentrada'>
                <Image src={props.image} alt={props.tituloImagen} className={props.className} rounded fluid/>
            </Nav.Link>
        </>
        ):(
            <>
                <Button className='navPrueba' variant='Light'>
                    <label for={`btn-${props.id}`}>{props.titulo}<FaAngleDown/></label>
                </Button>
                <input type="checkbox" id={`btn-${props.id}`}></input>
                <ul>
                    {props.lis.map(e=> (
                        <Nav.Link className='pestana'>{e}</Nav.Link>
                    ))}
                </ul>
                
            </>
        )
    );
}