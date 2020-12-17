//import NavSubItem from "./navSubItem";
import {useState} from 'react'

export default function NavItem(props){
    const [open,setOpen]=useState(false);
    return(
        <li className='nav-item'>
            <a href='#' className='text-button' onClick={()=> setOpen(!open)}>
                {props.encabezado}
                <i>{props.icon}</i>
            </a>
            {open && props.children}
        </li>
    );
}