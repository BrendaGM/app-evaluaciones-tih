import DropDownItemOption from "./dropDownItemOption";
import {CSSTransition} from 'react-transition-group'
import {FaAngleLeft} from 'react-icons/fa'
export default function DropDownMenuOptions(props){
    return(
            <CSSTransition 
                in={props.activeMenu===props.nameMenu} 
                unmountOnExit
                timeout={500}
                classNames={'menu-secondary'}
                onEnter={props.onEnter}
                >   
                <div className='menu'>
                    {props.subMenu && (
                        props.subMenu.map(e=>(
                            <DropDownItemOption 
                                leftIcon={<FaAngleLeft/>} 
                                setActiveMenu={props.setActiveMenu} 
                                goToMenu={'main'} 
                                hreff={e.hreff}
                                contenido={e.contenido}
                                setContenido={props.setContenido} 
                                key={e.nombre}
                            >{e.nombre}
                            </DropDownItemOption>
                        ))
                    )}
                </div>
            </CSSTransition>
    );
}