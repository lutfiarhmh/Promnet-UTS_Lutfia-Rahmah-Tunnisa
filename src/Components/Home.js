import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import lutImage from './lut.jpg'; 
import 'animate.css';


const Home = () => {
  return (
    <div className="Home">
      <Container className="bg">
        <Row>
          <Col>
            <div className="medsos" id="home">
              <div className="cont">
                <ul>
                  <li><a href="https://www.instagram.com/lutfia.rhmh/"><i className="fa-brands fa-instagram"></i></a></li>
                  <li><a href="https://twitter.com/rahmah_tunnisa"><i className="fa-brands fa-twitter"></i></a></li>
                  <li><a href="https://www.tiktok.com/@lutfia.rhmh"><i className="fa-brands fa-tiktok"></i></a></li> 
                  <li><a href="https://www.youtube.com/@lutfiarahmahtunnisa2747"><i className="fa-brands fa-youtube"></i></a></li> 
                </ul>
              </div>
            </div>
            <div className="fi welcome animate__animated animate__swing animate__repeat-6">
                <img src={lutImage}/>
           </div>
            <div className=" welcome animate__animated animate__fadeInLeft">
              <div className="cont">
                <p>
                  <span className='font-size-100'>&#128059;</span>
                  welcome to my website
                  <span className='font-size-100'>&#128059;</span>
                </p>
             
              </div>
            </div>
          </Col>
        </Row>
      </Container>
         <footer>
            <div>
                <small>copyright &copy; 2023 - Lutfia Rahmah Tunnisa</small>
            </div>
        </footer>
        
    </div>
  );
}

export default Home;
