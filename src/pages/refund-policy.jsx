import React from "react";

const RefundPolicy = () => {
    return (
        <section className="bg-gray-50 dark:bg-gray-900 pt-24 pb-20">
            <div className="max-w-4xl mx-auto px-6">

                {/* Header */}
                <div className="border-b border-gray-300 dark:border-gray-700 pb-6 mb-10">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                        Refund Policy
                    </h1>
                    <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                        Effective Date: 01 November 2024
                    </p>
                </div>

                {/* Content */}
                <div className="space-y-10 text-gray-700 dark:text-gray-300 leading-relaxed">

                    {/* Intro */}
                    <div>
                        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                            1. Refund Terms
                        </h2>
                        <p>
                            This Refund Policy applies to services provided by
                            <strong> DEVKIJAGATRAJ Limited </strong>
                            ("Company", "we", "our", or "us"). By using our Services, you agree
                            to the refund terms outlined below.
                        </p>
                    </div>

                    {/* One-Time Payments */}
                    <div>
                        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                            2. One-Time Payments
                        </h2>
                        <p>
                            All services that require a one-time payment are strictly
                            non-refundable. Once a payment has been successfully completed
                            for such services, no refund requests will be entertained under
                            any circumstances.
                        </p>
                    </div>

                    {/* Subscription-Based Services */}
                    <div>
                        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                            3. Subscription-Based Services
                        </h2>
                        <p className="mb-3">
                            For subscription-based services, any disputes or refund requests
                            must be raised within <strong>seven (7) days</strong> of the charge
                            being applied. After this period, we reserve the right to deny
                            refund requests.
                        </p>
                        <p>
                            Approved refunds for cancelled subscription services will be
                            credited to the customer’s bank account within <strong>7 business days</strong>,
                            after deducting charges for the period during which the service was used.
                        </p>
                    </div>

                    {/* Payment Processing */}
                    <div>
                        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                            4. Payment Processing
                        </h2>
                        <p>
                            Refunds may be processed through third-party payment service
                            providers. Users agree to comply with the terms and conditions
                            of such providers in addition to this Refund Policy.
                        </p>
                    </div>

                    {/* Late Payments */}
                    <div>
                        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                            5. Late Payments
                        </h2>
                        <p>
                            Failure to make payments on time may result in suspension or
                            termination of your account and access to our Services. Such
                            delays may also impact your eligibility for refunds.
                        </p>
                    </div>

                    {/* Taxes */}
                    <div>
                        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                            6. Taxes
                        </h2>
                        <p>
                            Refunds will be processed for the amount paid minus any
                            applicable taxes, unless otherwise required by law.
                        </p>
                    </div>

                    {/* Contact */}
                    <div>
                        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                            7. Contact Information
                        </h2>
                        <p className="mb-3">
                            For any questions or concerns regarding this Refund Policy,
                            please contact us:
                        </p>
                        <p><strong>Email:</strong> DEVKIJAGATRAJ@gmail.com</p>
                        <p className="mt-2">
                            <strong>Address:</strong><br />
                            Behind Bharat Petrol Pump
                            <br />
                            Jhansi – 284001
                            <br />
                            Uttar Pradesh, India
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default RefundPolicy;
