// eslint-disable-next-line no-unused-vars
import React, { useEffect, useRef, useState } from 'react';
import styles from './YOECC.module.css';
import peoplesitting from '../../assets/peoplesitting.jpg';

// eslint-disable-next-line react/prop-types
const CountUp = ({ end, speed = 50 }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    const interval = setInterval(() => {
                        setCount(prevCount => {
                            if (prevCount < end) {
                                return prevCount + 1;
                            } else {
                                clearInterval(interval);
                                return end;
                            }
                        });
                    }, speed); // Use speed for interval timing

                    // Stop observing once the animation has started
                    observer.unobserve(ref.current);
                }
            },
            { threshold: 0.1 } // Trigger when 10% of the element is visible
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                // eslint-disable-next-line react-hooks/exhaustive-deps
                observer.unobserve(ref.current);
            }
        };
    }, [end, speed]);

    return <h4 ref={ref} className={styles.statItemNumber}>{count}</h4>;
};

const YOECC = () => {
    return (
        <div className='YOECC'>
            <div className={styles.container}>
                <img src={peoplesitting} alt="People sitting" className={styles.image} />
                <div className={styles.stats}>
                    <div className={styles.statItem}>
                        <CountUp end={30} /><p>Years of Experience</p>
                    </div>
                    <div className={styles.statItem}>
                        <CountUp end={40} /><p>Certifications</p>
                    </div>
                    <div className={styles.statItem}>
                        <CountUp end={20} /><p>Satisfied Customers</p>
                    </div>
                    <div className={styles.statItem}>
                        <CountUp end={500} speed={0.5} /><p>Hours of Project Implementation</p>
                    </div>
                    <div className={styles.statItem}>
                        <CountUp end={1300} speed={0.01} /><p>Hours of Continuous Support</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export default YOECC;
