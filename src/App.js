import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "./screens";
import Page2 from "./screens/Page2";
import { Provider } from "react-redux";
import store from "./redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/React_F4_c2" Component={HomeScreen}/>
          <Route path="/React_F4_c2/pin-area/:pincode" Component={Page2}/>
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App;