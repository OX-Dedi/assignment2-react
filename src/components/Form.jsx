import React from 'react';
import { useState } from 'react';

const Form = ({ addStudent }) => {
  const [fullname, setFullname] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [gender, setGender] = useState('');
  const [programStudy, setProgramStudy] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const faculty = getFacultyByProgramStudy(programStudy);

    const newStudent = {
      id:'',
      fullname,
      birthDate,
      gender,
      faculty,
      programStudy,
    };

    addStudent(newStudent);

    setFullname('');
    setBirthDate('');
    setGender('');
    setProgramStudy('');
  };

  const getFacultyByProgramStudy = (programStudy) => {
    switch (programStudy) {
      case 'Ekonomi':
      case 'Manajemen':
      case 'Akuntansi':
        return 'Fakultas Ekonomi';
      case 'Administrasi Publik':
      case 'Administrasi Bisnis':
      case 'Hubungan Internasional':
        return 'Fakultas Ilmu Sosial dan Politik';
      case 'Teknik Sipil':
      case 'Arsitektur':
        return 'Fakultas Teknik';
      case 'Matematika':
      case 'Fisika':
      case 'Informatika':
        return 'Fakultas Teknologi Informasi dan Sains';
      default:
        return '';
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Fullname
        <input
          type="text"
          value={fullname}
          onChange={(e) => setFullname(e.target.value)}
          data-testid="name"
        />
      </label>
      <br />
      <label>
        Birth Date
        <input
          type="date" // Change input type to 'date'
          value={birthDate}
          onChange={(e) => setBirthDate(e.target.value)}
          data-testid="date"
        />
      </label>
      <br />
      <label>
        Gender
        <select // Change input to a dropdown (select)
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          data-testid="gender"
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </label>
      <br />
      <label>
        Program Study
        <select // Change input to a dropdown (select)
          value={programStudy}
          onChange={(e) => setProgramStudy(e.target.value)}
          data-testid="prody"
        >
          <option value="">Select Program Study</option>
          <option value="Ekonomi">Ekonomi</option>
          <option value="Manajemen">Manajemen</option>
          <option value="Akuntansi">Akuntansi</option>
          <option value="Administrasi Publik">Administrasi Publik</option>
          <option value="Administrasi Bisnis">Administrasi Bisnis</option>
          <option value="Hubungan Internasional">Hubungan Internasional</option>
          <option value="Teknik Sipil">Teknik Sipil</option>
          <option value="Arsitektur">Arsitektur</option>
          <option value="Matematika">Matematika</option>
          <option value="Fisika">Fisika</option>
          <option value="Informatika">Informatika</option>
        </select>
      </label>
      <br />
      <button type="submit" data-testid="submit">
        Add Student
      </button>
    </form>
  );
};

export default Form;
