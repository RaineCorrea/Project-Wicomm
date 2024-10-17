import logo from "../assets/svg/logo-gat.svg";
import icon from "../assets/svg/icon-menu-header.svg";
import iconCat from "../assets/svg/icon-cat.svg";
import iconCart from "../assets/svg/icon-cart.svg";
import iconSearch from "../assets/svg/icon-search.svg";

import styles from "./Header.module.css";

export function Header() {
  return (
    <header>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.containerLogo}>
            <img src={logo} alt="Logo Gat" />
          </div>
          <div className={styles.containerProdutos}>
            <a href="#" className={styles.textProdutos}>
              <img src={icon} alt="Ícone produtos" />
              produtos
            </a>
          </div>
          <div className={styles.containerColecoes}>
            <a href="#" className={styles.textColecoes}>
              <img src={icon} alt="Ícone coleções" />
              coleções
            </a>
          </div>
          <div className={styles.containerBlog}>
            <a href="#">blog</a>
            <a href="#">lookbook</a>
            <a href="#">sobre a Gat</a>
            <a href="#">wishilist</a>
          </div>
          <div className={styles.containerSearch}>
            <button type="submit" className={styles.buttonSearch}>
              <img src={iconSearch} alt="Icone Busca" />
            </button>
            <input
              type="text"
              placeholder="digite aqui o que procura"
              className={styles.inputSearch}
            />
          </div>
          <div className={styles.containerLinks}>
            <a href="#" className={styles.linkAccount}>
              <img src={iconCat} alt="Ícone Minha Conta" />
            </a>
            <a href="#" className={styles.linkCart}>
              <img src={iconCart} alt="Ícone Carrinho" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
