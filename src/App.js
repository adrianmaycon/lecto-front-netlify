// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import { Home } from './pages/Home';
// import { Collaborators } from './pages/Collaborators';
// import { Categorys } from './pages/Categorys';

// function App() {
//     return (
//         <BrowserRouter>
//             <Routes>
//                 <Route path='/:categoria/:subcategoria/:slug' element={<Collaborators />} />
//                 <Route path='/:categoria' element={<Categorys />} />
//                 <Route path='/' element={<Home />} />
//             </Routes>
//         </BrowserRouter>
//     );
// }

// export default App;

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home/index';
import Local from './pages/Local/index';
import Culinaria from './pages/Culinaria/index';
import Onde from './pages/Onde/index';
import './styles/global.scss';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/ribeirao-preto" component={Local} />
        <Route exact path="/ribeirao-preto/culinaria" component={Culinaria} />
        <Route exact path="/ribeirao-preto/culinaria/onde-comer-em-reibeirao-preto" component={Onde} />
      </Switch>
    </BrowserRouter>
  )
}

export default App;