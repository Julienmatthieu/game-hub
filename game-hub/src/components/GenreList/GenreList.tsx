import React from "react";
import userGenres from "../../hooks/useGenre";

const GenreList = () => {
  const { genres } = userGenres();

  return (
    <div>
      <ul>
        {genres.map((genre) => (
          <li key={genre.id}>{genre.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default GenreList;