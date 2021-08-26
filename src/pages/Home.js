import CardComponent from '../components/CardComponent'

const Home = () => {
  return (
    <>
      <h1>Pokedex - Home</h1>
      <CardComponent 
        title="hey"
        message="this is the message on the Card"
        image="http://github.com/souluizfelipe.png"
      />
    </>
  )
}


export default Home