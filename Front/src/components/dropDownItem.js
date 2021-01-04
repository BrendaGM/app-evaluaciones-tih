export default function DropDownItem(props){
    return(
        <a href={props.hreff} className='menu-item' onClick={()=>{
                if(props.goToMenu){
                    props.setActiveMenu(props.goToMenu)
                }
                //console.log(`Contenido: ${props.contenido}`)
                if(props.contenido){
                    props.setContenido(props.contenido);
                }
            }}>
            {props.leftIcon && <i>{props.leftIcon}</i>}
            {props.children}
            {props.rightIcon && <i>{props.rightIcon}</i>}
        </a>
    );
}