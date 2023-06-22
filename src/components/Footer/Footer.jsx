import style from "./Footer.module.scss"
import classNames from "classnames";
import Link from "../Link/Link"
import { Icon } from "semantic-ui-react";


const Footer = () => {

    const classes = classNames(
        style.footer, {
      });

    return (
        <div className={classes}>
            <div className={style.footerContent}>
                {/*<div>
                    <p className="u-font-700">
                    Voyage Serein
                    </p>
                </div>*/}
                <div>
                    <p className="u-font-700 u-color--bleu-marine-700">
                    Nos destinations
                    </p>
                    <div className={style.footerLinks}>
                        <Link url="#" text="Découvrir la destination faite pour moi" />
                        <Link url="#" text="Nos best-destinations du moment" />
                        <Link url="#" text="Conseil pour voyager" />
                    </div>
                </div>
                <div>
                    <p className="u-font-700 u-color--bleu-marine-700">
                    Voyage Serein
                    </p>
                    <div className={style.footerLinks}>
                        <Link url="#" text="Qui sommes-nous ?" />
                        <Link url="#" text="Besoin d’aide ?" />
                        <Link url="#" text="Nous contacter" />
                    </div>
                </div>
                <div>
                    <p className="u-font-700 u-color--bleu-marine-700">
                    Nos réseaux sociaux
                    </p>
                    <div className={style.footerLinks}>
                        <div className={style.mediaLink}>
                            <Icon name='facebook f' size='large'/>
                            <p>Voyage Serein</p>
                        </div>
                        <div className={style.mediaLink}>
                            <Icon name='instagram' size='large'/>
                            <p>@Voyage Serein</p>
                        </div>
                        <div className={style.mediaLink}>
                            <Icon name='pinterest' size='large'/>
                            <p>Voyage Serein</p>
                        </div>
                        <div className={style.mediaLink}>
                            <Icon name='twitter' size='large'/>  
                            <p>@Voyage Serein</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.footerBottom}>
                <span className="u-color--bleu-marine-700">Copyright © 2023 Voyage Serein</span>
                <Link url="#" text="Mentions légales" />
                <Link url="#" text="Termes & Conditions" />
                <Link url="#" text="Politique de confidentialité" />
            </div>
        </div>
    );
}


export default Footer;