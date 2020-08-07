import React from 'react';

import whatsAppIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css';
import api from '../../services/api';

export interface Teacher {
  id: number;
  name: string;
  avatar: string;
  whatsapp: string;
  bio: string;
  subject: string;
  cost: number;
}

interface TeacherItemProps {
  teacher: Teacher;
  params: {
    subject: string;
    week_day: string;
    time: string;
  };
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher, params }) => {
  const { name, avatar, whatsapp, bio, subject, cost, id } = teacher;
  
  const formattedCost = `R$ ${cost},00` ;
  const formattedWeekDay = () => { 
    switch (params.week_day) {
    case ('0'):
      return 'no%20domingo';
    case ('1'):
      return 'na%20segunda-feira';
    case ('2'):
      return 'na%20terça-feira';
    case ('3'):
      return 'na%20quarta-feira';
    case ('4'):
      return 'na%20quinta-feira';
    case ('5'):
      return 'na%20sexta-feira';
    case ('6'):
      return 'no%20sábado';
  }};

  async function createNewConnection() {
    await api.post('/connections', {
      user_id: id,
    });
  }
  
  return (
    <article className="teacher-item">
      <header>
        <img src={avatar} alt={name}/>
        <div>
          <strong>{name}</strong>
          <span>{subject}</span>
        </div>
      </header>

      <p>
        {bio}
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>{formattedCost}</strong>
        </p>
        <a
          onClick={createNewConnection}
          target="blank"
          href={`https://wa.me/55${whatsapp}?text=Olá!%20Te%20encontrei%20no%20Proffy%20e%20gostaria%20de%20marcar%20uma%20aula%20de%20${params.subject}%20${formattedWeekDay()}%20às%20${params.time}.`}
        >
          <img src={whatsAppIcon} alt="WhatsApp"/>
          Entrar em contato
        </a>
      </footer>
    </article>
  );
}

export default TeacherItem;