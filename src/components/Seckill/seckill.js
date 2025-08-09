import React, { useState, useEffect } from 'react';
import './seckill.css';
function SeckillSection() {
    const [timeLeft, setTimeLeft] = useState({ hours: 2, minutes: 0, seconds: 0 });

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prev => {
                const { hours, minutes, seconds } = prev;
                let newSeconds = seconds - 1;
                let newMinutes = minutes;
                let newHours = hours;

                if (newSeconds < 0) {
                    newSeconds = 59;
                    newMinutes -= 1;
                }

                if (newMinutes < 0) {
                    newMinutes = 59;
                    newHours -= 1;
                }

                if (newHours < 0) {
                    clearInterval(timer);
                    return { hours: 0, minutes: 0, seconds: 0 };
                }

                return { hours: newHours, minutes: newMinutes, seconds: newSeconds };
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="seckill-section">
            <div className="seckill-header">
                <div className="seckill-title">
                    <span className="title">京东秒杀</span>
                    <div className="countdown">
                        <span>{timeLeft.hours.toString().padStart(2, '0')}</span>:
                        <span>{timeLeft.minutes.toString().padStart(2, '0')}</span>:
                        <span>{timeLeft.seconds.toString().padStart(2, '0')}</span>
                    </div>
                </div>
                <div className="more-link">更多 <i className="arrow-right"></i></div>
            </div>

            <div className="seckill-products">
                {[1, 2, 3, 4].map(id => (
                    <div key={id} className="seckill-product">
                        <div className="product-image">
                            <img src={require(`./${id}.jpg`)} alt={`Product ${id}`} className='image' />
                        </div>
                        <div className="product-price">
                            <span className="current-price">¥{(99 - id * 10).toFixed(2)}</span>
                            <span className="original-price">¥{(8999 - id * 10).toFixed(2)}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default SeckillSection;
