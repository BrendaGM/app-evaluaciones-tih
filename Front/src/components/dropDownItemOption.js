export default function DropDownItemOption(props){
    return(
        <label className='text-button-label'>
            {props.leftIcon && <a className='text-button-icon'  href='#' onClick={()=>props.goToMenu && props.setActiveMenu(props.goToMenu)}>{props.leftIcon}</a>}
            <a className='text-button-rig' href={props.hreff}><div>{props.children}</div></a>
        </label>
    );
}