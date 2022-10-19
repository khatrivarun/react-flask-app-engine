const App = () => {
  return (
    <div className='App'>
      <h1>lol</h1>
      <button
        onClick={async () => {
          const response = await fetch('/hello');

          console.log(await response.json());
        }}
      >
        Click
      </button>
    </div>
  );
};

export default App;

