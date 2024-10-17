import styles from "./Newsletter.module.css";

import newsletter from "../assets/svg/newsletter.svg";

export function Newsletter() {
  return (
    <div className={styles.container}>
      <div className={styles.newsletterContainer}>
        <div className={styles.newsletterContainerImg}>
          <img src={newsletter} alt="Imagem Newsletter" />
        </div>
        <div className={styles.newsletterContainerTitleInput}>
          <h1 className={styles.newsletterTitle}>NEWSLETTER</h1>
          <div className={styles.containerTitleInput}>
            <div className={styles.containerTitle}>
              <span>Cadastre-se e ganhe 10% off na</span>
              <span>sua primeira compra</span>
              <span>Seja a primeira a receber lançamentos,</span>
              <span>novidades e promoções.</span>
            </div>
            <div className={styles.newsletterContent}>
              <form className={styles.newsletterform}>
                <input
                  type="text"
                  placeholder="NOME DO SEU PET"
                  className={styles.newsletterInputText}
                />

                <input
                  type="email"
                  placeholder="SEU EMAIL"
                  className={styles.newsletterInputEmail}
                />
                <button className={styles.newsletterButton}>CADASTRAR</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
