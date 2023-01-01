// library imports
import { useNavigate } from "react-router-dom";
import FAQItem from "./FAQItem";

const FAQ = (): JSX.Element => {
  const navigate = useNavigate();

  const faqs = [
    {
      q: "Does this connect directly to my bank account?",
      a: `<strong>No.</strong> The app currently does not have bank level access. It may be
      something that is added in the future but for the time being, this is strictly
      manual tracking.`,
      isOpen: false,
      item: "One",
    },
    {
      q: "What information does this app gather about me?",
      a: `The only information stored is your <em>name</em> and your <em>email address.</em>. These are stored for account login purposes, your personal data is safe!`,
      isOpen: false,
      item: "Two",
    },
    {
      q: "Is this app free?",
      a: `<strong>Yes!</strong> This is currently a free app with no plans to change to a
      monetizing platform.`,
      isOpen: false,
      item: "Three",
    },
  ];

  const handleGetStartedClick = (): void => {
    navigate("/register");
  };

  return (
    <section id="faq" className="text-center py-5">
      <div className="pb-2 h2 fs-1 mb-4">Frequenty Asked Questions</div>
      <div className="container h-100">
        <div className="accordion">
          {faqs.map((faq) => (
            <FAQItem
              question={faq.q}
              answer={faq.a}
              isOpen={faq.isOpen}
              key={faq.q}
              item={faq.item}
            />
          ))}
        </div>
      </div>
      <div className="mt-5">
        <button onClick={handleGetStartedClick} className="btn btn-info text-white">
          Join
        </button>
      </div>
    </section>
  );
};

export default FAQ;
