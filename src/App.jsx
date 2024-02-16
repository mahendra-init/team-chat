import { SideBar, MiddleContainer, RightContainer } from "./containers";
function App() {
  return (
    <div className="flex w-fit h-full">
      <SideBar />
      <MiddleContainer />
      <RightContainer />
    </div>
  );
}

export default App;
