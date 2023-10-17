import PropTypes from 'prop-types';

function CountDownTwo({ timerDays, timerHours, timerMinutes, timerSeconds }) {
    return (
        <div className="timer-container">
            <div className="timer">
                <div className="clock flex text-center">
                    <div className="mr-[40px]">
                        <h4 className="font-prata text-primary lm:text-[48px] text-[30px]">
                            {timerDays}
                        </h4>
                        <span className="capitalize font-normal">Days</span>
                    </div>
                    <div className="mr-[40px]">
                        <h4 className="font-prata text-primary lm:text-[48px] text-[30px]">
                            {timerHours}
                        </h4>
                        <span className="capitalize font-normal">Hours</span>
                    </div>
                    <div className="mr-[40px]">
                        <h4 className="font-prata text-primary lm:text-[48px] text-[30px]">
                            {timerMinutes}
                        </h4>
                        <span className="capitalize font-normal">Minutes</span>
                    </div>
                    <div>
                        <h4 className="font-prata text-primary lm:text-[48px] text-[30px]">
                            {timerSeconds}
                        </h4>
                        <span className="capitalize font-normal">Seconds</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

CountDownTwo.propTypes = {
    timerDays: PropTypes.number,
    timerHours: PropTypes.number,
    timerMinutes: PropTypes.number,
    timerSeconds: PropTypes.number,
};

CountDownTwo.defaultProps = {
    timerDays: 10,
    timerHours: 10,
    timerMinutes: 10,
    timerSeconds: 10,
};

export default CountDownTwo;
