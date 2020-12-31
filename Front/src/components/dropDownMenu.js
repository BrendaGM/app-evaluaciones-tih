import DropDownItem from "./dropDownItem";
import {CSSTransition} from 'react-transition-group'
export default function DropDownMenu(props){
    return(
            <CSSTransition 
                in={props.activeMenu===props.nameMenu} 
                unmountOnExit
                timeout={500}
                classNames={'menu-primary'}
                onEnter={props.onEnter}
                >   
                <div className='menu'>
                    {props.subItems.map(e=>(
                        e.subMenu ? (
                            <DropDownItem leftIcon={e.leftIcon} rightIcon={e.rightIcon} goToMenu={e.nombre} setActiveMenu={props.setActiveMenu} hreff={e.hreff} key={e.nombre}>{e.nombre}</DropDownItem>
                        ):(
                            <DropDownItem leftIcon={e.leftIcon} rightIcon={e.rightIcon} goToMenu={''} setActiveMenu={props.setActiveMenu} hreff={e.hreff} key={e.nombre}>{e.nombre}</DropDownItem>
                        )
                    ))}
                </div>
            </CSSTransition>
    );
}