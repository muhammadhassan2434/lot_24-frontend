import React from "react"; 
import Footer from "../components/Footer/Footer";
import TopNavbar from "../components/TopNavbar/TopNavbar";
import News from "../components/News/News";

// Reusable Section Component
const Section = ({ title, children }) => (
  <section className="mb-6">
    <h2 className="text-xl font-semibold mb-2">{title}</h2>
    {children}
  </section>
);

// Reusable List Component
const List = ({ items, type = "decimal" }) => (
  <ol className={`list-${type} pl-6 mb-4`}>
    {items.map((item, index) => (
      <li key={index}>{item}</li>
    ))}
  </ol>
);

const Condition = () => {
  return (
    <>
      <TopNavbar />
      <div className="bg-white rounded-lg p-8 shadow-lg w-full container mx-auto my-4 max-w-[1280px] 2xl:my-[50px]">
        <h1 className="text-3xl font-bold mb-8">
          Lot24 B2B Wholesale Trading Platform Terms and Conditions
        </h1>
        <hr className="my-4 2xl:my-8 outline-[#f29d00]" />

        {/* Section 1 */}
        <Section title="1 General Provisions">
          <List
            items={[
              "The payment operator of https://Lot24.co.uk and https://Lot24.com is Lot24 Ltd, registered in the UK, Rotherham.",
              "The owner of the Lot24 trademark and Lot24 trading platform itself is Lot24 Ltd (hereinafter Lot24) registered in the UK, Unit 4E, Enterprise Court, Rotherham, S63 5DB, Company No. 09582404.",
              "Access to the Lot24 platform is prepaid, in accordance with 2 of these terms and conditions.",
              "All declarations of intent and contracts submitted through Lot24 are executed directly and entirely between the users of the platform, outside of it. Lot24 is therefore only a platform of communication between users, not a party to the deals or contracts clinched between them.",
              "Upon registration, the user accepts the terms and conditions of Lot24 B2B wholesale trading platform.",
            ]}
          />
        </Section>

        {/* Section 2 */}
        <Section title="2 Registration and Custom Database">
          <List
            items={[
              "The user can register by completing the application form available at the website. Upon registration, a user accepts these terms and conditions. The user is allowed to utilize Lot24 after completing the payment of the subscription fee.",
              "Lot24 rejects any claims for registration or activation of the user's account. Lot24 reserves the right to refuse the conclusion of the contract without giving any reasons, in particular because of:",
            ]}
          />
          <List
            items={[
              "Giving false information during registration;",
              "Doubts about the legitimacy and legal existence of a user;",
              "Doubts or suspicion about the credibility and solvency of a user;",
              "Suspicion of fraudulent conduct on the Lot24 platform or suspicion of competitive activity;",
              "Violation of Lot24 terms and conditions.",
            ]}
            type="disc"
          />
        </Section>

        {/* Section 3 */}
        <Section title="3 Access, User Identification, and Password">
          <List
            items={[
              "User ensures that the username and password are protected against unauthorized access by third parties. In particular, a user undertakes not to share this information with people who are not users in the sense of 2, or who are not assigned to a user's company (the extended right of access).",
              "Any unauthorized use of username or password must be immediately reported to Lot24. User is responsible for the unauthorized use of his or her login and password unless they prove that the unauthorized access has been caused due to factors for which Lot24 bears the risk.",
            ]}
          />
        </Section>

        {/* Section 4 */}
        <Section title="4 Lot24 Services">
          <List
            items={[
              "Lot24 shall offer diverse types of services according to their defined terms and conditions, and services that have been regulated in additional agreements between Lot24 and the Customer.",
              "Lot24 reserves the right to change the website's design, as well as the offered features and services, at any time and without prior notice.",
            ]}
          />
        </Section>

        {/* Section 5 */}
        <Section title="5 Rights and Obligations of the User">
          <List
            items={[
              "User shall bear all costs of the connection required to access Lot24, the cost of using the public Internet, and the cost of purchase and maintenance of communication equipment necessary to use the platform.",
              "Users are communicating directly between themselves, on their own expenses and responsibilities. Lot24 does not bear any responsibility for consequences of the transactions between the users.",
            ]}
          />
        </Section>

        {/* Section 6 */}
        <Section title="6 The Declarations of Intent, Actions, and Statements">
          <List
            items={[
              "The declarations of intent, actions, and statements made by a user at Lot24 B2B wholesale trading platform, as well as any other legally significant actions, are actions taken solely by the user. Lot24 does not operate in this matter either on its own behalf or as a representative of a third party.",
              "Lot24 is not responsible for making any of the disposal activities undertaken to complete transactions between users.",
            ]}
          />
        </Section>

        {/* Section 7 */}
        <Section title="7 Issue of Accounts, Salary">
          <List
            items={[
              "Claim payment for a fixed period of time exists independently of the use of the platform or possible, consistent with contractual restrictions on the provision of services made by Lot24.",
              "User agrees to receive bills, invoices, and billing information from Lot24 by email, saved as PDF.",
            ]}
          />
        </Section>

        {/* Section 8 */}
        <Section title="8 The Processing, Storage, and Data Transmission">
          <List
            items={[
              "Personal data provided by you on the Lot24 platform are processed in accordance with applicable law and in accordance with the Privacy Policy.",
              "By creating an account at Lot24, the user allows Lot24 to store and process his or her personal data, including for commercial purposes, and for safety reasons.",
            ]}
          />
        </Section>

        {/* Section 9 */}
        <Section title="9 Warranty Disclaimer">
          <List
            items={[
              "Lot24 is neither responsible for contracts and settlements concluded between the users, nor the data and information forwarded or shared between them.",
              "Lot24 is not responsible for the items delivered by the user to another user. In particular, Lot24 accepts no responsibility for the accuracy and completeness of the data and statements provided by users.",
            ]}
          />
        </Section>

        {/* Section 10 */}
        <Section title="10 Disclaimer">
          <List
            items={[
              "Lot24 is not responsible for a temporary unavailability of the platform, in particular due to maintenance work, if the lack of access shall not exceed a total of 5% of the year in the calendar year.",
              "Lot24 is not responsible for the accuracy and completeness of the information, advice, and recommendations contained in the website by other users.",
            ]}
          />
        </Section>

        {/* Section 11 */}
        <Section title="11 Jurisdiction, Applicable Law">
          <List
            items={[
              "This order shall be governed by the laws of the United Kingdom. The application of the UN Convention on the International Sale of Goods is excluded, because the parties of the order exclude the application of the Law on Protection of consumer rights.",
              "The London Magistrates' Courts are the local jurisdiction for all contracts, orders included under these terms and conditions.",
            ]}
          />
        </Section>

        {/* Section 12 */}
        <Section title="12 Final Provisions">
          <List
            items={[
              "The incorporation of general conditions of contracts or client orders is not allowed.",
              "If any provision of these Terms and Conditions is in whole or in part legally invalid, or if they will lose their validity in the future, it will not affect the validity of the remaining provisions.",
            ]}
          />
        </Section>
      </div>
      <News />
      <Footer />
    </>
  );
};

export default Condition;
