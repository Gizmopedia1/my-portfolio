import { useState } from 'react'
import './Slider.scss'

import ReactDOM from 'react-dom'

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
							<p className='chevron'>⟨</p>
						</button>
						<button onClick={nextImage} className='chevron-right' alt='Image suivante'>
							<p className='chevron'>⟩</p>
						</button>
					</div>
					)
				}
				<img src={slides[currentIndex]} className='slider-image' />
			</div>
}

export default Slider