"use client";

import Image from "next/image";
import { useRef, useState } from "react";

interface QA {
  question: string;
  answer: string;
}

interface AccordionProps {
  items: QA[];
}

const QuestionAccordionBordered: React.FC<AccordionProps> = ({ items }) => {
  const [isOpen, setIsOpen] = useState<number | null>();
  const answerRefs = useRef<(HTMLParagraphElement | null)[]>([]);

  const toggle = (e: React.MouseEvent, index: number) => {
    const target = e.target as HTMLElement;
    if (target.closest("p")) return;

    if (isOpen === index) {
      setIsOpen(null);
    } else {
      const ref = answerRefs.current[index];
      if (ref) {
        ref.style.display = "block";
      }
      setIsOpen(index);
    }
  };

  return (
    <>
      {items.map((item, i) => (
        <article
          key={i}
          className=" border border-[#E7EAEA] rounded-xl h-fit"
        >
          <h3 className="text-black">
            <button
              aria-expanded={isOpen === i}
              aria-controls={`answer-id-${i}`}
              onClick={(e) => toggle(e, i)}
              className="flex items-center justify-between w-full cursor-pointer p-5"
            >
              {item.question}
              <span
                className={`${
                  isOpen === i ? "rotate-180" : "rotate-0"
                } duration-300 transition-transform`}
              >
                <Image
                  src="/images/arrow-left.png"
                  width={24}
                  height={24}
                  alt="فلش باز و بسته بودن آکاردئون"
                />
              </span>
            </button>
          </h3>
          <p
            id={`answer-id-${i}`}
            aria-live="polite"
            ref={(el) => {
              answerRefs.current[i] = el;
            }}
            className={`text-[#747677] overflow-hidden transition-all duration-300 p-5 cursor-default ${
              isOpen === i ? "h-fit opacity-100 py-5" : "max-h-0 opacity-0 py-0"
            }`}
          >
            {item.answer}
          </p>
        </article>
      ))}
    </>
  );
};

export default QuestionAccordionBordered;
