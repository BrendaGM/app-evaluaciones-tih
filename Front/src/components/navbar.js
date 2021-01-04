import NavItem from "./navItem";
import {Image} from 'react-bootstrap'
import SPS from '../images/SPS.jpg'
import DropDownMenu from './dropDownMenu'
import {useState} from 'react'
import DropDownMenuOptions from "./dropDownMenuOptions";
export default function Navbar(props){
    const [activeMenu, setActiveMenu] = useState('main');
    const [menuHeight, setmenuHeight]=useState(null);
    function calcHeight(el){
        const height=el.offsetHeight;
        //console.log( `Height: ${height}`);
        setmenuHeight(height+34);
    }
    return(
        <nav className='navbar'>
            <ul className='navbar-nav'>
                <li className='nav-item-image'>
                    <a href='https://www.spsolutions.com.mx/' target='_blank'  rel='noreferrer' className='text-button-image'>
                        <Image src={SPS} className='spsLogo'/>
                    </a>
                </li>
                {props.menu.map(e=>(
                    <NavItem 
                    encabezado={e.encabezado} 
                    icon={e.icon} 
                    hreff={e.hreff} 
                    setActiveMenu={setActiveMenu} 
                    key={e.encabezado} 
                    onEnter={calcHeight} 
                    setContenido={props.setContenido}
                    contenido={e.contenido}>
                        {e.subItems && (
                            <div className='dropdown' style={{height:menuHeight}}>
                                <DropDownMenu 
                                    subItems={e.subItems} 
                                    activeMenu={activeMenu}
                                    nameMenu={'main'}
                                    setActiveMenu={setActiveMenu}
                                    onEnter={calcHeight}
                                    setContenido={props.setContenido}
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
                                         onEnter={calcHeight}
                                         setContenido={props.setContenido}
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