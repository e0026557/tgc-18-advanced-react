import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import SubmittedForm from './pages/SubmittedForm';
import PostPage from './pages/PostPage';

function App() {
	return (
		<React.Fragment>
			{/* The Routes, Route and Link components only work in <Router> */}
			<Router>
				<nav>
					<ul>
						<li>
							<Link to='/'>Home</Link>
						</li>
						<li>
							<Link to='/about'>About</Link>
						</li>
						<li>
							<Link to='/contact'>Contact</Link>
						</li>
						<li>
							<Link to='/posts'>Posts</Link>
						</li>
					</ul>

					{/* The <Routes> contains the pages */}
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/about' element={<AboutUs />} />
						<Route path='/contact' element={<ContactUs />} />
						<Route
							path='/form-submitted'
							element={<SubmittedForm />}
						/>
						<Route
							path='/posts'
							element={<PostPage />}
						/>
					</Routes>
				</nav>
			</Router>
		</React.Fragment>
	);
}

export default App;
