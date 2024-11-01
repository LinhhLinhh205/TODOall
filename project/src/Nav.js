import { Router,Route,NavLink } from 'react-router-dom';
import Home from './Home';
import News from './News';
import Contact from './Contact';
import About from './About';

export default class Nav extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="topnav" >
                    <NavLink to="/"  >Home</NavLink>
                    <NavLink to="/news"  >News</NavLink>
                    <NavLink to="/contact"  >Contact</NavLink>
                    <NavLink to="/about"  >About</NavLink>
                </div>
                <Routes>
                    <Router path='/' element={<Home/>} />
                    <Router path='/about' element={<About/>} />
                    <Router path='/news' element={<News/>} />
                    <Router path='/contact' element={<Contact/>} />
                </Routes>
            </React.Fragment>
        )
    }
}