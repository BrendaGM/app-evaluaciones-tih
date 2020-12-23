import DropDownItem from "./dropDownItem";

export default function DropDownMenu(props){
    return(
        <div className='dropdown'>
            <DropDownItem>My profile</DropDownItem>
            <DropDownItem ln={props.icon} rn={props.icon}> 
            Settings
            </DropDownItem>
        </div>
    );
}