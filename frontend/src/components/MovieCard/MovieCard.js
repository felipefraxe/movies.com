import * as S from './style.js';

export default function MovieCard({ id, image_path, title }) {
  return (
    <S.movieCardContainer to={ `/movies/${id}` } >
      <img src={ image_path } alt={ `${title} poster` } />
      <h4>{ title }</h4>
    </S.movieCardContainer>
  );
}