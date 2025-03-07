import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./ux";
import { About, Amenities, Home, Partner, ContactUs, Services } from "./pages";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} /> 
            <Route path="services" element={<Services />} /> 
            <Route path="amenities" element={<Amenities />} /> 
            <Route path="partner" element={<Partner />} /> 
            <Route path="contactUs" element={<ContactUs />} /> 
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
