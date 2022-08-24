import { createBrowserHistory, History } from 'history'
import ReactDOM from "react-dom/client"
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import MainLayout from './views/Layout/MainLayout';
import Detail from './views/Pages/Detail';
import Home from './views/Pages/Home';
import Collection from './views/Pages/Collection';
import CollectionDetail from './views/Pages/CollectionDetail';

export const history: History = createBrowserHistory()

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
)

root.render(
  <BrowserRouter>
    <Routes>
      <Route element={<MainLayout />} >
        <Route index element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/collection" element={<Collection />}/>
        <Route path='/collection/:id' element={<CollectionDetail />}/>
      </Route>
    </Routes>
  </BrowserRouter>, 
)
