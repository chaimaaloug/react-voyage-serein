
import { Icon } from 'semantic-ui-react';
import Button from '../components/Button/Button';
import Footer from "../components/Footer/Footer";
import { useEffect, useState } from 'react';


const About = () => {

    const [hasScrolled, setHasScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
          const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
          const shouldScroll = scrollTop > 0;
    
          if (shouldScroll !== hasScrolled) {
            setHasScrolled(shouldScroll);
          }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
    }, [hasScrolled]);

    useEffect(() => {
        const handleScroll = () => {
          const galleryImages = document.querySelectorAll('.l-photo');
    
          galleryImages.forEach((image) => {
            const imageTop = image.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
    
            const opacity = Math.max(0, (windowHeight - imageTop) / windowHeight);
            image.style.opacity = opacity;

          });
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

    
    return (
        <>
            {/*-------------- Hero Section ----------------*/}
            <div className={`l-hero__container ${hasScrolled ? 'scrolled' : ''}`}>
                <div className="l-hero__content">
                    <h2 className="l-hero__title">Voyage Serein</h2>
                    <p className="l-hero__subtitle">Qui sommes-nous ?</p>
                    <div className="l-hero__descrip">
                        <p>Bienvenue chez Voyage Serein, votre partenaire privilégié pour des voyages extraordinaires et sans soucis. En tant qu'agence de voyage en ligne, notre mission est de vous offrir une expérience de vacances inégalée, en vous épargnant les tracas liés à la planification et à l'organisation.</p>
                        <p>Chez Voyage Serein, nous comprenons que le processus de préparation d'un voyage peut être stressant et fastidieux. C'est pourquoi nous avons créé une plateforme simple et conviviale, où vous pouvez trouver tout ce dont vous avez besoin pour concevoir votre escapade de rêve, sans vous prendre la tête.</p>
                    </div>
                    <Button text="Cap sur mon prochain voyage"/>
                </div>
            </div>
        
            {/*-------------- Gallery Section ----------------*/}
            <div className="l-gallery__container">
                <div className="l-photo__gallery">
                    <div className="l-gallery__column">
                        <div className="l-photo">
                            <img src={require('../assets/images/1.jpeg')} alt="" />
                        </div>
                        <div className="l-photo">
                            <img src={require('../assets/images/5.jpeg')} alt="" />
                        </div>
                    </div>
                    <div className="l-gallery__column">
                        <div className="l-photo">
                            <img src={require('../assets/images/2.jpeg')} alt="" />
                        </div>
                        <div className="l-photo">
                            <img src={require('../assets/images/6.jpeg')} alt="" />
                        </div>
                        <div className="l-photo">
                            <img src={require('../assets/images/9.jpeg')} alt="" />
                        </div>
                    </div>
                    <div className="l-gallery__column">
                        <div className="l-photo">
                            <img src={require('../assets/images/3.jpeg')} alt="" />
                        </div>
                        <div className="l-photo">
                            <img src={require('../assets/images/7.jpeg')} alt="" />
                        </div>
                        <div className="l-photo">
                            <img src={require('../assets/images/10.jpeg')} alt="" />
                        </div>
                    </div>
                    <div className="l-gallery__column">
                        <div className="l-photo">
                            <img src={require('../assets/images/4.jpeg')} alt="" />
                        </div>
                        <div className="l-photo">
                            <img src={require('../assets/images/8.jpeg')} alt="" />
                        </div>
                    </div>
                </div>

                <div className="l-about__container">
                    <h2 className="l-about__title">Des vacances inoubliables sans effort, grâce à Voyage Serein</h2>
                    <p>Notre équipe dévouée d'experts en voyages est là pour vous accompagner à chaque étape de votre parcours. Que vous cherchiez à explorer des destinations exotiques, à vous détendre sur des plages paradisiaques ou à vous immerger dans des cultures fascinantes, nous sommes là pour donner vie à vos aspirations.</p> <br />
                    <p className="l-about__link">Découvrir la destination faite pour moi</p> <br />
                    <p>Nous vous offrons une vaste sélection de destinations et d'expériences uniques, soigneusement sélectionnées pour vous garantir des moments exceptionnels, même si vous ne saviez pas exactement où partir au départ. Notre collection de supports d'inspiration, tels que des articles, des photos et des avis de voyageurs, vous aidera à explorer de nouvelles idées et à affiner vos choix.</p> <br />
                    <Button text="M'inspirer pour mon prochain voyage"/>
                </div>
            </div>

            {/*-------------- Testimonials Section ----------------*/}
            <div className="l-testimonials__container">
                <div className="l-testimonials__left-col">
                    <h3 className="l-testimonials__left-col-title">Avis client :</h3> 
                    <div className="l-testimonials__left-col-review">
                        <img src={require('../assets/images/profil.jpeg')} alt="" className="l-testimonials__left-col-pic" />
                        <div>
                            <Icon name='star' size='large' className="l-testimonials__left-col-icon"/>
                            <Icon name='star' size='large' className="l-testimonials__left-col-icon"/>
                            <Icon name='star' size='large' className="l-testimonials__left-col-icon"/>
                            <Icon name='star' size='large' className="l-testimonials__left-col-icon"/>
                            <Icon name='star' size='large' className="l-testimonials__left-col-icon"/>
                            <p className="l-testimonials__left-col-descp">“Je découvre pleins de <br /> destinations que je n’aurais <br /> jamais imaginé !”</p>
                            <p className="l-testimonials__left-col-author">Béatrice, 27 ans</p>
                        </div>
                   </div>
                </div>
                <div className="l-testimonials__right-col">
                    <h2 className="l-testimonials__title">Pourquoi nous <br /> faire confiance ?</h2>
                    <p>Lorsque vous réservez avec Voyage Serein, vous pouvez être assuré que chaque détail sera pris en compte. Notre équipe se charge de tous les aspects logistiques, des vols et des hébergements aux transferts et aux activités sur place. Vous pourrez ainsi vous concentrer sur l'essentiel : profiter pleinement de chaque instant de votre voyage.</p> <br />
                    <p className="">La tranquillité d'esprit est au cœur de notre promesse. Nous vous garantissons une assistance 24 heures sur 24, 7 jours sur 7, afin de vous offrir une assistance complète pendant votre séjour. En cas de problème ou de question, il vous suffit de nous contacter, et nous nous occuperons de tout pour que vous puissiez voyager en toute sérénité.</p> <br />
                    <p className="l-testimonials__link">Contacter un conseiller</p>
                </div>
            </div>
        </>
    );
} 

export default About;