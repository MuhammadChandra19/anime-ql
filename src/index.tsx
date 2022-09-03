import React from 'react'
import { createBrowserHistory, History } from 'history'
import ReactDOM from "react-dom/client"
import {
  Routes,
  Route,
  HashRouter
} from "react-router-dom";
// import MainLayout from './views/Layout/MainLayout';
// import Detail from './views/Pages/Detail';
// import Home from './views/Pages/Home';
// import Collection from './views/Pages/Collection';
// import CollectionDetail from './views/Pages/CollectionDetail';

export const history: History = createBrowserHistory()
const MainLayout = React.lazy(() => import('./views/Layout/MainLayout'))
const Detail = React.lazy(() => import('./views/Pages/Detail'))
const Home = React.lazy(() => import('./views/Pages/Home'))
const Collection = React.lazy(() => import('./views/Pages/Collection'))
const CollectionDetail = React.lazy(() => import('./views/Pages/CollectionDetail'))



const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
)

root.render(
  <HashRouter>
    <React.Suspense>
      <Routes>
        <Route path="/" element={<MainLayout />} >
          <Route index element={<Home />} />
          <Route path="detail/:id" element={<Detail />} />
          <Route path="collection" element={<Collection />}/>
          <Route path='collection/:id' element={<CollectionDetail />}/>
        </Route>
      </Routes>
    </React.Suspense>
  </HashRouter>, 
)
