import style from "./Footer.module.scss"
import classNames from "classnames";
import Link from "../Link/Link"


const Footer = () => {

    const classes = classNames(
        style.footer, {
      });

    return (
        <div className={classes}>
            <div className={style.footerContent}>
                <div>
                    <p className="u-font-20">
                    Voyage Serein
                    </p>
                </div>
                <div>
                    <p className="u-font-20">
                    Nos destinations
                    </p>
                </div>
                <div>
                    <p className="u-font-20">
                    Blog
                    </p>
                </div>
                <div>
                    <p className="u-font-20">
                    Nos coordonnées
                    </p>
                </div>
                <div>
                    <p className="u-font-20">
                    Nos réseaux sociaux
                    </p>
                </div>
            </div>
            <div className={style.footerBottom}>
                <span>Copyright © 2023 Voyage Serein</span>
                <Link url="#" text="Mentions légales" />
                <Link url="#" text="Termes & Conditions" />
                <Link url="#" text="Politique de confidentialité" />
            </div>
        </div>
    );
}


export default Footer;