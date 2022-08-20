import { createBrowserHistory, History } from 'history'
import ReactDOM from "react-dom/client"
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import MainLayout from './views/Layout/MainLayout';
import Detail from './views/Detail';
import Home from './views/Home';

export const history: History = createBrowserHistory()

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
)

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainLayout />} >
        <Route index element={<Home />} />
        <Route path="detail/:id" element={<Detail />} />
      </Route>
    </Routes>
  </BrowserRouter>, 
)
