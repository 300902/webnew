import React, { useState } from "react";

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="faq-item">
    <h3 onClick={() => setIsOpen(!isOpen)}>
      {question}
      <span className={`arrow ${isOpen ? 'open' : ''}`}></span>
    </h3>
    {isOpen && <p>{answer}</p>}
  </div>
  );
};

const FAQSection = () => {
  return (
    <div className="faq-section">
      <h2 className="faq">FAQ</h2>
      <p className="faq-p">Pertanyaan yang paling sering ditanyakan</p>
      <FAQItem
        question="Apa itu PMKM Prima Indonesia?"
        answer="PMKM Prima Indonesia adalah perkumpulan para pelaku dan penggiat UMKM di Indonesia dan luar negeri."
      />
      <FAQItem question="Apakah ada biaya keanggotaan?" answer="Answer to question 2" />
      <FAQItem question="Sudah ada di provinsi mana saja PMKM Prima Indonesia?" answer="Answer to question 3" />
      <FAQItem question="Apakah ada batasan kategori usaha untuk bergabung?" answer="Answer to question 4" />
      <FAQItem question="Apakah ada batasan kategori usaha untuk bergabung?" answer="Answer to question 5" />
    </div>
  );
};

export default FAQSection;
