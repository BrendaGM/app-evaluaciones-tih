import DropdownItem from "react-bootstrap/esm/DropdownItem";

export default function DropDownMenu(props){
    return(
        <div className='dropdown'>
            <DropdownItem>My profile</DropdownItem>
            <DropdownItem 
                lefticon={props.icon}
                righticon={props.icon}
                > 
            Settings
            </DropdownItem>
        </div>
    );
}