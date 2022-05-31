import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchSession } from '../../services/index.js';

import * as S from './style.js';

export default function SessionPage() {
  const { id } = useParams();
  const [seats, setSeats] = useState([]);

  useEffect(() => {
    fetchSession(id)
    .then(data => {
      for(let i = 0; i < data.result.seats.length; i++) {
        let letter = data.result.seats[i].name[0];
        const line = [];
        data.result.seats[i-1] && line.push(data.result.seats[i-1]);
        while(data.result.seats[i]?.name[0] === letter) {
          line.push(data.result.seats[i++]);
        }
        setSeats(state => [...state, line]);
      }
    });
  return () => setSeats([]);
  }, [id]);

  const seatsMatrix = seats.map((line, i) => (
    <div key={ i }>
      { line.map(seat => <span key={ seat.id }>{ seat.name }</span>) }
    </div>
  ))

  return (
    <S.sessionPageContainer>
      <S.sessionOrderContainer>
      </S.sessionOrderContainer>
      <S.sessionSeatsContainer>
        <p>Chose your seats:</p>
        <hr />
        { seatsMatrix }
        <h4>SCREEN</h4>
      </S.sessionSeatsContainer>
    </S.sessionPageContainer>
  );
}