import styles from "./Footer.module.css";
import footerLogo from "../assets/svg/footer-logo.svg";
import visa from "../assets/svg/icon-visa.svg";
import mastercard from "../assets/svg/icon-mastercard.svg";
import paymentblue from "../assets/svg/icon-payment-blue.svg";
import elo from "../assets/svg/icon-elo.svg";
import hipercard from "../assets/svg/icon-hipercard.svg";
import americanexpress from "../assets/svg/icon-american-express.svg";
import pix from "../assets/svg/icon-pix.svg";
import certificado1 from "../assets/svg/certificado-1.svg";
import certificado2 from "../assets/svg/certificado-2.svg";
import certificado3 from "../assets/svg/certificado-3.svg";

import instagram from "../assets/svg/instagram.svg";
import youtube from "../assets/svg/youtube.svg";
import linkedin from "../assets/svg/linkedin.svg";
import facebook from "../assets/svg/facebook.svg";

export function Footer() {
  return (
    <>
      <div className={styles.containerMain}>
        <div className={styles.container}>
          <div className={styles.containerLogo}>
            <img src={footerLogo} alt="Logo footer Cat" />
          </div>
          <div className={styles.containerMenu}>
            <div className={styles.subContainerMenu}>
              <a href="#">PRODUTOS</a>
              <a href="#">COLEÇOES</a>
              <a href="#">LOOKBOOK</a>
              <a href="#">SOBRE</a>
              <a href="#">WISHLIST</a>
              <a href="#">BLOG</a>
            </div>
            <div className={styles.containerPayment}>
              <div className={styles.subcontainerPayment}>
                <span className={styles.textPayment}>FORMAS DE PAGAMENTO</span>
                <div className={styles.iconsPayment}>
                  <img src={visa} alt="Icone Visa" />
                  <img src={mastercard} alt="Icone MasterCard" />
                  <img src={paymentblue} alt="Icone PaymentBlue" />
                  <img src={elo} alt="Icone Elo" />
                  <div>
                    <img src={hipercard} alt="Icone Hipercard" />
                    <img src={americanexpress} alt="Icone AmericanExpress" />
                    <img src={pix} alt="Icone Pix" />
                  </div>
                </div>
              </div>
              <div className={styles.containerSecurity}>
                <span className={styles.textSecurity}>
                  CERTIFICADOS E SEGURANÇA
                </span>
                <div className={styles.subContainerSecurity}>
                  <img
                    src={certificado1}
                    alt="Icone Certificado de Segurança"
                  />
                  <img
                    src={certificado2}
                    alt="Icone Certificado de Segurança"
                  />
                  <img
                    src={certificado3}
                    alt="Icone Certificado de Segurança"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.containerAbout}>
            <a href="#">AJUDA</a>
            <a href="#">FAQ</a>
            <a href="#">Sobre nossos produtos</a>
            <a href="#">Trocas e devoluções</a>
            <a href="#">Entregas</a>
            <a href="#">Indique e ganhe</a>
            <a href="#">Garantias</a>
          </div>
          <div className={styles.containerContact}>
            <div className={styles.subContainerContact}>
              <span>CONTATO</span>
              <span>WhatsApp - (51)9999-9999</span>
              <span>E-mail - ajuda@gat.com.br</span>
            </div>
            <div className={styles.footerIconsSocial}>
              <span>REDES SOCIAIS</span>
              <div className={styles.subfooterIconsSocial}>
                <a href="#">
                  <img src={instagram} alt="Icone Instagram" />
                </a>
                <a href="#">
                  <img src={youtube} alt="Icone Youtube" />
                </a>
                <a href="#">
                  <img src={linkedin} alt="Icone Linkedin" />
                </a>
                <a href="#">
                  <img src={facebook} alt="Icone Facebook" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.copyright}>
        <div className={styles.containerCopyrightMain}>
          <div className={styles.containerCopyright}>
            <span>© 2024, GAT. TODOS OS DIREITOS RESERVADOS.</span>
            <span>
              GAT LTDA. | R. Ondina Carvalheira Peixoto, 300 - Chácaras
              Palmeiras | Cataguases - MG | CEP 36774-550
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
