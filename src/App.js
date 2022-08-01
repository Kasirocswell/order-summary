import Summary from "./Components/Summary";
import img from './Components/images/pattern-background-desktop.svg'


function App() {
  return (
    <div className="w-screen h-screen bg-[#DFE6FB] lg:h-[100%]">
      <svg className="absolute" xmlns="http://www.w3.org/2000/svg" width="395" height="194"><path fill="#D6E1FF" fill-rule="evenodd" d="M-131.808 155.366c97.026 51.512 204.233 51.512 321.62 0 117.388-51.512 223.27-51.512 317.648 0V0h-639.268v155.366z"/></svg>
      <img className="absolute opacity-0 lg:opacity-100" src={img}></img>
      <div className="relative">
        <Summary />
      </div>
    </div>
  );
}

export default App;
