import { React, useState, useEffect, useRef } from 'react';
import Style from './app.module.scss';

import LogoSmall from './assets/logo_small.png';
import LogoWhite from './assets/THE_FIND_SQUARE_FINAL.png';
import Banner1 from './assets/banner1.jpg';
import Banner2 from './assets/banner2.jpg';
import Banner3 from './assets/banner3.jpg';

import { BsArrowDownCircle, BsLinkedin, BsPhone } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';

function App() {
	const [background, setBackground] = useState(1);
	const header = useRef();
	const container = useRef();

	useEffect(() => {
		const containerRef = container.current;
		const handleScroll = (event) => {
			console.log('scrolling');
			console.log(containerRef.scrollTop);

			const currentScroll = containerRef.scrollTop;

			const currentHeight = window.outerWidth > 468 ? 300 : 250;
			header.current.style.height = `${currentHeight + currentScroll / 2}px`;
			header.current.style.opacity = `${1 - currentScroll / 1000}`;
		};
		containerRef.addEventListener('scroll', handleScroll);

		return () => {
			containerRef.removeEventListener('scroll', handleScroll);
		};
	}, []);

	useEffect(() => {
		const timer = setTimeout(() => {
			setBackground(background === 3 ? 1 : background + 1);
			console.log(background);
		}, 5000);
		return () => clearTimeout(timer);
	}, [background]);

	const scrollToBottom = () => {
		console.log(window);
		console.log(header.current.style);
		container.current.scrollTo({
			top: window.outerHeight,
			left: 0,
			behavior: 'smooth',
		});
	};

	const backgroundImages = [
		{ id: 1, image: Banner1 },
		{ id: 2, image: Banner2 },
		{ id: 3, image: Banner3 },
	];

	return (
		<div className={Style.Container} ref={container}>
			<section className={Style.Top}>
				{/* {background === 1 ? (
					<div className={Style.SlidingBanner1}></div>
				) : background === 2 ? (
					<div className={Style.SlidingBanner2}></div>
				) : background === 3 ? (
					<div className={Style.SlidingBanner3}></div>
				) : (
					''
				)} */}
				{backgroundImages.map((obj) => (
					<div
						key={obj.id}
						className={background === obj.id ? Style[`Background${background}`] : Style.Background}
						// className={Style[`Background${background}`]}
						style={{ backgroundImage: `url(${obj.image})` }}></div>
				))}
				{/* <div className={Style.Background} style={{ backgroundImage: `url(${Banner1})` }}></div>
				<div className={Style.Background} style={{ backgroundImage: `url(${Banner2})` }}></div>
				<div className={Style[`Background${background}`]} style={{ backgroundImage: `url(${Banner3})` }}></div> */}
				<div className={Style.Overlay}>
					<img ref={header} className={Style.LogoLarge} src={LogoWhite} alt='Find Firm logo' />
					<div className={Style.Scroll} onClick={scrollToBottom}>
						<BsArrowDownCircle className={Style.Arrow} />
						<p className={Style.Click}>Click to scroll</p>
						<p className={Style.Tap}>Tap to scroll</p>
					</div>
				</div>
			</section>
			<section className={Style.Contact}>
				<div className={Style.Column}>
					<div className={Style.Info}>
						<h2>Andrew D. Ingalls</h2>
						<h4>Principal</h4>
						<a href='tel:3104014200'>
							<span> 310.401.4200</span>
						</a>
						<a href='mailto:andrew@thefindfirm.com'>
							<span> andrew@thefindfirm.com</span>
						</a>
						<a
							className={Style.Linkedin}
							href='https://www.linkedin.com/in/ingallsandrew/'
							target='_blank'
							rel='noopener noreferrer'>
							Connect with me on <BsLinkedin className={Style.LinkedinIcon} />
						</a>
					</div>
					<img className={Style.LogoSmall} src={LogoSmall} alt='Find Firm LLC logo' />
				</div>
			</section>
		</div>
	);
}

export default App;
