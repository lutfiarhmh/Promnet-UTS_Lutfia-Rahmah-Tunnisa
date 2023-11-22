import React from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import 'animate.css';

const Contact = () => {
  return (
    <div>
      <div className="contact" id="contact">
        <h1>Contact</h1>
        <div className="box">
          <div className="col-4">
            <i className="fa-solid fa-location-dot">
              <h4 style={{ fontSize: 'x-large' }}>Alamat</h4>
              <p style={{ fontSize: 'medium' }}>Jl. Villa Makmur 2 Blok B9/06 Tambun Selatan, Bekasi, Jawa Barat</p>
            </i>
          </div>
          <div className="col-4">
            <i className="fa-sharp fa-regular fa-envelope">
              <h4 style={{ fontSize: 'x-large' }}>Email</h4>
              <p style={{ fontSize: 'medium' }}>lutfiarahmah16123@gmail.com</p>
            </i>
          </div>
          <div className="col-4">
            <i className="fa-brands fa-whatsapp">
              <h4 style={{ fontSize: 'x-large' }}>Telp</h4>
              <p style={{ fontSize: 'medium' }}>(08) 12991410669</p>
            </i>
          </div>
        </div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3966.187906415017!2d107.05056434093969!3d-6.2389472936930455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sen!2sid!4v1696949925150!5m2!1sen!2sid" width="1100" height="400" style={{ border: '0' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <Form style={{ textAlign: 'center' }}>
        <Form action="/action_page_binnary.asp" method="post">
           <Form action="/action_page.php">
          <label htmlFor="NamaDepan">Nama Depan:</label><br />
          <input type="text" id="NamaDepan" name="NamaDepan" value="" /><br />
          <label htmlFor="Email">Email:</label><br />
          <input type="Email" id="Email" name="Email" value="" /><br /><br />
             <p style={{ fontSize: 'x-large', textAlign:'center',marginRight:'10%',color:'rgb(160, 121, 95)' }}>Pesan Untuk Saya</p>
            <textarea name="pesan" rows="10" cols="30"></textarea>
            <br /><br />
            <input type="submit" formEncType="multipart/form-data" value="Kirim" />
          </Form>
        </Form>
      </Form>
      <footer>
            <div>
                <small>copyright &copy; 2023 - Lutfia Rahmah Tunnisa</small>
            </div>
            </footer>
            
    </div>
  );
  
}

export default Contact;
