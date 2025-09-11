import {Routes, Route} from 'react-router-dom';
import Layout from './components/layout';
import About from './components/About';
import Home from './components/Home';
import Projects from './components/Projects';
const MainRouter = () => {
    return (
        <>
        <Layout />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<div>Contact Page</div>} />
            <Route path='/education' element={<div>Education Page</div>} />  
            <Route path='/projects' element={<Projects />} />  
            <Route path='/services' element={<div>Services Page</div>} />
        </Routes>
        </>
    )
}

export default MainRouter;