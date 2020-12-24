import DropDownItem from "./dropDownItem";
import {CSSTransition} from 'react-transition-group'
export default function DropDownMenuOptions(props){
    return(
            <CSSTransition 
                in={props.activeMenu===props.nameMenu} 
                unmountOnExit
                timeout={500}
                classNames={'menu-secondary'}
                >   
                <div className='menu'>
                    {props.subMenu && (
                        props.subMenu.map(e=>(
                            <DropDownItem leftIcon={''} rightIcon={''} setActiveMenu={props.setActiveMenu} goToMenu={'main'} key={e}>{e}</DropDownItem>
                        ))
                    )}
                </div>
            </CSSTransition>
    );
}