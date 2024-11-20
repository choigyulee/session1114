export async function fetchNowPlayingMovies() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/movie/now_playing?api_key=${process.env.NEXT_PUBLIC_API_KEY}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error('에러 발생');
  }

  const data = await response.json();
  return data.results;
}
