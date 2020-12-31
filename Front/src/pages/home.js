import '../styles/home.css'
import '../index.css'
import React from 'react'
import {connect} from 'react-redux'
/*import ElementoNav from '../components/elementoNav'
import SPS from '../images/SPS.jpg'*/
import Navbar from '../components/navbar'
import TALENTO from '../images/talento.png'
//import {menu} from '../Database/menu.json'
import {FaHome,/*FaAngleDown,*/FaAngleRight} from 'react-icons/fa'
import {Image/*, InputGroup, FormControl*/} from 'react-bootstrap'
const Home=(props)=>{
    let menu=[
            {
                "encabezado":"Inicio",
                "subItems":[
                    {
                        "nombre":"My profile",
                        "leftIcon":<FaHome/>,
                        "rightIcon":<FaAngleRight/>,
                        "subMenu":["My1","My2","My3","My4","My5"]
                    },
                    {
                        "nombre":"Settings",
                        "leftIcon":<FaHome/>,
                        "rightIcon":<FaAngleRight/>,
                        "subMenu":["S1","S2"]
                    },
                    {
                        "nombre":"friends",
                        "leftIcon":<FaHome/>,
                        "rightIcon":<FaAngleRight/>,
                        "subMenu":""
                    }
                ],
                "icon":<FaAngleRight/>
            },
            {
                "encabezado":"Inicio2",
                "subItems":[
                    {
                        "nombre":"uno",
                        "leftIcon":<FaHome/>,
                        "rightIcon":<FaAngleRight/>,
                        "subMenu":["Option1","Option2"]
                    },
                    {
                        "nombre":"dos",
                        "leftIcon":<FaHome/>,
                        "rightIcon":<FaAngleRight/>,
                        "subMenu":""
                    },
                    {
                        "nombre":"tres",
                        "leftIcon":<FaHome/>,
                        "rightIcon":<FaAngleRight/>,
                        "subMenu":""
                    }
                ],
                "icon":<FaAngleRight/>
            },
            {
                "encabezado":"Inicio3",
                "subItems":[
                    {
                        "nombre":"uno",
                        "leftIcon":<FaHome/>,
                        "rightIcon":<FaAngleRight/>,
                        "subMenu":""
                    },
                    {
                        "nombre":"dos",
                        "leftIcon":<FaHome/>,
                        "rightIcon":<FaAngleRight/>,
                        "subMenu":""
                    },
                    {
                        "nombre":"tres",
                        "leftIcon":"",
                        "rightIcon":"",
                        "subMenu":""
                    }
                ],
                "icon":""
            },
            {
                "encabezado":"Inicio4",
                "subItems":"",
                "icon":""
            }
        ];
    let talento=`¡Hola ${props.userDetails.usuario}!`
    talento= talento.split("\n").join("");
    return(
        <div id="homes">
            <Navbar menu={menu}/>
            <div className='central'>
                <h1>{talento}</h1>
                <Image src={TALENTO} alt={'Talent in House'} rounded fluid/>
            </div>
        </div>
    );
}

const mapStatoToProps =(state)=>{
    console.log('state', state);
    return {
        userDetails: state.login.userDetails,
    }
}

export default connect(mapStatoToProps,null)(Home);