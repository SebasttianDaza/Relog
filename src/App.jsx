import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, Home404 } from "@Pages";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Error 404 all rest routes */}
          <Route path="*" element={<Home404 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
