import { Routes, Route } from "react-router-dom";
import "./App.css";
import { SharedLayout } from "./components/SharedLayout/SharedLayout";
import Home from "./pages/Home/Home";
import Rates from "./pages/Rates/Rates";
import { useEffect } from "react";
import { fetchBaseCurrency } from "./redux/operations";
import { useDispatch, useSelector } from "react-redux";
import { selectBaseCurrency } from "./redux/selectors";
import { addBaseCurrency } from "./redux/currencySlice";

function App() {
  const baseCurrency = useSelector(selectBaseCurrency);
  const dispatch = useDispatch();
  useEffect(() => {
    if (baseCurrency) {
      return;
    }
    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };

    function success(pos) {
      const crd = pos.coords;
      dispatch(fetchBaseCurrency(crd));
    }

    function error(err) {
      dispatch(addBaseCurrency("USD"));
    }

    navigator.geolocation.getCurrentPosition(success, error, options);
  }, [baseCurrency, dispatch]);

  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="rates" element={<Rates />} />
      </Route>
    </Routes>
  );
}

export default App;
