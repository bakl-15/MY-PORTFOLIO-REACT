import React from "react";


const ProfilePage = ({handleContactBtn}) => {

  return (
    <div className="book-page page-left">
       <div className="profile-page">
         <img src="img/photo.jpg"  alt="" />
         <h1>BAAKEL Sofiane</h1>
         <h3>Développeur Web </h3>
         <div className="social-media">
            <a href="#"><i className='bx bxl-facebook' ></i></a>
            <a href="#"><i className='bx bxl-linkedin-square'></i> </a>
            <a href="#"><i className='bx bxl-twitter' ></i> </a>
            <a href="#"><i className='bx bxl-twitter' ></i> </a>
         </div>
         <p>Hi, Je suis BAAKEL Sofiane, Développeur web passionné avec [X années] d’expérience dans
             la conception, le développement et la maintenance de sites et applications web. Spécialisé dans [langages/frameworks spécifiques, ex. Symfony, React.js], avec une expertise en [front-end/back-end].
             Motivé par les défis techniques et l’amélioration continue.</p>
         <div className="btn-box">
            <button className="btn">Télecharger CV</button>
            <button
            onClick={handleContactBtn}
            className="btn contact-me">Contactez-moi</button>
         </div>
        </div>
    </div>
  );
};
export default ProfilePage ;