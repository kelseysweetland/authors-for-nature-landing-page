import { useState } from "react";
import { ChevronRight } from "lucide-react";

const faqData = [
  {
    question: "What kinds of books does Authors for Nature publish?",
    answer: "We're excited to publish stories where environmental or natural themes take center stage. Whether you're passionate about ocean conservation, wildlife protection, or climate action, we celebrate creative works that inspire readers to care for our planet. Your unique voice and perspective are what make these stories powerful."
  },
  {
    question: "What age group does Authors for Nature publish?",
    answer: "We focus on helping young adults (ages 13-25) create and publish books, but if you are younger or older, we would still be happy to work with you. Reach out to authorsfornature@gmail.com with your questions!"
  },
  {
    question: "Do submissions need to include factual environmental content?",
    answer: "Yes, and we love helping you get this right. Your environmental message should be woven naturally into your story—think of it as the heartbeat of your book. We're here to support you in making sure your facts are accurate while keeping your creative vision intact. It's all about authentic storytelling that makes a real difference."
  },
  {
    question: "Do you only accept children's picture books?",
    answer: "While we specialize in helping young adults publish children's books that raise awareness about environmental issues, we also accept other book formats! Reach out to authorsfornature@gmail.com if you have any questions."
  },
  {
    question: "Can my story be fiction, or do you only accept nonfiction?",
    answer: "Both fiction and nonfiction are warmly welcomed. Fiction has this amazing power to touch hearts and change minds through storytelling magic. As long as your environmental message is meaningful and accurate (even in fantastical settings), we're here to help you share your vision with the world. Every story format has its place in creating environmental awareness."
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
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-nature-ink" data-testid="faq-title">
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