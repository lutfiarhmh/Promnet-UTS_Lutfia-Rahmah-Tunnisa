import React from 'react';
import Aku from './aku.jpg';
import ber2 from './ber2.jpg';
import ber4 from './be4.jpg';
import koko from './WhatsApp Image 2023-11-21 at 15.30.17_74b5d728.jpg';
import 'animate.css';

const About = () => {
  return (
    <div className="about" id="about">
      <h1>About</h1>
      <p>
        Aku Lutfia Rahmah Tunnisa, ayahku bernama M.Sapri dan mamahku bernama Yeti Kusmawati
        <br />
        aku 2 bersaudara aku memiliki kaka perempuan yang bernama amalia kusuma afrianti menikah dengan laki-laki yang sekarang sering dipanggil koko.
        <br />
        Tempat lahirku di Bekasi tepatnya di Tambun, dari SD hingga SMA aku bersekolah di Bekasi, dan melanjutkan pendidikanku untuk berkuliah di Universitas Pendidikan Indonesia
      </p>
      <div className="images welcome animate__animated animate__zoomInRight">
        <img src={Aku} alt="Foto Aku" />
        <img src={ber2} alt="Foto Ber2" />
        <img src={ber4} alt="Foto Ber4" />
        <img src={koko} alt="Foto Koko" />
      </div>
      <table>
        <thead>
          <tr>
            <th>Pendidikan</th>
            <th>Hobi</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>SDN AREN JAYA 18</td>
            <td>Bernyanyi</td>
          </tr>
          <tr>
            <td>SMPN 32 KOTA BEKASI</td>
            <td>Menggambar</td>
          </tr>
          <tr>
            <td>SMAN 2 TAMBUN UTARA</td>
            <td>Memasak</td>
          </tr>
          <tr>
            <td>UNIVERSITAS PENDIDIKAN INDONESIA</td>
          </tr>
        </tbody>
      </table>
      <footer>
            <div>
                <small>copyright &copy; 2023 - Lutfia Rahmah Tunnisa</small>
            </div>
            </footer>
    </div>
  );
}

export default About;
