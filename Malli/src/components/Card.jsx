function Card({ name, branch, year }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>{branch}</p>
      <p>{year}</p>
    </div>
  );
}

export default Card;