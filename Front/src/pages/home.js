import '../styles/home.css'
import React from 'react'
import {connect} from 'react-redux'
import ElementoNav from '../components/elementoNav'
import SPS from '../images/SPS.jpg'
import TALENTO from '../images/talento.png'
import {Nav, Image/*, InputGroup, FormControl*/} from 'react-bootstrap'
const Home=(props)=>{
    let talento=`¡Hola ${props.userDetails.usuario}!`
    console.log(talento);
    talento= talento.split("\n").join("");
    return(
        <div className="home">
            <div className='divNav'>
                <Nav className='miPruebaNav' defaultActiveKey='/home' >
                    <ElementoNav banderaImagen={true} image={SPS} className={'spsLogo'}/>
                    <ElementoNav lis={['Coach', 'Talento','Otra cosa','dos','tres','cuatro','cinco','seis','Otra cosa','dos','tres','cuatro','cinco','seis']} id={'1'} titulo='Inicio'/>
                    <ElementoNav lis={['Coach', 'Talento','Otra cosa','dos','tres','cuatro','cinco','seis','Otra cosa','dos','tres','cuatro','cinco','seis']} id={'2'} titulo='Inicio2'/>
                    <ElementoNav lis={['Coach', 'Talento','Otra cosa','dos','tres','cuatro','cinco','seis','Otra cosa','dos','tres','cuatro','cinco','seis']} id={'3'} titulo='Inicio3'/>
                    <ElementoNav lis={['Coach', 'Talento','Otra cosa','dos','tres','cuatro','cinco','seis','Otra cosa','dos','tres','cuatro','cinco','seis']} id={'4'} titulo='Inicio4'/>
                    <ElementoNav lis={['Coach', 'Talento','Otra cosa','dos','tres','cuatro','cinco','seis','Otra cosa','dos','tres','cuatro','cinco','seis']} id={'5'} titulo='Inicio5'/>
                    <ElementoNav lis={['Coach', 'Talento','Otra cosa','dos','tres','cuatro','cinco','seis','Otra cosa','dos','tres','cuatro','cinco','seis']} id={'6'} titulo='Inicio6'/>
                </Nav>
            </div>
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