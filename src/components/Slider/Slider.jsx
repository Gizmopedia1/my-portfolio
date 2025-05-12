import { useState } from 'react'
import './Slider.scss'

import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const chevronLeft = <FontAwesomeIcon icon={faChevronLeft} />
const chevronRight = <FontAwesomeIcon icon={faChevronRight} />

function Slider ({slides}) {
	const [currentIndex, setCurrentIndex] = useState(0);

	const prevImage = () => {
		const isFirstSlide = currentIndex === 0;
		const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
		setCurrentIndex(newIndex);
	}
	const nextImage = () => {
		const isLastSlide = currentIndex === slides.length - 1;
		const newIndex = isLastSlide ? 0 : currentIndex + 1;
		setCurrentIndex(newIndex)
	}

	const hasMultipleSlides = slides.length > 1;

	return <div className='slider'>
				{hasMultipleSlides && (
					<div className='chevron-flex'>
						<button onClick={prevImage} className='chevron-left' alt='Image précedente'>
							{chevronLeft}
						</button>
						<button onClick={nextImage} className='chevron-right' alt='Image suivante'>
							{chevronRight}
						</button>
					</div>
					)
				}
				<img src={slides[currentIndex]} className='slider-image' />
			</div>
}

export default Slider