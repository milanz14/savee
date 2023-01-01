interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  item: string;
}

const FAQItem = ({ question, answer, isOpen, item }: FAQItemProps): JSX.Element => {
  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id={`heading${item}`}>
        <button
          className="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#collapse${item}`}
          aria-expanded="true"
          aria-controls={`collapse${item}`}>
          {question}
        </button>
      </h2>
      <div
        id="collapseOne"
        className="accordion-collapse collapse show"
        aria-labelledby={`heading${item}`}>
        <div className="accordion-body">{answer}</div>
      </div>
    </div>
  );
};

export default FAQItem;
