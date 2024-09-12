import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: "What other conditions should I fulfill for SSS J&K and Ladakh?",
    answer: "You must fulfill the following eligibility criteria:\n- Domicile of UT of J&K or Ladakh\n- Family income should not exceed Rs. 8.00 Lakh per annum\n- Passed 10+2 Exam from JKBOSE or CBSE affiliated schools located in UT of J&K or Ladakh\n- Passed 10+3 Diploma from UT of J&K or Ladakh Polytechnic (if seeking admission directly in second year in an engineering course)."
  },
  {
    question: "How can I register for the SSSJ&K and Ladakh scholarship?",
    answer: "Step 1: Open AICTE Website via link : https://www.aicte-india.org/bureaus/jk\nStep 2: Go to SSSJ&K and Ladakh tab on the homepage.\nStep 3: Click on the tab of A/Y 2023-24 and register yourself by following the instructions."
  },
  {
    question: "What should I do if I face technical issues during registration?",
    answer: "For any technical issue at the time of registration, you may email at itpmsss@aicte-india.org or it2pmsss@aicte-india.org."
  },
  {
    question: "Is there a helpline for PMSSS Scholarship Queries?",
    answer: "Yes, you may call AICTE Office on 011-29581043/08/07/51/10 (from 9.30 am to 5.00 pm on all working days during office hours) or email at jkadmission2023@aicte-india.org for any queries. You can also register your grievance from your login to get the resolution for your query (only available for registered candidates)."
  },
  {
    question: "Which documents am I required to upload after registration?",
    answer: "You are required to upload the following documents:\n\nSelf-Attested Scan copy of (in jpg/png not more than 2MB):\n- Domicile Certificate\n- SSC Marksheet\n- Family Income Certificate (Issued by Tehsildar or equivalent)\n- Aadhaar Card\n- Caste Reservation /Physically disabled certificates (if any)\n\nOther attachments (in jpg/png not more than 10–50 KB):\n- Passport Size photo (200 x 230 pixels - preferred)\n- Father/Guardian Passport Size photo\n- Mother/Guardian Passport Size photo\n- Signature (140 x 60 pixels - preferred)"
  }
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <div className="min-h-screen bg-white text-gray-900 p-8" style={{
      backgroundImage: `
        linear-gradient(to right, #f0f0f0 1px, transparent 1px),
        linear-gradient(to bottom, #f0f0f0 1px, transparent 1px)
      `,
      backgroundSize: '20px 20px'
    }}>
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Frequently Asked Questions</h1>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg shadow-sm">
              <button
                className="flex justify-between items-center w-full p-4 text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-medium">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 transition-transform duration-200 ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="p-4 pt-0">
                  <p className="text-gray-700 whitespace-pre-line">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}