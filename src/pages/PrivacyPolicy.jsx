import React from "react";

const PrivacyPolicy = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-6">

        {/* Header */}
        <div className="border-b border-gray-300 dark:border-gray-700 pb-6 mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Privacy Policy
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
              DEVKIJAGATRAJ Private Limited ("Company", "we", "our", or "us")
              is committed to protecting your privacy. This Privacy Policy
              describes how we collect, use, and safeguard your information
              when you use our Software-as-a-Service (SaaS) platform and
              related services in the virtual digital assets domain.
            </p>
          </div>

          {/* Definitions */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              2. Definitions
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Services:</strong> SaaS tools and applications provided by the Company.</li>
              <li><strong>User:</strong> Any individual or entity accessing or using our Services.</li>
              <li><strong>Platform:</strong> The website or application through which Services are delivered.</li>
            </ul>
          </div>

          {/* Information We Collect */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              3. Information We Collect
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Personal Information:</strong> Name, email address, phone number, billing address, and payment details.</li>
              <li><strong>Business Information:</strong> Company details, transaction data, and service usage records.</li>
              <li><strong>Technical Information:</strong> IP address, device details, browser type, and log data.</li>
            </ul>
          </div>

          {/* Use of Information */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              4. Use of Information
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>To provide, maintain, and improve our Services</li>
              <li>To process payments and manage billing</li>
              <li>To enhance user experience and platform performance</li>
              <li>To communicate service-related updates and notices</li>
              <li>To comply with legal and regulatory obligations</li>
            </ul>
          </div>

          {/* Data Sharing */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              5. Data Sharing & Disclosure
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Service Providers:</strong> Trusted vendors supporting hosting, payments, and support.</li>
              <li><strong>Legal Requirements:</strong> When required by law or valid legal process.</li>
              <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or asset sale.</li>
            </ul>
          </div>

          {/* Data Retention */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              6. Data Retention
            </h2>
            <p>
              We retain personal and business data only for as long as necessary
              to fulfill the purposes described in this policy and comply with
              legal obligations.
            </p>
          </div>

          {/* Security */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              7. Security
            </h2>
            <p>
              We implement appropriate technical and organizational safeguards
              to protect your information. However, no method of transmission
              over the internet is completely secure.
            </p>
          </div>

          {/* User Rights */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              8. Your Rights
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>The right to access, update, or delete your personal information</li>
              <li>The right to request restrictions on data processing</li>
              <li>The right to withdraw consent where applicable</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              9. Contact Information
            </h2>
            <p>
              DEVKIJAGATRAJ Private Limited<br />
              Email: <span className="font-medium">DEVKIJAGATRAJ@gmail.com</span>
            </p>
          </div>

          {/* Acknowledgment */}
    
          <div>
                   <hr />
            <p>
              By using our Services, you acknowledge that you have read, understood,
              and agree to be bound by this Privacy Policy.
            </p>
          </div>


        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
