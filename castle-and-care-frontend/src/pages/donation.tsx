import React, { useState } from "react";
import '../styles/pages/donation.css';

const Donation: React.FC = () => {
    const [selectedFrequency, setSelectedFrequency] = useState<string>('One Time');
    const [selectedAmount, setSelectedAmount] = useState<string>('50');

    const handleFrequencyClick = (option: string) => {
        setSelectedFrequency(option);
    };

    const handleAmountClick = (option: string) => {
        setSelectedAmount(option);
    };

    return (
        <div className="container">
            <div className="donation-text">
                <h1>DONATE ONLINE</h1>
                <p>
                    Your donations helps us create lasting change by providing education,
                    supporting healthcare, empowering communities, and making a real
                    difference in the lives of those we serve.
                </p>
            </div>
            <p>Frequency</p>
            <div className="frequency-buttons">
                <button
                    className={selectedFrequency === 'One Time' ? 'selected' : ''}
                    onClick={() => handleFrequencyClick('One Time')}
                >
                    One time
                </button>
                <button
                    className={selectedFrequency === 'Monthly' ? 'selected' : ''}
                    onClick={() => handleFrequencyClick('Monthly')}
                >
                    Monthly
                </button>
            </div>
            <p>Amount</p>
            <div className="amount-buttons">
                <button
                    className={selectedAmount === '10' ? 'selected' : ''}
                    onClick={() => handleAmountClick('10')}
                >
                    $10.00
                </button>
                <button
                    className={selectedAmount === '50' ? 'selected' : ''}
                    onClick={() => handleAmountClick('50')}
                >
                    $50.00
                </button>
                <button
                    className={selectedAmount === '100' ? 'selected' : ''}
                    onClick={() => handleAmountClick('100')}
                >
                    $100.00
                </button>
                <button
                    className={selectedAmount === '200' ? 'selected' : ''}
                    onClick={() => handleAmountClick('200')}
                >
                    $200.00
                </button>
                {/*<button*/}
                {/*    className={selectedAmount === 'custom' ? 'selected' : ''}*/}
                {/*    onClick={() => handleAmountClick('custom')}*/}
                {/*>*/}
                {/*    Enter Amount*/}
                {/*</button>*/}
                <input name="myInput" className={selectedAmount === 'custom' ? 'selected' : ''}
                       placeholder="Enter Amount" onInput={() => handleAmountClick('custom')}/>
            </div>
            <div>
            <button className="donate-button">Donate</button>
            </div>
        </div>
    );
};

export default Donation;
