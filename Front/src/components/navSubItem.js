import {useState} from 'react'
export default function NavSubItem(props){
    const [open,setOpen]=useState(false);
    return(
        <li className='nav-item'>
            <a href='#' className='text-button' onClick={()=> setOpen(!open)}>
                {props.nombre}
                <i>{props.icon}</i>
            </a>
        </li>
    );
}