import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { IoArrowForwardOutline } from 'react-icons/io5';
import CountDown from '../CountDown';

function OfferColection({ offerColection }) {
    const secondaryButton =
        'inline-flex items-center bg-secondary text-white leading-[38px] text-[15px] h-[38px] px-[32px] transition-all hover:bg-[#222222]';

    const [timerDays, setTimerDays] = useState();
    const [timerHours, setTimerHours] = useState();
    const [timerMinutes, setTimerMinutes] = useState();
    const [timerSeconds, setTimerSeconds] = useState();

    let interval;

    const startTimer = () => {
        const countDownDate = new Date('November 29,2022 ').getTime();

        interval = setInterval(() => {
            const now = new Date().getTime();

            const distance = countDownDate - now;

            const days = Math.floor(distance / (24 * 60 * 60 * 1000));
            const hours = Math.floor(
                (distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
            );
            const minutes = Math.floor(
                (distance % (60 * 60 * 1000)) / (1000 * 60)
            );
            const seconds = Math.floor((distance % (60 * 1000)) / 1000);

            if (distance < 0) {
                //   Stop timer
                clearInterval(interval.current);
            } else {
                //   Update timer
                setTimerDays(days);
                setTimerHours(hours);
                setTimerMinutes(minutes);
                setTimerSeconds(seconds);
            }
        });
    };

    useEffect(() => {
        startTimer();
    });

    return (
        <div className="offer-colection xl:pt-[130px] lg:pt-[80px] md:pt-[60px] pt-[35px]">
            <div className="container-fluid px-[15px]">
                <div className="bg-offer-colection bg-no-repeat bg-cover bg-center flex items-center h-[635px]">
                    <div className="container">
                        <div className="grid grid-cols-12">
                            <div className="md:col-span-7 col-span-12">
                                <div className="content">
                                    <h2
                                        className="offer-colection-title relative pb-[10px] mb-[30px] after:absolute after:left-0 after:bottom-0 after:bg-primary after:h-[4px] after:w-[70px]"
                                        dangerouslySetInnerHTML={{
                                            __html: offerColection[0].title,
                                        }}
                                    />
                                    <p className="mb-[50px]">
                                        {offerColection[0].desc}
                                    </p>
                                    <CountDown
                                        timerDays={timerDays}
                                        timerHours={timerHours}
                                        timerMinutes={timerMinutes}
                                        timerSeconds={timerSeconds}
                                    />
                                    <div className="mt-[60px]">
                                        <Link href="/">
                                            <a className={secondaryButton}>
                                                Shop Now
                                                <IoArrowForwardOutline className="text-white ml-[5px]" />
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

OfferColection.propTypes = {
    offerColection: PropTypes.instanceOf(Array).isRequired,
};

export default OfferColection;
