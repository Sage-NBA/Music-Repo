import { NavBar, Icons } from "./Components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Library from "./Pages/Library";

function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <div className="flex  min-h-screen">
        {/* Sidebar */}
        <aside className="">
          <Icons />
        </aside>
        {/* Page Content */}
        <main className="">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Library" element={<Library />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
