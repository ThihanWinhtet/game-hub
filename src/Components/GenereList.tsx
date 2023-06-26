
import useGenere from "../hooks/useGenere"


const GenereList = () => {
    let {data} = useGenere();

  return (
    <ul>
        {data.map(m=> <li key={m.id}>{m.name}</li>)}
    </ul>
  )
}

export default GenereList