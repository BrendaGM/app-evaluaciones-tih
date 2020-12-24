import NavItem from "./navItem";
import {Image} from 'react-bootstrap'
import SPS from '../images/SPS.jpg'
import DropDownMenu from './dropDownMenu'
import {useState} from 'react'
import DropDownMenuOptions from "./dropDownMenuOptions";
export default function Navbar(props){
    const [activeMenu, setActiveMenu] = useState('main');
    return(
        <nav className='navbar'>
            <ul className='navbar-nav'>
                <li className='nav-item-image'>
                    <a href='#' className='text-button-image'>
                        <Image src={SPS} className='spsLogo'/>
                    </a>
                </li>
                {props.menu.map(e=>(
                    <NavItem encabezado={e.encabezado} icon={e.icon} setActiveMenu={setActiveMenu} key={e.encabezado}>
                        {e.subItems && (
                            <div className='dropdown'>
                                <DropDownMenu 
                                    subItems={e.subItems} 
                                    activeMenu={activeMenu}
                                    nameMenu={'main'}
                                    setActiveMenu={setActiveMenu}
                                />
                                {e.subItems.map(sI=>(
                                    sI.subMenu && (
                                        <DropDownMenuOptions 
                                         subMenu={sI.subMenu} 
                                         activeMenu={activeMenu}
                                         nameMenu={sI.nombre}
                                         goToMenu={'main'}
                                         key={sI.nombre}
                                         setActiveMenu={setActiveMenu}
                                         /> 
                                    )
                                ))}
                            </div>
                        )}
                    </NavItem>
                ))}
            </ul>
        </nav>
    );
}