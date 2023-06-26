import useGenere from "../hooks/useGenere"


const GenereList = () => {
    let {genres} = useGenere();

  return (
    <ul>
        {genres.map(m=> <li key={m.id}>{m.name}</li>)}
    </ul>
  )
}

export default GenereList