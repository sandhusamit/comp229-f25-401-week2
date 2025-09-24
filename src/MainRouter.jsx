import {Routes, Route} from 'react-router-dom';
import Layout from './components/layout';
import About from './components/About';
import Home from './components/Home';
import Projects from './components/Projects';
import Education from './components/Education';
import Services from './components/Services';
import Contact from './components/Contact';

//Main router which controls the routing of the application using the url path
//Each route is assigned to a jsx component which is rendered when the route is accessed
const MainRouter = () => {
    return (
        <>
        <Layout />
        
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/education' element={<Education />} />  
            <Route path='/projects' element={<Projects />} />  
            <Route path='/services' element={<Services />} />
        </Routes>
        </>
    )
}

export default MainRouter;