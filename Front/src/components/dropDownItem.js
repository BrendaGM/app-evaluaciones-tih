export default function DropDownItem(props){
    return(
        <a href='#' className='menus-item'>
            <span className='text-button'>{props.lefticon}</span>
            {props.children}
            <span className='text-button'>{props.righticon}</span>
        </a>
    );
}