const App = () => {
  return (
    <div className='App'>
      <h1>Hello from React and Flask</h1>
      <button
        onClick={async () => {
          const response = await fetch('/hello');

          console.log(await response.json());
        }}
      >
        Click Flask
      </button>
    </div>
  );
};

export default App;

