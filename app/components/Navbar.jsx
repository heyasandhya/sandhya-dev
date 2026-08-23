import { assets } from '@/asset/assets'
import Image from 'next/image'
import React from 'react'

const Navbar = () => {
	return (
		<>
			<nav className='w-full fixed px-5 lg:px-8 xl:px-[8%]  py-4 flex items-center justify-between z-50'>
				<a href="#top">
					<Image
						src={assets.logo}
						alt=''
						width={150}
						height={50}
						className='cursor-pointer'
					/>
				</a>
				<ul className='hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3'>
					<li><a className='font-ovo' href='#top'>Home</a></li>
					<li><a className='font-ovo' href='#about'>About me</a></li>
					<li><a className='font-ovo' href='#services'>Services</a></li>
					<li><a className='font-ovo' href='#work'>My Work</a></li>
					<li><a className='font-ovo' href='#contact'>Contact me</a></li>
				</ul>

				<div className="mr-8">
					<a href="#contact" className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-ovo">
						Contact
						<Image
							src={assets.arrow_icon}
							alt=''
							width={12}
							height={12}
						/>
					</a>
				</div>
			</nav>
		</>
	)
}

export default Navbar
