import { useState } from "react";
import { ChevronRight } from "lucide-react";

const faqData = [
  {
    question: "What kinds of books does Authors for Nature publish?",
    answer: "We publish works where environmental or natural themes are central, and the primary aim is to promote protection and preservation of the natural world."
  },
  {
    question: "Do submissions need to include factual environmental content?",
    answer: "Yes. Environmental messages must be accurate and integrated into the narrative or educational material—not tacked on as a minor reference."
  },
  {
    question: "Do you accept children's picture books?",
    answer: "Absolutely. Picture books are welcome as long as nature is central and the story clearly inspires care for the planet."
  },
  {
    question: "Can my story be fiction, or do you only accept nonfiction?",
    answer: "Both are accepted. Fiction must still carry an accurate, meaningful environmental theme that's core to the story."
  },
  {
    question: "How do I submit my manuscript?",
    answer: "Submit via our \"Join\" page form. Include a brief synopsis, intended audience, and how your work advances environmental protection."
  }
];

export default function FaqSection() {
  const [openItem, setOpenItem] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? null : index);
  };

  return (
    <section id="faq" className="bg-nature-paper py-20" data-testid="faq-section">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-12 text-nature-ink text-center" data-testid="faq-title">
          Commonly Asked Questions
        </h2>

        <div className="space-y-4" role="list">
          {faqData.map((item, index) => (
            <div
              key={index}
              className={`bg-white border border-gray-200 rounded-3xl shadow-lg overflow-hidden transition-all duration-300 relative ${
                openItem === index 
                  ? 'border-nature-secondary/40 bg-nature-primary/8 shadow-nature-secondary/20 shadow-xl' 
                  : 'hover:shadow-xl'
              }`}
              role="listitem"
            >
              {/* Accent border */}
              <div 
                className={`absolute left-0 top-0 bottom-0 bg-nature-secondary opacity-15 transition-all duration-300 rounded-tl-3xl rounded-bl-3xl ${
                  openItem === index ? 'w-1.5 opacity-25' : 'w-0'
                }`}
              />
              
              <button
                className="w-full flex items-center justify-between p-5 text-left focus:outline-none focus:ring-3 focus:ring-nature-secondary/45 focus:ring-offset-2 rounded-3xl group"
                onClick={() => toggleItem(index)}
                aria-expanded={openItem === index}
                data-testid={`faq-question-${index + 1}`}
              >
                <span className="text-lg font-medium text-nature-ink group-hover:text-nature-primary-dark transition-colors">
                  {item.question}
                </span>
                <ChevronRight 
                  className={`w-5 h-5 text-nature-secondary transition-all duration-250 group-hover:text-nature-primary ${
                    openItem === index ? 'rotate-90 text-nature-primary' : ''
                  }`} 
                />
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  openItem === index 
                    ? 'max-h-96 opacity-100 pb-5' 
                    : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-5 text-gray-600 leading-relaxed" data-testid={`faq-answer-${index + 1}`}>
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}