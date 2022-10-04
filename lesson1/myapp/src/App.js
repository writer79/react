import './App.css';

function App() {
  const text = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae rerum"

  return (
    <div className="App">
      <Message text={text} />
    </div>
  );
}

export default App;

const Message = ({ text }) => {

  return (
    <div className='message'>
      <p className='message__text'>{text}</p>
    </div>
  )
}