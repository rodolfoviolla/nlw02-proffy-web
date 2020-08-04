import React from 'react';

import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';

import './styles.css';

function TeacherForm() {
  return (
    <div id="page-teacher-form" className="container">
      <PageHeader title="Que incrível que você quer dar aulas" />

      <main>
        <TeacherItem />
        <TeacherItem />
      </main>
    </div>
  )
}

export default TeacherForm;