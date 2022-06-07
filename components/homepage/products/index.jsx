import styles from './products.module.scss'
import useWindowSize from '../../../utils/windowSize'
import ProductBlock from './productBlock'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'

export default function Products(productsData) {

    const size = useWindowSize().width
    var visibleSlides = 2;
    if (size > 576) {
        visibleSlides = 3;
    }
    if (size > 992) {
        visibleSlides = 4;
    }
    if (size > 1366) {
        visibleSlides = 5;
    }

    const headerText = productsData.data[0];
    const productsList = productsData.data[1]

    return (
        <div className={styles.productsList}>
            <h1>
                {headerText}
            </h1>
            <CarouselProvider
                className={styles.carousel}
                naturalSlideWidth={"100%"}
                naturalSlideHeight={"100%"}
                isIntrinsicHeight={true}
                totalSlides={productsList.length}
                visibleSlides={visibleSlides}
                infinite={true}
            >
                <Slider>
                    {productsList.map(({ title, subtitle, price, to, img, id }, i) => (
                        <Slide index={id} key={i}>
                            <ProductBlock title={title} subtitle={subtitle} price={price} to={to} img={img} />
                        </Slide>
                    ))}
                </Slider>
                <span className={styles.buttonsContainer}>
                    <ButtonBack className={styles.carouselButtonL}><FontAwesomeIcon icon={faChevronLeft} /></ButtonBack>
                    <ButtonNext className={styles.carouselButtonR}><FontAwesomeIcon icon={faChevronRight} /></ButtonNext>
                </span>
            </CarouselProvider>
        </div>
    )
}


