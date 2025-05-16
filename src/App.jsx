import { BrowserRouter, Route, Routes} from "react-router-dom";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          {/* any path not specified, will redirect to not found */}
          <Route path="*" element={<NotFound />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
