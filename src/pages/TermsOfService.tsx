import React from 'react';

export default function TermsOfService() {
  return (
    <div className="bg-slate-50 py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 bg-white p-8 sm:p-12 rounded-3xl shadow-sm border border-slate-100">
        <h1 className="text-4xl font-bold text-slate-900 mb-8">Terms of Service</h1>
        
        <div className="prose prose-slate max-w-none space-y-6 text-slate-600">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          
          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing and using JobFlowPro ("we", "our", or "us"), you agree to be bound by these Terms of Service. If you do not agree to these terms, you may not use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">2. Description of Service</h2>
            <p>
              JobFlowPro provides an automated booking and job management system for local service businesses. We reserve the right to modify or discontinue any aspect of our service at any time.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">3. User Accounts</h2>
            <p>
              You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account. You must notify us immediately of any unauthorized use of your account.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">4. Prohibited Conduct</h2>
            <p>
              You agree not to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Use the service for any illegal purpose</li>
              <li>Interfere with or disrupt the service or servers</li>
              <li>Attempt to gain unauthorized access to any part of the service</li>
              <li>Transmit any viruses or malicious code</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">5. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, JobFlowPro shall not be liable for any indirect, incidental, special, or consequential damages resulting from the use or inability to use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">6. Governing Law</h2>
            <p>
              These Terms of Service shall be governed by and construed in accordance with the laws of the United Kingdom.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">7. Contact Us</h2>
            <p>
              If you have any questions about these Terms of Service, please contact us at support@jobflowpro.com.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
