import React from "react";

const Terms = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-6">

        {/* Header */}
        <div className="border-b border-gray-300 dark:border-gray-700 pb-6 mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Terms and Conditions
          </h1>
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
            Effective Date: 01 November 2024
          </p>
        </div>

        {/* Content */}
        <div className="space-y-10 text-gray-700 dark:text-gray-300 leading-relaxed">

          {/* Introduction */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              1. Introduction
            </h2>
            <p>
              Welcome to <strong>DEVKIJAGATRAJ Limited</strong> ("Company", "we", "our", or "us").
              These Terms and Conditions ("Agreement") govern your use of our
              Software-as-a-Service (SaaS) platform and services related to the
              virtual digital assets business ("Services"). By accessing or
              using our Services, you agree to comply with these Terms. If you
              do not agree, please do not use our Services.
            </p>
          </div>

          {/* Definitions */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              2. Definitions
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Services:</strong> Software tools and applications provided by the Company.</li>
              <li><strong>User:</strong> Any individual or entity accessing or using the Services.</li>
              <li><strong>Platform:</strong> The website or application through which Services are delivered.</li>
            </ul>
          </div>

          {/* Account Registration */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              3. Account Registration
            </h2>
            <p className="mb-2">
              To use our Services, you must register for an account and provide
              accurate, current, and complete information.
            </p>
            <p>
              You are responsible for maintaining the confidentiality of your
              account credentials and for all activities that occur under your
              account. You must notify us immediately of any unauthorized use.
            </p>
          </div>

          {/* Acceptable Use */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              4. Acceptable Use
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Violate any applicable laws or third-party rights</li>
              <li>Engage in fraudulent, deceptive, or abusive activities</li>
              <li>Use the Services for unlawful purposes including money laundering or fraud</li>
              <li>Attempt unauthorized access to systems or interfere with platform operations</li>
            </ul>
          </div>

          {/* Service Categories */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              5. Service Categories and Pricing
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Basic Services:</strong> Starting from ₹500, including essential tools and analysis.</li>
              <li><strong>Standard Services:</strong> ₹5,000 – ₹50,000 with advanced features and data tools.</li>
              <li><strong>Premium Services:</strong> ₹50,000 – ₹200,000 offering customized enterprise solutions.</li>
            </ul>
            <p className="mt-2">
              For detailed pricing and service customization, please contact our sales team.
            </p>
          </div>

          {/* Termination */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              6. Termination
            </h2>
            <p className="mb-2">
              You may terminate your account at any time, subject to outstanding
              payments or obligations.
            </p>
            <p>
              We may suspend or terminate your access if you violate these Terms
              or if your use poses risk to the Company or other users.
            </p>
          </div>

          {/* Liability */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              7. Limitation of Liability
            </h2>
            <p className="mb-2">
              To the fullest extent permitted by law, we are not liable for any
              indirect or consequential damages, including loss of profits or data.
            </p>
            <p>
              Our total liability is limited to the amount paid for Services in
              the three months preceding the claim.
            </p>
          </div>

          {/* Indemnification */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              8. Indemnification
            </h2>
            <p>
              You agree to indemnify and hold harmless the Company, its officers,
              employees, and affiliates from claims or damages arising from your
              misuse of the Services or violation of these Terms.
            </p>
          </div>

          {/* Governing Law */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              9. Governing Law and Dispute Resolution
            </h2>
            <p>
              These Terms are governed by the laws of Bhiwani, Haryana. Any legal
              proceedings shall fall under the jurisdiction of courts located in Bhiwani.
            </p>
          </div>

          {/* Changes */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              10. Changes to Terms
            </h2>
            <p>
              We may update these Terms from time to time. Continued use of the
              Services after changes are posted constitutes acceptance of the
              revised Terms.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              11. Contact Information
            </h2>
            <p>
              DEVKIJAGATRAJ Private Limited<br />
              Email: <span className="font-medium">DEVKIJAGATRAJ@gmail.com</span>
            </p>
          </div>

          {/* Acknowledgment */}
          <div>
            {/*  */}
            <hr />
            <p>
              By using our Services, you acknowledge that you have read,
              understood, and agree to be bound by these Terms and Conditions.
            </p>
            {/* <hr /> */}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Terms;
