import moment from 'moment';
import {useEffect, useState} from 'react';

const DateAndTime = () => {
    const [time, setTime] = useState(moment().format('h:mm:ss A'));
    const date = moment().format('Do MMM YYYY');

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(moment().format('h:mm:ss A'))
        }, 1000);

        return () => {
            clearInterval(intervalId);
        }
    }, [])

    return (
        <section className='my-container flex flex-row-reverse lg:flex-row justify-between items-center -translate-y-5 lg:-translate-y-16'>
            <strong>{date}</strong>
            <strong>{time}</strong>
        </section>
    );
};

export default DateAndTime;