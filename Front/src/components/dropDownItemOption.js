export default function DropDownItemOption(props){
    return(
        <label className='text-button-label'>
            {props.leftIcon && <a className='text-button-icon'  href='#' onClick={()=>
                {
                    if(props.goToMenu){
                        props.setActiveMenu(props.goToMenu)
                    }
                }
            }>{props.leftIcon}</a>}
            <a className='text-button-rig' href={props.hreff} onClick={()=>{
                 if(props.contenido){
                    props.setContenido(props.contenido)
                }
            }}><div>{props.children}</div></a>
        </label>
    );
}