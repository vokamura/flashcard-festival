import './App.css';
import './App.scss';
import CardLayout from './CardLayout.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          This is a flashcards app.
        </h1>
      
      </header>
      <div className="flashBody">
        <CardLayout />
      </div>
    </div>
  );
}

export default App;
