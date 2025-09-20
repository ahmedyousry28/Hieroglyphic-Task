import AssistantMenu from "./components/Assistant/AssistantMenu";
import Content from "./components/Content";

function App() {
  return (
    <main className="container mx-auto p-8 h-screen overflow-hidden">
      <div className="grid grid-rows-12 md:grid-rows-1 md:grid-cols-12 h-full gap-4">
        <AssistantMenu />
        <Content />
      </div>
    </main>
  );
}

export default App;
