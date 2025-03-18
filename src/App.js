import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./ux";
import { AboutUs, Amenities, Home, Partner, ContactUs, Services } from "./pages";
import { links } from "./components/navigation/data";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<AboutUs header={links[1].header} />} />
            <Route path="services" element={<Services header={links[2].header} />} />
            <Route path="/" element={<Amenities header={links[3].header} />} />
            <Route path="partner" element={<Partner header={links[4].header} />} />
            <Route path="contact" element={<ContactUs header={links[5].header}/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
