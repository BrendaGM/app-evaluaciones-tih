import NavItem from "./navItem";
import {Image} from 'react-bootstrap'
import SPS from '../images/SPS.jpg'
import DropDownMenu from './dropDownMenu'
export default function Navbar(props){
    return(
        <nav className='navbar'>
            <ul className='navbar-nav'>
                <li className='nav-item-image'>
                    <a href='#' className='text-button-image'>
                        <Image src={SPS} className='spsLogo'/>
                    </a>
                </li>
                {props.menu.map(e=>(
                    <NavItem encabezado={e.encabezado} icon={e.icon} key={e.encabezado}>
                        <DropDownMenu icon={e.icon}></DropDownMenu>
                    </NavItem>
                ))}
            </ul>
        </nav>
    );
}