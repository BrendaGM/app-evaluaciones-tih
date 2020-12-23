export default function DropDownItem(props){
    return(
        <a href='#' className='text-button'>
            <i>{props.ln}</i>
            {props.children}
            <i>{props.rn}</i>
        </a>
    );
}