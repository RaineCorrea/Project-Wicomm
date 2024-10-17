import styles from "./Product.module.css";

interface IProduct {
  link?: string;
  flag?: string;
  flagText: string;
  img?: string;
  title?: string;
  priceCompare?: string;
  price?: string;
}

import colorBlue from "../assets/svg/colorBlue.svg";
import colorRed from "../assets/svg/colorRed.svg";
import colorGreen from "../assets/svg/colorGreen.svg";
import colorBlack from "../assets/svg/colorBlack.svg";

export function Product(props: IProduct) {
  return (
    <div className={styles.container}>
      <a className={styles.link} href={props.link}>
        <div className={styles.containerImg}>
          <img className={styles.flag} src={props.flag} />
          <img className={styles.flagText} src={props.flagText} />
        </div>
        <img className={styles.img} src={props.img} />
        <div className={styles.containerColors}>
          <span className={styles.title}>{props.title}</span>
          <div className={styles.colors}>
            <img src={colorBlue} alt="Cor Azul" />
            <img src={colorRed} alt="Cor vermelha" />
            <img src={colorGreen} alt="Cor Verde" />
            <img src={colorBlack} alt="Cor Preta" />
          </div>
        </div>

        <div className={styles.containerPrice}>
          <span className={styles.priceCompare}>{props.priceCompare}</span>
          <span className={styles.price}>{props.price}</span>
        </div>
      </a>
    </div>
  );
}
