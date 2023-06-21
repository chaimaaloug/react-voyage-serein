
import { Icon } from 'semantic-ui-react';
import Button from '../../components/Button/Button';
import Footer from "../../components/Footer/Footer";
import style from './About.module.scss'

const About = () => {

    return (
        <>
            {/*-------------- Hero Section ----------------*/}
            <div className={style.heroContainer}>
                <section className={style.aboutUs}>
                    <h2 className={style.title}>Voyage Serein</h2>
                    <p className={style.subTitle}>Qui sommes-nous ?</p>
                    <div className={style.flex}>
                        <p>Bienvenue chez Voyage Serein, votre partenaire privilégié pour des voyages extraordinaires et sans soucis. En tant qu'agence de voyage en ligne, notre mission est de vous offrir une expérience de vacances inégalée, en vous épargnant les tracas liés à la planification et à l'organisation.</p>
                        <p>Chez Voyage Serein, nous comprenons que le processus de préparation d'un voyage peut être stressant et fastidieux. C'est pourquoi nous avons créé une plateforme simple et conviviale, où vous pouvez trouver tout ce dont vous avez besoin pour concevoir votre escapade de rêve, sans vous prendre la tête.</p>
                    </div>
                    <Button text="Cap sur mon prochain voyage"/>
                </section>
            </div>
        
            {/*-------------- Gallery Section ----------------*/}
            <div className={style.galleryContainer}>
                <section className={style.imagesContainer}>
                    <img src={require('../../assets/images/1.png')} className={style.img1} alt='' />
                    <img src={require('../../assets/images/2.png')} className={style.img2} alt='' />
                    <img src={require('../../assets/images/3.png')} className={style.img3} alt='' />
                    <img src={require('../../assets/images/4.png')} className={style.img4} alt='' />

                    <img src={require('../../assets/images/5.png')} className={style.img5} alt='' />
                    <img src={require('../../assets/images/6.png')} className={style.img6} alt='' />
                    <img src={require('../../assets/images/7.png')} className={style.img7} alt='' />
                    <img src={require('../../assets/images/8.png')} className={style.img8} alt='' />

                    <img src={require('../../assets/images/9.png')} className={style.img9} alt='' />
                    <img src={require('../../assets/images/10.png')} className={style.img10} alt='' />
                    <img src={require('../../assets/images/11.png')} className={style.img11} alt='' />
                </section>

                <section className={style.gallery}>
                    <h2 className={style.title}>Des vacances inoubliables sans effort, grâce à Voyage Serein</h2>
                    <p>Notre équipe dévouée d'experts en voyages est là pour vous accompagner à chaque étape de votre parcours. Que vous cherchiez à explorer des destinations exotiques, à vous détendre sur des plages paradisiaques ou à vous immerger dans des cultures fascinantes, nous sommes là pour donner vie à vos aspirations.</p> <br />
                    <p>Découvrir la destination faite pour moi</p> <br />
                    <p>Nous vous offrons une vaste sélection de destinations et d'expériences uniques, soigneusement sélectionnées pour vous garantir des moments exceptionnels, même si vous ne saviez pas exactement où partir au départ. Notre collection de supports d'inspiration, tels que des articles, des photos et des avis de voyageurs, vous aidera à explorer de nouvelles idées et à affiner vos choix.</p> <br />
                    <Button text="M'inspirer pour mon prochain voyage"/>
                </section>
            </div>

            {/*-------------- Testimonials Section ----------------*/}
            <div className={style.testimonialsContainer}>
                <div className={style.leftCol}>
                    <h3>Avis client :</h3> 
                    <div className={style.flexLeftCol}>
                        <img src={require('../../assets/client.png')} alt="" />
                        <div>
                            <Icon name='star' size='large' className={style.icon}/>
                            <Icon name='star' size='large' className={style.icon}/>
                            <Icon name='star' size='large' className={style.icon}/>
                            <Icon name='star' size='large' className={style.icon}/>
                            <Icon name='star' size='large' className={style.icon}/>
                            <p>“Je découvre pleins de <br /> destinations que je n’aurais <br /> jamais imaginé !”</p>
                            <p className={style.author}>Béatrice, 27 ans</p>
                        </div>
                   </div>
                </div>

                <div className={style.rightCol}>
                    <h2 className={style.title}>Pourquoi nous <br /> faire confiance ?</h2>
                    <p>Lorsque vous réservez avec Voyage Serein, vous pouvez être assuré que chaque détail sera pris en compte. Notre équipe se charge de tous les aspects logistiques, des vols et des hébergements aux transferts et aux activités sur place. Vous pourrez ainsi vous concentrer sur l'essentiel : profiter pleinement de chaque instant de votre voyage.</p>
                    <p className={style.parag}>La tranquillité d'esprit est au cœur de notre promesse. Nous vous garantissons une assistance 24 heures sur 24, 7 jours sur 7, afin de vous offrir une assistance complète pendant votre séjour. En cas de problème ou de question, il vous suffit de nous contacter, et nous nous occuperons de tout pour que vous puissiez voyager en toute sérénité.</p>
                    <p>Contacter un conseiller</p>
                </div>  
            </div>

            <Footer />
        </>
    );
} 

export default About;