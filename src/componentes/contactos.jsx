import React from 'react'
import "../estilos/contactos.css"
import whatapp from "../imganes/whatapp.png";
import facebook from "../imganes/face.png";
import instagram from "../imganes/instagram.png";



function Contactos() {
    return (
        <div>
            <div className="contactos row ">
            <div className='interiorcontactos col row'>
                <div className="containerfotos col-12 row">
                    <h1>redes</h1>
                    <a href='https://wa.me/message/XA6YXL5CGTUAD1' className='col-3' target="_blank" rel="noreferrer noopener" ><img src={whatapp} class=" col-12" alt="..." /></a>
                    <a href='https://www.instagram.com/robotshowcordoba/' className='col-3' target="_blank" rel="noreferrer noopener" ><img src={instagram} class=" col-12" alt="..." /></a>
                    <a href='https://www.tiktok.com/@robotshowcordoba?_t=8WlzzyAZzkc&_r=1' className='col-3' target="_blank" rel="noreferrer noopener" ><img src="https://cdn-icons-png.flaticon.com/512/3046/3046126.png"class=" col-12" alt="..." /></a>
                    <a href='https://www.youtube.com/channel/UCDrc6NAaeJCSijE-WgkHe9Q' className='col-3' target="_blank" rel="noreferrer noopener" ><img src="https://icones.pro/wp-content/uploads/2021/02/youtube-logo-icone.png" class=" col-12" alt="..." /></a>
                </div>
                <div className='row col'>
                    <p href='https://wa.me/message/XA6YXL5CGTUAD1' className='textlink col-3' target="_blank" rel="noreferrer noopener" >whatapp</p>
                    <p href='https://www.instagram.com/robotshowcordoba/' className='textlink col-3' target="_blank" rel="noreferrer noopener" >@robotshowcordoba</p>
                    <p href='https://www.tiktok.com/@robotshowcordoba?_t=8WlzzyAZzkc&_r=1' className='textlink col-3' target="_blank" rel="noreferrer noopener" >@RobotShowCórdoba</p>
                    <p href='https://www.youtube.com/channel/UCDrc6NAaeJCSijE-WgkHe9Q' className='textlink col-3' target="_blank" rel="noreferrer noopener" >robot show cordoba</p>

                </div>
                <div>   </div>
                <hr />
                <h1 className='col-12'>horario atencion</h1>
                <p>Martes <br />
                    19:30 a 21:30 <br />
                    <div>---</div>
                    Jueves <br />
                    19:30 a 21:30 <br />
                
                    <div>---</div>
                    Viernes<br />
                    19:30 a 21:30 <br />
                    <div>---</div>
                    Sábados <br />
                    13:00 a 15:00 <br />
                    19:30 a 21:30 <br />
                </p>

                <hr />
                <ifRame src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3406.187747499677!2d-64.18950248424926!3d-31.381386301701326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9432985a713e5b8d%3A0xc8754336599766fd!2sBartolom%C3%A9%20Argensola%20954%2C%20C%C3%B3rdoba!5e0!3m2!1ses!2sar!4v1663711047072!5m2!1ses!2sar" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"/>
            
                <p>Bartolome Argensola 954 Alta Cordoba</p>
            </div>
            </div>          
        </div>
    )
}

export default Contactos