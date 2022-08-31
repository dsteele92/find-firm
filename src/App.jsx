import { React, useState, useEffect, useRef } from 'react';
import Style from './app.module.scss';

import LogoLarge from './assets/logo_large.png';
import LogoSmall from './assets/logo_small.png';
import LogoWhite from './assets/THE_FIND_SQUARE_FINAL.png';
import BannerOne from './assets/banner1.jpg';

import { BsArrowDownCircle } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';

function App() {
	const [background, setBackground] = useState(1);
	const header = useRef();

	useEffect(() => {
		const handleScroll = (event) => {
			const currentHeight = 300;
			// const windowHeight = window.innerHeight;
			// console.log(header.current.style);
			// console.log(window.innerHeight);
			header.current.style.height = `${currentHeight + window.pageYOffset / 2}px`;
			header.current.style.opacity = `${1 - window.pageYOffset / 1000}`;
		};
		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
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
		window.scrollTo({
			top: window.innerHeight,
			left: 0,
			behavior: 'smooth',
		});
	};

	return (
		<div className={Style.App}>
			<section className={Style.Top}>
				{background === 1 ? (
					<div className={Style.SlidingBanner1}></div>
				) : background === 2 ? (
					<div className={Style.SlidingBanner2}></div>
				) : background === 3 ? (
					<div className={Style.SlidingBanner3}></div>
				) : (
					''
				)}
				{/* {background === 1 ? <div className={Style.SlidingBanner1}></div> : ''}
				{background === 2 ? <div className={Style.SlidingBanner2}></div> : ''}
				{background === 3 ? <div className={Style.SlidingBanner3}></div> : ''} */}
				{/* <div className={Style[`SlidingBanner${background}`]}></div> */}
				{/* <div className={Style.SlidingBanner1}></div>
				<div className={Style.SlidingBanner2}></div>
				<div className={Style.SlidingBanner3}></div> */}
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
						<p>310.401.4200</p>
						<p>andrew@thefindfirm.com</p>
						<div className={Style.Linkedin}>
							Connect with me on{' '}
							<span>
								<BsLinkedin className={Style.Icon} />
							</span>
						</div>
					</div>
					<img className={Style.LogoSmall} src={LogoSmall} alt='Find Firm LLC logo' />
					{/* <p className={Style.Slogan}>“Finding Stellar Opportunities To Advance Careers”</p> */}
				</div>
			</section>
		</div>
	);
}

export default App;
