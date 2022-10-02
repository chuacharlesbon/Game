import React from 'react'

export default function Home(){

	const test = 'test'

	return(
		
	<>
		<div className='w-full h-full flex items-center justify-center bg-secondary-200'>
		  <img alt='sf' className='object-contain' src='https://i0.wp.com/www.reimarufiles.com/wp-content/uploads/2017/01/special-force-character.png?resize=540%2C389' />
		  <p className='hidden'>{test}</p>
		</div>
	</>

		)
}