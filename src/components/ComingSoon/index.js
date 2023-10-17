import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import * as IoIcon from 'react-icons/io5';
import CountDownTwo from '../CountDown/index-2';

function ComingSoon({ comingSoonItems }) {
    const [timerDays, setTimerDays] = useState();
    const [timerHours, setTimerHours] = useState();
    const [timerMinutes, setTimerMinutes] = useState();
    const [timerSeconds, setTimerSeconds] = useState();

    let interval;

    const startTimer = () => {
        const countDownDate = new Date('January 21,2023').getTime();

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
        <div className="coming-soon border-b border-[#ededed] xl:pt-[105px] lg:pt-[85px] md:pt-[65px] pt-[35px] xl:pb-[120px] lg:pb-[100px] md:pb-[80px] pb-[50px]">
            <div className="container">
                <div className="grid grid-cols-12">
                    <div className="lg:col-span-6 md:col-span-9 col-span-12">
                        <h2 className="lm:text-[60px] leading-[1.1] text-[34px] mb-[20px]">
                            {comingSoonItems[0]?.title}
                        </h2>
                        <p className="lg:max-w-[530px] mb-[60px]">
                            {comingSoonItems[0]?.desc}
                        </p>
                        <h3 className="lm:text-[18px] text-[16px] mb-[30px]">
                            {comingSoonItems[0]?.countTitle}
                        </h3>
                        <CountDownTwo
                            timerDays={timerDays}
                            timerHours={timerHours}
                            timerMinutes={timerMinutes}
                            timerSeconds={timerSeconds}
                        />
                        <div className="social-link flex items-center pt-[60px]">
                            <h2 className="lm:text-[16px] text-[15px] font-normal md:pr-[65px] pr-[45px]">
                                {comingSoonItems[0]?.socialTitle}
                            </h2>
                            <ul className="flex">
                                {comingSoonItems[0]?.socialList?.map(
                                    (items) => {
                                        const Social = IoIcon[items.socialIcon];
                                        return (
                                            <li
                                                className="mr-[25px] last:mr-0"
                                                key={items.id}
                                            >
                                                <Link href={items?.path}>
                                                    <a className="transition-all hover:text-primary">
                                                        <Social />
                                                    </a>
                                                </Link>
                                            </li>
                                        );
                                    }
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

ComingSoon.propTypes = {
    comingSoonItems: PropTypes.instanceOf(Object).isRequired,
};

export default ComingSoon;
