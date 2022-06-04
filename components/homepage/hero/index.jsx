import styles from "./hero.module.scss"
import { CarouselProvider, Slider, Slide, DotGroup } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import Image from 'next/image'

export default function Hero(heroData) {
    return (
        <div className={styles.hero}>
            <div>
                <CarouselProvider
                    className={styles.carousel}
                    naturalSlideWidth={"100%"}
                    naturalSlideHeight={"100%"}
                    isIntrinsicHeight={true}
                    totalSlides={heroData.data.length}
                    visibleSlides={1}
                    lockOnWindowScroll={true}
                    isPlaying={true}
                    infinite={true}
                >
                    <Slider>
                        {heroData.data.map((item, i) => (
                            <Slide key={i} index={i} className={styles.slide}>
                                <Image className={styles.heroImage}
                                    draggable="false"
                                    src={item.image}
                                    key={i}
                                    alt={i}
                                    objectfit={"cover"}
                                />
                                {(heroData.data.length > 1) && <DotGroup className={styles.carouselDots}></DotGroup>}
                                <span className={item.alignRight ? styles.alignRight : ''}>
                                    <span className={item.primaryColor ? styles.primaryColor : ''}>
                                        <div className={styles.textContainer}>
                                            <h1>
                                                {item.headerText}
                                            </h1>
                                            <p>
                                                {item.subHeaderText}
                                            </p>
                                            <button className={item.buttonPrimary ? styles.buttonPrimary : styles.shopBtn}>
                                                {item.buttonText}
                                            </button>
                                        </div>
                                    </span>
                                </span>
                            </Slide>
                        ))}
                    </Slider>
                </CarouselProvider>
            </div>
        </div>
    )
}