export default function DropDownItem(props){
    return(
        <a href='#' className='text-button' onClick={()=>props.goToMenu && props.setActiveMenu(props.goToMenu)}>
            {props.leftIcon && <i>{props.leftIcon}</i>}
            {props.children}
            {props.rightIcon && <i>{props.rightIcon}</i>}
        </a>
    );
}