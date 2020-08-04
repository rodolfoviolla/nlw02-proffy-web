import React from 'react';

import whatsAppIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css';

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars1.githubusercontent.com/u/64096832?s=460&u=129a959c36bcae73fe5e9bab810094455f4b1440&v=4" alt="Rodolfo Della Violla"/>
        <div>
          <strong>Rodolfo Della Violla</strong>
          <span>Matemática</span>
        </div>
      </header>

      <p>
        Bicho doido, pittbul cachorro louco da matemática.
        <br /> <br/>
        Gosta de ensinar matemática nas horas vagas e durante o trabalho pensa em formas de ensinar as coisas enquanto ensina as pessoas a viver de maneira matemática.
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={whatsAppIcon} alt="WhatsApp"/>
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;