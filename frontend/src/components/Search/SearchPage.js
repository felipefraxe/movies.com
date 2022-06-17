import { useState } from 'react';
import { search } from '../../services/index.js';

import * as S from './style.js';

export default function SearchPage() {
  const [q, setQ] = useState('');

  return (
    <S.formContainer onSubmit={ (event) => {
      event.preventDefault();
      search(q).then(data => console.log(data));
    } }>
      <input
        autoFocus
        autoComplete='off'
        name="q"
        value={ q }
        onChange={ (event) => setQ(event.target.value) }
      />
      <input type="submit" value="Search" />
    </S.formContainer>
  );
}