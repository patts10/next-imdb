import { Movies } from '@/app/components'

interface SearchPageProps {
  params: {
    searchTerm: string
  }
}

export default async function SearchPage({ params }: SearchPageProps) {
  const searchTerm = params.searchTerm
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${searchTerm}&language=en-US&page=1&include_adult=false`
  )

  const dataRest = await res.json()
  const movies = dataRest.results

  return (
    <div>
      {movies &&
        movies.length ===
        <h1 className='text-center pt-6'>No results found</h1>}
      {movies && <Movies movies={movies} />}
    </div>
  )
}
