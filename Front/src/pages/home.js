import '../styles/home.css'
import '../index.css'
import React from 'react'
import {connect} from 'react-redux'
/*import ElementoNav from '../components/elementoNav'
import SPS from '../images/SPS.jpg'*/
import Navbar from '../components/navbar'
import TALENTO from '../images/talento.png'
import {menu} from '../Database/menu.js'
import {Image/*, InputGroup, FormControl*/} from 'react-bootstrap'
import { useState } from 'react'
//import ContenidoCentral from '../components/contenidoCentral'
const Home=(props)=>{
    let talento=`¡Hola ${props.userDetails.usuario}!`
    talento= talento.split("\n").join("");
    const [contenido,setContenido]=useState(
        <>
            <h1>{talento}</h1>
            <Image src={TALENTO} alt={'Talent in House'} rounded fluid/>
        </>
    );
    return(
        <div id="homes">
            <Navbar menu={menu} setContenido={setContenido}/>
            <div className='central'>
                <div className='central'>
                    {contenido}
                </div>
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