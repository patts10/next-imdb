import { FC } from "react"
import { MovieInterface } from "../interfaces"

interface MoviesProps {
  movies: MovieInterface[]
}

export const Movies:FC<MoviesProps> = ({movies}) => {
  return (
    <div>
      {
        movies.map((movie) => (
          <div key={movie.id}>
            <h2>{movie.original_title}</h2>
            <p>{movie.overview}</p>
          </div>
        ))
      }
    </div>
  )
}
