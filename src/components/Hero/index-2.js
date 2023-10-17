import Link from 'next/link';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import SwiperComps, { Slide } from '../SwiperComps';

function HeroTwo({ heroBoxedItems, settings }) {
    const [activeIdx, setActiveId] = useState(0);
    const onSlideChange = (SwiperComps) => {
        const { activeIndex } = SwiperComps;
        setActiveId(activeIndex);
    };
    const onSlideChangeTransitionStart = () => {
        setActiveId(-1);
    };

    const onSlideChangeTransitionEnd = (SwiperComps) => {
        const { activeIndex } = SwiperComps;
        setActiveId(activeIndex);
    };

    settings = {
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        pagination: false,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        slidesPerView: 1,
        spaceBetween: 0,
        onSlideChange,
        onSlideChangeTransitionStart,
        onSlideChangeTransitionEnd,
    };

    return (
        <div className="hero-area">
            <div className="container-fluid xl:px-[100px] px-[15px] mt-[15px]">
                <SwiperComps settings={settings}>
                    {heroBoxedItems?.map((heroBoxedItem, idx) => (
                        <Slide key={heroBoxedItem.id}>
                            <div className="bg-[#f1f1f1] md:h-[600px] h-[500px] flex items-center">
                                <div className="container xl:pl-[70px]">
                                    <div className="grid grid-cols-12">
                                        <div className="sm:col-span-6 col-span-12 lg:ml-[60px] pl-[15px]">
                                            <div className="hero-content">
                                                <motion.span
                                                    className="text-[#999999] block mb-[20px]"
                                                    initial="hidden"
                                                    animate={
                                                        idx === activeIdx
                                                            ? 'visible'
                                                            : 'exit'
                                                    }
                                                    exit="exit"
                                                    variants={{
                                                        hidden: {
                                                            y: '100%',
                                                            opacity: 0,
                                                        },
                                                        visible: {
                                                            y: '0',
                                                            opacity: 1,
                                                            transition: {
                                                                duration: 1,
                                                                delay: 0.3,
                                                            },
                                                        },
                                                        exit: {
                                                            y: '100%',
                                                            opacity: 0,
                                                            transition: {
                                                                duration: 1,
                                                                delay: 0.3,
                                                            },
                                                        },
                                                    }}
                                                >
                                                    {heroBoxedItem.subtitle}
                                                </motion.span>
                                                <motion.h2
                                                    className="relative tracking-full lg:text-[60px] md:text-[40px] text-[30px] leading-[1.1]"
                                                    dangerouslySetInnerHTML={{
                                                        __html: heroBoxedItem.title,
                                                    }}
                                                    initial="hidden"
                                                    animate={
                                                        idx === activeIdx
                                                            ? 'visible'
                                                            : 'exit'
                                                    }
                                                    exit="exit"
                                                    variants={{
                                                        hidden: {
                                                            y: '100%',
                                                            opacity: 0,
                                                        },
                                                        visible: {
                                                            y: '0',
                                                            opacity: 1,
                                                            transition: {
                                                                duration: 1,
                                                                delay: 0.6,
                                                            },
                                                        },
                                                        exit: {
                                                            y: '100%',
                                                            opacity: 0,
                                                            transition: {
                                                                duration: 1,
                                                                delay: 0.6,
                                                            },
                                                        },
                                                    }}
                                                />
                                                <motion.div
                                                    className="lg:mt-[80px] mt-[20px]"
                                                    initial="hidden"
                                                    animate={
                                                        idx === activeIdx
                                                            ? 'visible'
                                                            : 'exit'
                                                    }
                                                    exit="exit"
                                                    variants={{
                                                        hidden: {
                                                            y: '100%',
                                                            opacity: 0,
                                                        },
                                                        visible: {
                                                            y: '0',
                                                            opacity: 1,
                                                            transition: {
                                                                duration: 1,
                                                                delay: 0.9,
                                                            },
                                                        },
                                                        exit: {
                                                            y: '100%',
                                                            opacity: 0,
                                                            transition: {
                                                                duration: 1,
                                                                delay: 0.9,
                                                            },
                                                        },
                                                    }}
                                                >
                                                    <Link href="/products/left-sidebar">
                                                        <a className="text-[18px] leading-[18px] transition-all hover:text-primary">
                                                            Discover now
                                                        </a>
                                                    </Link>
                                                </motion.div>
                                            </div>
                                        </div>
                                        <div className="sm:col-span-6 col-span-12">
                                            <div className="hero-img lg:absolute lg:right-[50px]">
                                                <img
                                                    className="object-cover object-center"
                                                    src={heroBoxedItem.image}
                                                    alt={heroBoxedItem.imageAlt}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Slide>
                    ))}
                    <div className="swiper-button-wrap hidden lg:block">
                        <div className="swiper-button-prev lg:!left-[15px] after:!text-[26px] after:!text-[#666666]" />
                        <div className="swiper-button-next lg:!right-[15px] after:!text-[26px] after:!text-[#666666]" />
                    </div>
                </SwiperComps>
            </div>
        </div>
    );
}

HeroTwo.propTypes = {
    heroBoxedItems: PropTypes.instanceOf(Object).isRequired,
    settings: PropTypes.shape({
        slidesPerView: PropTypes.number,
        spaceBetween: PropTypes.number,
        breakpoints: PropTypes.shape({}),
    }),
};

export default HeroTwo;
