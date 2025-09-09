import {Routes, Route} from 'react-router-dom';
import Layout from './components/layout';
import About from './components/About';

const MainRouter = () => {
    return (
        <>
        <Layout />
        <Routes>
            <Route path='/' element={<div>Home Page</div>} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<div>Contact Page</div>} />
            <Route path='/education' element={<div>Education Page</div>} />  
            <Route path='/projects' element={<div>Projects Page</div>} />  
        </Routes>
        </>
    )
}

export default MainRouter;