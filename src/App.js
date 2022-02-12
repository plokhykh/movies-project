import {Route, Routes, Navigate} from 'react-router-dom';

import {Layout, MoviesByGenrePage,MoviesPage} from './pages';
import {MovieDetailsCard} from './components';
import './App.css';



function App() {
  return (
    <Routes>
        <Route path={'/'} element={<Layout/>}>
            <Route path={''} element={<Navigate to={'movies'}/>}/>
            <Route path={'movies'} element={<MoviesPage/>}/>
            <Route path={'movies/:id'} element={<MovieDetailsCard/>}/>
            <Route path={'movies/genres/:genreId'} element={<MoviesByGenrePage/>}/>
        </Route>
    </Routes>
  );
}

export default App;
