const getAllShows = async () => {
  const response = await fetch('http://localhost:4000/api/v1/shows')
  if (!response.ok) {
    throw new Error('Network response was not ok')
  }
  return response.json()
}
export default getAllShows
