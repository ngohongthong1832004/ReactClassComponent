import './App.css';
import Content from './components/content';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      <Content props = {'10diem'}/> 
      <p>~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~</p>
      <h2>Learn useCallback and useMemo</h2>
      <Counter /> 
    </div>
  );
}

export default App;
