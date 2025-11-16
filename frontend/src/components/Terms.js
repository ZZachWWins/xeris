// Terms.js - Terms of Service and Conditions for Xeris Web Co.
import React from 'react';
import { Link } from 'react-router-dom';

function Terms() {
  return (
    <section className="terms-section">
      <div className="container">
        <h1 className="terms-title">Terms of Service and Conditions</h1>
        <p className="terms-date">Last Updated: November 15, 2025</p>
        
        <div className="terms-content">
          <section className="terms-section">
            <h2>1. Introduction</h2>
            <p>
              Welcome to Xeris Web Co. ("Xeris," "we," "us," or "our"). These Terms of Service and Conditions ("Terms") govern your access to and use of our website at xerisweb.com (the "Site"), our blockchain network, XerisCoin ($XERIS), testnet services, and related offerings (collectively, the "Services"). By accessing or using the Services, you agree to be bound by these Terms. If you do not agree, you may not use the Services.
            </p>
            <p>
              Our Services include, but are not limited to, the XerisCoin Layer 1 blockchain (patent-pending US Provisional #63/887,511), testnet beta access, token acquisition via pump.fun, and related tools for tokenized real-world assets (RWAs).
            </p>
          </section>

          <section className="terms-section">
            <h2>2. Acceptance of Terms</h2>
            <p>
              These Terms form a binding legal agreement between you and Xeris Web Co., a Texas-based entity. By using the Services, you represent that you are of legal age (18+ in most jurisdictions) and have the authority to enter this agreement. You must comply with all applicable laws, including U.S. export controls and sanctions.
            </p>
          </section>

          <section className="terms-section">
            <h2>3. Description of Services</h2>
            <p>
              The Services enable users to interact with our patent-pending triple consensus blockchain (PoW, PoH, PoS) for high-throughput transactions (10,000+ TPS target). This includes testnet participation, token staking, RWA tokenization, and integrations like the Activate Supplements partnership. Tokens like $XERIS are utility assets; they are not securities or investments.
            </p>
            <p>
              Beta access requires NDA signing and is provided "as is." Mainnet launch is targeted for Q1 2026, subject to delays. The alpha node software (xrs-node) is provided for local testing only and may not be used for production or networked environments without prior written consent.
            </p>
          </section>

          <section className="terms-section">
            <h2>4. User Responsibilities</h2>
            <p>
              You agree to: (a) provide accurate information; (b) maintain the security of your accounts and private keys; (c) not engage in illegal activities, spam, or abuse; (d) comply with any NDAs for beta access; and (e) not reverse-engineer, decompile, or disrupt the Services.
            </p>
            <p>
              Prohibited uses include money laundering, fraud, or unauthorized token distribution. Violations may result in account suspension or termination.
            </p>
          </section>

          <section className="terms-section">
            <h2>5. Intellectual Property</h2>
            <p>
              All content, code, trademarks, and innovations (including our patent-pending technology) are owned by Xeris Web Co. You are granted a limited, non-exclusive license to use the Services for personal, non-commercial purposes. No rights are transferred. Unauthorized use may lead to legal action.
            </p>
          </section>

          <section className="terms-section">
            <h2>6. Disclaimer and Limitation of Liability</h2>
            <p>
              The Services are provided "as is" without warranties of any kind, express or implied. We disclaim liability for losses due to hacks, market volatility, or network failures. In no event shall Xeris be liable for indirect, consequential, or punitive damages. Total liability is limited to $100 USD.
            </p>
            <p>
              Cryptocurrency involves risks; tokens may lose value. Past performance (e.g., testnet TPS) does not guarantee future results. Consult professionals before participating.
            </p>
          </section>

          <section className="terms-section">
            <h2>7. Governing Law and Dispute Resolution</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of the State of Texas, without regard to its conflict of laws principles. Any dispute, claim, or controversy arising out of or relating to these Terms or the Services (each, a "Dispute") shall be resolved exclusively through binding arbitration, except as provided below.
            </p>
            <p>
              <strong>Arbitration Agreement.</strong> You and Xeris agree that all Disputes shall be resolved solely through final and binding arbitration administered by the American Arbitration Association ("AAA") under its Consumer Arbitration Rules, as modified by these Terms. The arbitration shall be conducted on an individual basis and not as a class, collective, or representative action. You expressly waive any right to participate in or represent a class action, private attorney general action, or other representative proceeding. The arbitrator shall have exclusive authority to resolve any Dispute relating to the enforceability of this arbitration provision, including the scope of this arbitration agreement.
            </p>
            <p>
              <strong>Arbitration Procedures.</strong> The arbitration will be conducted remotely via videoconference or telephonically, unless otherwise agreed. The arbitrator's award shall be final and binding, except for a limited right of appeal under the Federal Arbitration Act. Judgment on the award may be entered in any court having jurisdiction. You agree to pay your own costs and fees unless the arbitrator awards otherwise under applicable law.
            </p>
            <p>
              <strong>Company's Right to Seek Injunctive Relief.</strong> Notwithstanding the foregoing, Xeris reserves the right to seek equitable relief, including temporary or permanent injunctive relief, in any court of competent jurisdiction to protect its intellectual property rights, enforce confidentiality obligations, or prevent irreparable harm, without first resorting to arbitration. Such actions shall not waive Xeris's right to arbitrate other Disputes.
            </p>
            <p>
              <strong>Batch Arbitration.</strong> If 100 or more similar Disputes are filed against Xeris by the same or coordinated counsel, they shall be resolved through batch arbitration as described in AAA's Batch Arbitration Rules.
            </p>
            <p>
              You may opt out of this arbitration agreement within 12 hours of downloading any software provided by Xeris by emailing zachary@xerisweb.com with "Arbitration Opt-Out" in the subject line, including your name, email, and the timestamp of your software download. Opt-out is not available after 12 hours and is irrevocable thereafter.
            </p>
          </section>

          <section className="terms-section">
            <h2>8. Changes to Terms</h2>
            <p>
              We may update these Terms at any time. Continued use after changes constitutes acceptance. Check this page periodically.
            </p>
          </section>

          <section className="terms-section">
            <h2>9. Contact Information</h2>
            <p>
              Questions? Email zachary@xerisweb.com. For beta inquiries, use the Testnet Beta form.
            </p>
          </section>

          <section className="terms-section">
            <h2>10. Miscellaneous</h2>
            <p>
              These Terms constitute the entire agreement and supersede any prior agreements for alpha access. If any provision is invalid, the remainder remains effective. No waiver of rights. Force majeure events excuse performance.
            </p>
          </section>
        </div>

        <div className="terms-cta">
          <Link to="/" className="cta-button">Back to Home</Link>
        </div>
      </div>
    </section>
  );
}

export default Terms;