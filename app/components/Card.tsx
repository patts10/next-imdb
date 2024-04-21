import Image from 'next/image'
import Link from 'next/link'
import { MovieInterface } from '../interfaces'
import { FiThumbsUp } from 'react-icons/fi'

interface CardProps {
  movie: MovieInterface
}

export const Card = ({ movie }: CardProps) => {
  return (
    <div className='group cursor-pointer sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200'>
      <Link href={`/movie/${movie.id}`}>
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            movie.backdrop_path || movie.poster_path
          }`}
          alt={movie.title}
          width={500}
          height={300}
          className='sm:rounded-lg group-hover:opacity-75 transition-opacity duration-300'
        ></Image>
        <div className='p-2'>
          <p className='line-clamp-2 text-md'>{movie.overview}</p>
          <h2 className='text-lg font-bold truncate'>
            {movie.title || movie.original_title}
          </h2>
          <p>
            {movie.release_date || movie.first_air_date}
            <FiThumbsUp className='h-5 mr-1 ml-3' />
            {movie.vote_average}
          </p>
        </div>
      </Link>
    </div>
  )
}
