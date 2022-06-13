import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchSession, buyTickets } from '../../services/index.js';

import * as S from './style.js';

export default function SessionPage() {
  const { id } = useParams();
  const [seatsData, setSeatsData] = useState({
    seats: [],
    chosen: [],
    occupied: []
  });
  const [movieData, setMovieData] = useState({});
  const [sessionDate, setSessionDate] = useState({});
  const [theaterData, setTheaterData] = useState({});

  function controlSeat(event, seat) {
    if(seatsData.chosen.includes(seat)) {
      setSeatsData(state => ({
        ...state,
        chosen: state.chosen.filter(oldSeat => oldSeat.id !== seat.id)
      }));
      event.target.classList.remove('clicked');
    } else if(!seatsData.occupied.includes(seat.id)) {
      setSeatsData(state => ({
        ...state,
        chosen: [...state.chosen, seat]
      }));
      event.target.classList.add('clicked');
    }
  }

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
        setSeatsData(state => ({
          ...state,
          seats: [...state.seats, line],
        }));
      }
      setSeatsData(state => ({
        ...state,
        occupied: data.result.occupied
      }));
      setMovieData(data.result.movie[0]);
      setSessionDate(data.result.date[0]);
      setTheaterData(data.result.theater[0]);
    });

  return () => {
    setSeatsData({
      seats: [],
      chosen: [],
      occupied: []
    });
  }
  }, [id]);

  const seatsMatrix = seatsData.seats.map((line, i) => (
    <div key={ i }>
      { line.map(seat => (
        <span
          key={ seat.id }
          onClick={ (e) => controlSeat(e, seat) }
          className={ seatsData.occupied.includes(seat.id) ? 'occupied' : '' }
        >
          { seat.name }
        </span>)) }
    </div>
  ));

  const ChosenSeatsList = seatsData.chosen.map((seat, i) => (
    <span key={ seat.id }>{ (i > 0 ? ', ' : '') + seat.name }</span>
  ));

  return (
    <S.sessionPageContainer>
      <S.sessionOrderContainer>
        <S.sessionDataContainer>
          <img src={ movieData.image_path } alt={ `${movieData.title} poster` } />
          <div>
            <h3>{ movieData.title }</h3>
            <p>{ theaterData.name } -</p>
            <p>Room { theaterData.number }</p>
            <p>{ sessionDate.weekday } - { sessionDate.date }</p>
          </div>
        </S.sessionDataContainer>
        <hr />
        <p>Selected seats</p>
        <div>
          { ChosenSeatsList }
        </div>
        { 
          ChosenSeatsList.length > 0 &&
          <input
            type="submit"
            value="Buy tickets"
            onClick={ () => {
              const seats = seatsData.chosen.map(seat => seat.id);
              buyTickets(seats, id, localStorage.getItem('token'))
              .then(response => console.log(response));
            } }
          />
        }
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