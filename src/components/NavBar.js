import React, { useState, Fragment } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {FormControl, Form, Navbar, Nav, Container, Button } from 'react-bootstrap'
import { Menu, Transition } from '@headlessui/react'
import Image from 'react-bootstrap/Image'
import rpg from '../images/gun.png'

export default function NavBar() {

	const [location, setLocation] = useState('')
	const navigate = useNavigate()

	return(

	<Navbar className="bg-secondary-100 px-2 py-6 fixed top-0 w-full" expand="lg">
	  <Container fluid className='flex flex-row'>
	    <Navbar.Brand as={Link} to="/" className="items-center justify-start laptop:justify-center flex flex-row w-1/3 tabletWide:w-1/12 laptop:w-2/12">
	    	<Image src={rpg} alt="RPG logo" className="h-12 w-12 rounded-full mx-2 bg-white"/>
	    	<span className="text-yellow-100 font-bold ml-2 text-2xl phone:hidden laptop:inline">CG GAMES PH</span>
	    </Navbar.Brand>
	    <Navbar.Toggle aria-controls="navbarScroll" />
	    <Navbar.Collapse id="navbarScroll" className='flex flex-row w-2/3 tabletWide:w-11/12 laptop:w-10/12 justify-end tabletWide:justify-between items-center'>
	      <Nav
	        className="flex flex-row phone:hidden tabletWide:flex"
	        style={{ maxHeight: '100px' }}
	        navbarScroll
	      >
	        <Nav.Link as={Link} to="/"  className="text-center text-mulish text-white bg-yellow-100 font-bold rounded-md py-2 m-2 w-24 background-play">Home</Nav.Link>
	        <Nav.Link as={Link} to="/use_maps" className="text-center text-mulish text-white bg-yellow-100 font-bold rounded-md p-2 m-2 w-24 background-play">Use Maps</Nav.Link>
	        <Menu as="div" className="relative inline-block text-left phone:hidden laptop:inline-block">
	          <div>
	            <Menu.Button
	              className='text-mulish text-white bg-yellow-100 font-bold rounded-md p-2 m-2 w-24 background-play'
	            >
	              More
	            </Menu.Button>
	          </div>
	          <Transition
	            as={Fragment}
	            enter="transition ease-out duration-100"
	            enterFrom="transform opacity-0 scale-95"
	            enterTo="transform opacity-100 scale-100"
	            leave="transition ease-in duration-75"
	            leaveFrom="transform opacity-100 scale-100"
	            leaveTo="transform opacity-0 scale-95"
	          >
	            <Menu.Items
	              className='absolute right-0 mt-1 p-1 origin-top-right font-poppins bg-yellow-100 rounded-md shadow-lg border border-secondary-200 w-56'
	            >
	              <Menu.Item>
	                {({ active }) => (
	                  <p
	                    className={`${
	                      active ? 'bg-yellow-400 text-secondary-100' : 'text-white'
	                    }  group flex rounded-md items-center w-full px-4 py-3 text-base`}
	                  >
	                    More
	                  </p>
	                )}
	              </Menu.Item>
	              <Menu.Item>
	                {({ active }) => (
	                  <p
	                    className={`${
	                      active ? 'bg-yellow-400 text-secondary-100' : 'text-white'
	                    }  group flex rounded-md items-center w-full px-4 py-3 text-base`}
	                  >
	                    More
	                  </p>
	                )}
	              </Menu.Item>
	              <Menu.Item>
	                {({ active }) => (
	                  <p
	                    className={`${
	                      active ? 'bg-yellow-400 text-secondary-100' : 'text-white'
	                    }  group flex rounded-md items-center w-full px-4 py-3 text-base`}
	                  >
	                    More
	                  </p>
	                )}
	              </Menu.Item>
	            </Menu.Items>
	          </Transition>
	        </Menu>
	        <Menu as="div" className="relative inline-block text-left phone:hidden laptop:inline-block">
	          <div>
	            <Menu.Button
	              className='text-mulish text-white bg-yellow-100 font-bold rounded-md p-2 m-2 w-24 background-play'
	            >
	              More
	            </Menu.Button>
	          </div>
	          <Transition
	            as={Fragment}
	            enter="transition ease-out duration-100"
	            enterFrom="transform opacity-0 scale-95"
	            enterTo="transform opacity-100 scale-100"
	            leave="transition ease-in duration-75"
	            leaveFrom="transform opacity-100 scale-100"
	            leaveTo="transform opacity-0 scale-95"
	          >
	            <Menu.Items
	              className='absolute right-0 mt-1 p-1 origin-top-right font-poppins bg-yellow-100 rounded-md shadow-lg border border-secondary-200 w-56'
	            >
	              <Menu.Item>
	                {({ active }) => (
	                  <p
	                    className={`${
	                      active ? 'bg-yellow-400 text-secondary-100' : 'text-white'
	                    }  group flex rounded-md items-center w-full px-4 py-3 text-base`}
	                  >
	                    More
	                  </p>
	                )}
	              </Menu.Item>
	              <Menu.Item>
	                {({ active }) => (
	                  <p
	                    className={`${
	                      active ? 'bg-yellow-400 text-secondary-100' : 'text-white'
	                    }  group flex rounded-md items-center w-full px-4 py-3 text-base`}
	                  >
	                    More
	                  </p>
	                )}
	              </Menu.Item>
	              <Menu.Item>
	                {({ active }) => (
	                  <p
	                    className={`${
	                      active ? 'bg-yellow-400 text-secondary-100' : 'text-white'
	                    }  group flex rounded-md items-center w-full px-4 py-3 text-base`}
	                  >
	                    More
	                  </p>
	                )}
	              </Menu.Item>
	            </Menu.Items>
	          </Transition>
	        </Menu>
	        <Nav.Link as={Link} to="/register"  className="text-center text-mulish text-white bg-yellow-100 font-bold rounded-md p-2 m-2 w-24 background-play">Register</Nav.Link>
	        <Nav.Link as={Link} to="/login" className="text-center text-mulish text-white bg-yellow-100 font-bold rounded-md p-2 m-2 w-24 background-play">Login</Nav.Link>
	      </Nav>
	      <Form className="d-flex" onSubmit={() => navigate(`/search_results/${location}`, { replace: true })}>
	        <FormControl
	          type="search"
	          placeholder="Search by Location"
	          className="me-2 px-2 py-1 rounded"
	          aria-label="Search"
	          value={location}
	          onChange={e => setLocation(e.target.value)}
	        />
	        <Button as={Link} className="text-mulish text-white bg-yellow-100 font-bold rounded-md py-2 px-4 m-2 w-24 background-play" to={`/search_results/${location}`}>Search</Button>
	      </Form>
	    </Navbar.Collapse>
	  </Container>
	</Navbar>

		)
}