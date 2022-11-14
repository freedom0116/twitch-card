import './App.scss';

const SubTitle = ({ children }) => {
  return (
    <div className="card-subtitle">
      {children.split(' ').map((word, index) => (
        <div class="card-subtitle-word" style={{ transitionDelay: `${index * 40}ms` }}>
          {word}&nbsp;
        </div>
      ))}
    </div>
  );
};

function App() {
  return (
    <div className="app">
      <div className="card">
        <div className="card-content">
          <div className="card-title">First css practice from now</div>
          <SubTitle>To be honest, I hope I can continue on practices util I become master</SubTitle>
        </div>
      </div>
    </div>
  );
}

export default App;
