import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const PaymentForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [amount, setAmount] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('card'); // New state to track the selected payment method
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);

        if (!stripe || !elements) {
            setError('Stripe.js has not loaded yet.');
            setLoading(false);
            return;
        }

        try {
            let paymentIntent;

            if (paymentMethod === 'card') {
                const cardElement = elements.getElement(CardElement);
                const { error, token } = await stripe.createToken(cardElement);

                if (error) {
                    setError(error.message);
                    setLoading(false);
                    return;
                }

                const response = await fetch('/process_payment', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ amount: amount * 100, token: token.id })
                });
                const data = await response.json();
                paymentIntent = data;

            } else if (paymentMethod === 'upi' || paymentMethod === 'netbanking') {
                const response = await fetch('/create_payment_intent', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ amount: amount * 100, paymentMethodType: paymentMethod })
                });
                const data = await response.json();
                paymentIntent = data;
            }

            if (paymentIntent.success) {
                setSuccess(true);
                setError(null);
            } else {
                setError(paymentIntent.error);
            }
            setLoading(false);
        } catch (err) {
            setError('An error occurred. Please try again.');
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Payment Form</h2>
            {error && <div className="text-red-600 mb-4">{error}</div>}
            {success && <div className="text-green-600 mb-4">Payment Successful!</div>}
            <label className="block mb-2">
                Amount:
                <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    required
                    className="w-full p-2 border border-gray-300 rounded mt-1"
                />
            </label>
            <label className="block mb-4">
                Payment Method:
                <select
                    value={paymentMethod}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded mt-1"
                >
                    <option value="card">Credit/Debit Card</option>
                    <option value="upi">UPI</option>
                    <option value="netbanking">Net Banking</option>
                </select>
            </label>
            {paymentMethod === 'card' && (
                <label className="block mb-4">
                    Card Details:
                    <CardElement className="p-2 border border-gray-300 rounded mt-1" />
                </label>
            )}
            <button
                type="submit"
                disabled={!stripe || loading}
                className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200"
            >
                {loading ? 'Processing...' : 'Pay'}
            </button>
        </form>
    );
};

export default PaymentForm;
