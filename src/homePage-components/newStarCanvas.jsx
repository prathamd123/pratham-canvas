import Starfield from '@/homePage-components/Stars'

function App() {
  return (
    <div className="App">
      <Starfield
        starCount={1000}
        starColor={[255, 255, 255]}
        speedFactor={0.05}
        backgroundColor="black"
      />
      {/* Other components */}
    </div>
  );
}

export default App;