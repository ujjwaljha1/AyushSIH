

// 'use client'

// import { useState } from 'react'
// import { motion } from 'framer-motion'
// import { Briefcase, GraduationCap, HelpCircle, Info } from 'lucide-react'
// import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

// export default function PMSS() {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
//       {/* Background Grid Animation */}
//       <div className="fixed inset-0 z-0">
//         <motion.div
//           className="absolute inset-0 grid grid-cols-[repeat(auto-fill,minmax(50px,1fr))] grid-rows-[repeat(auto-fill,minmax(50px,1fr))]"
//           initial={{ opacity: 0.1 }}
//           animate={{ opacity: 0.2 }}
//           transition={{ duration: 5, repeat: Infinity, repeatType: 'reverse' }}
//         >
//           {[...Array(200)].map((_, i) => (
//             <div key={i} className="border border-gray-200"></div>
//           ))}
//         </motion.div>
//       </div>

//       <div className="relative z-10 max-w-4xl mx-auto px-4 py-12 bg-white/80 backdrop-blur-sm shadow-xl">
//         {/* Header */}
//         <header className="mb-12 text-center">
//           <h1 className="text-4xl font-bold mb-4">Software Engineer Position</h1>
//           <img
//             src="/placeholder.svg?height=400&width=800"
//             alt="Software Engineer"
//             className="w-full rounded-lg shadow-lg mb-8"
//           />
//         </header>

//         {/* Main Content */}
//         <main className="space-y-12">
//           {/* Roles & Responsibilities */}
//           <section>
//             <h2 className="text-2xl font-semibold mb-4 flex items-center">
//               <Briefcase className="mr-2" />
//               Roles & Responsibilities
//             </h2>
//             <ul className="list-disc pl-6 space-y-2">
//               <li>Design, develop, and maintain software applications</li>
//               <li>Collaborate with cross-functional teams to define and implement new features</li>
//               <li>Write clean, efficient, and well-documented code</li>
//               <li>Participate in code reviews and contribute to team's best practices</li>
//               <li>Troubleshoot, debug, and upgrade existing systems</li>
//             </ul>
//           </section>

//           {/* Eligibility */}
//           <section>
//             <h2 className="text-2xl font-semibold mb-4 flex items-center">
//               <GraduationCap className="mr-2" />
//               Eligibility
//             </h2>
//             <ul className="list-disc pl-6 space-y-2">
//               <li>Bachelor's degree in Computer Science or related field</li>
//               <li>2+ years of experience in software development</li>
//               <li>Proficiency in one or more programming languages (e.g., JavaScript, Python, Java)</li>
//               <li>Experience with web technologies and frameworks</li>
//               <li>Strong problem-solving and analytical skills</li>
//               <li>Excellent communication and teamwork abilities</li>
//             </ul>
//           </section>

//           {/* FAQ */}
//           <section>
//             <h2 className="text-2xl font-semibold mb-4 flex items-center">
//               <HelpCircle className="mr-2" />
//               Frequently Asked Questions
//             </h2>
//             <Accordion type="single" collapsible className="w-full">
//               <AccordionItem value="item-1">
//                 <AccordionTrigger>What is the application process?</AccordionTrigger>
//                 <AccordionContent>
//                   The application process typically involves submitting your resume and cover letter, followed by a series of interviews, including technical assessments and cultural fit evaluations.
//                 </AccordionContent>
//               </AccordionItem>
//               <AccordionItem value="item-2">
//                 <AccordionTrigger>Is remote work available for this position?</AccordionTrigger>
//                 <AccordionContent>
//                   Yes, we offer flexible work arrangements, including remote and hybrid options, depending on the specific role and team requirements.
//                 </AccordionContent>
//               </AccordionItem>
//               <AccordionItem value="item-3">
//                 <AccordionTrigger>What technologies does the company use?</AccordionTrigger>
//                 <AccordionContent>
//                   We use a variety of modern technologies, including React, Node.js, Python, and AWS. The specific tech stack may vary depending on the project and team.
//                 </AccordionContent>
//               </AccordionItem>
//             </Accordion>
//           </section>

//           {/* Additional Information */}
//           <section>
//             <h2 className="text-2xl font-semibold mb-4 flex items-center">
//               <Info className="mr-2" />
//               Additional Information
//             </h2>
//             <p className="text-gray-700">
//               We offer competitive salaries, comprehensive benefits, and opportunities for professional growth. Our company culture promotes innovation, collaboration, and work-life balance. Join us in creating cutting-edge software solutions that make a difference!
//             </p>
//           </section>
//         </main>

//         {/* Footer */}
//         <footer className="mt-12 pt-6 border-t border-gray-200 text-center text-gray-500">
//           <p>&copy; 2023 Your Company Name. All rights reserved.</p>
//         </footer>
//       </div>
//     </div>
//   )
// }


// import React from 'react';
// import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
// import { Book, GraduationCap, HelpCircle, Info } from 'lucide-react';

// export default function PMSSBlogPage() {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         <header className="text-center mb-12">
//           <h1 className="text-4xl font-bold text-indigo-900 mb-4">Prime Minister's Special Scholarship Scheme (PMSSS)</h1>
//           <p className="text-xl text-indigo-700">For Students of Union Territories of Jammu & Kashmir and Ladakh</p>
//         </header>

//         <main className="bg-white shadow-xl rounded-lg overflow-hidden">
//           <div className="p-6 sm:p-10">
//             <section className="mb-12">
//               <h2 className="text-2xl font-semibold text-indigo-900 mb-4 flex items-center">
//                 <Info className="mr-2" />
//                 About PMSSS
//               </h2>
//               <p className="text-gray-700">
//                 Launched in 2011, PMSSS is a scholarship scheme by the All India Council for Technical Education (AICTE) for students who are domicile of the UTs of J&K and Ladakh. It supports students who, after passing Class 12th or equivalent examination, secure admission in government colleges/institutions and other select institutions outside the UTs of J&K and Ladakh through AICTE's counseling process.
//               </p>
//             </section>

//             <section className="mb-12">
//               <h2 className="text-2xl font-semibold text-indigo-900 mb-4 flex items-center">
//                 <GraduationCap className="mr-2" />
//                 Eligibility
//               </h2>
//               <ul className="list-disc pl-6 space-y-2 text-gray-700">
//                 <li>Domicile of Union Territories of J&K and Ladakh</li>
//                 <li>Passed 12th examination from JKBOSE or CBSE-affiliated schools in J&K and Ladakh</li>
//                 <li>Family income less than or equal to ₹8,00,000 per annum</li>
//                 <li>For Lateral Entry: Passed Diploma in Engineering from recognized Polytechnic Institutes</li>
//               </ul>
//             </section>

//             <section className="mb-12">
//               <h2 className="text-2xl font-semibold text-indigo-900 mb-4 flex items-center">
//                 <Book className="mr-2" />
//                 Benefits
//               </h2>
//               <Table>
//                 <TableHeader>
//                   <TableRow>
//                     <TableHead>Stream</TableHead>
//                     <TableHead>Scholarships</TableHead>
//                     <TableHead>Academic Fee (Max)</TableHead>
//                     <TableHead>Maintenance Allowance</TableHead>
//                   </TableRow>
//                 </TableHeader>
//                 <TableBody>
//                   <TableRow>
//                     <TableCell>General Degree</TableCell>
//                     <TableCell>2070 (fixed)</TableCell>
//                     <TableCell>₹30,000</TableCell>
//                     <TableCell>₹1,00,000</TableCell>
//                   </TableRow>
//                   <TableRow>
//                     <TableCell>Professional/Engineering</TableCell>
//                     <TableCell>2830 (flexible)</TableCell>
//                     <TableCell>₹1,25,000</TableCell>
//                     <TableCell>₹1,00,000</TableCell>
//                   </TableRow>
//                   <TableRow>
//                     <TableCell>Medical/BDS</TableCell>
//                     <TableCell>100 (flexible)</TableCell>
//                     <TableCell>₹3,00,000</TableCell>
//                     <TableCell>₹1,00,000</TableCell>
//                   </TableRow>
//                 </TableBody>
//               </Table>
//             </section>

//             <section className="mb-12">
//               <h2 className="text-2xl font-semibold text-indigo-900 mb-4 flex items-center">
//                 <HelpCircle className="mr-2" />
//                 Frequently Asked Questions
//               </h2>
//               <Accordion type="single" collapsible className="w-full">
//                 <AccordionItem value="item-1">
//                   <AccordionTrigger>Is documents verification at facilitation centre necessary?</AccordionTrigger>
//                   <AccordionContent>
//                     Yes, document verification at the facilitation centre is an essential step in the application process.
//                   </AccordionContent>
//                 </AccordionItem>
//                 <AccordionItem value="item-2">
//                   <AccordionTrigger>Is attending online counseling mandatory?</AccordionTrigger>
//                   <AccordionContent>
//                     Yes, attending online counseling is mandatory for eligible students to avail benefits under PMSSS.
//                   </AccordionContent>
//                 </AccordionItem>
//                 <AccordionItem value="item-3">
//                   <AccordionTrigger>Can I edit my application after submission?</AccordionTrigger>
//                   <AccordionContent>
//                     Once submitted, it may not be possible to edit your application. Please ensure all details are correct before submitting.
//                   </AccordionContent>
//                 </AccordionItem>
//                 <AccordionItem value="item-4">
//                   <AccordionTrigger>How can I apply for PMSSS scholarship?</AccordionTrigger>
//                   <AccordionContent>
//                     Eligible candidates can apply through the online registration process on the AICTE Portal. Visit the official AICTE website for detailed instructions.
//                   </AccordionContent>
//                 </AccordionItem>
//               </Accordion>
//             </section>

//             <section>
//               <h2 className="text-2xl font-semibold text-indigo-900 mb-4">Application Process</h2>
//               <Card>
//                 <CardHeader>
//                   <CardTitle>How to Apply</CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <ol className="list-decimal pl-6 space-y-2 text-gray-700">
//                     <li>Visit the AICTE website (https://www.aicte-india.org/bureaus/jk/2021-2022)</li>
//                     <li>Click on "PMSSS 2021-22 Registration"</li>
//                     <li>Fill in all required fields in the registration form</li>
//                     <li>Upload necessary documents</li>
//                     <li>Submit the application</li>
//                     <li>Attend document verification at the facilitation centre</li>
//                     <li>Participate in online counseling if eligible</li>
//                   </ol>
//                 </CardContent>
//               </Card>
//             </section>
//           </div>
//         </main>

//         <footer className="mt-12 text-center text-gray-600">
//           <p>&copy; 2023 Ministry of Education, Government of India. All rights reserved.</p>
//         </footer>
//       </div>
//     </div>
//   );
// }


import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Book, GraduationCap, HelpCircle, Info, ChevronRight } from 'lucide-react';

export default function PMSSBlogPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-indigo-700 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Prime Minister's Special Scholarship Scheme (PMSSS)</h1>
          <p className="text-xl">Empowering students from Jammu & Kashmir and Ladakh</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <section className="mb-16">
          <img src="/api/placeholder/1200/600" alt="Students benefiting from PMSSS" className="w-full h-[400px] object-cover rounded-lg shadow-lg mb-8" />
          <p className="text-lg text-gray-700 leading-relaxed">
            The Prime Minister's Special Scholarship Scheme (PMSSS) is a transformative initiative launched in 2011 by the All India Council for Technical Education (AICTE). It aims to empower students from the Union Territories of Jammu & Kashmir and Ladakh by providing them with opportunities to pursue higher education in prestigious institutions across India.
          </p>
        </section>

        {/* Key Features */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-900 mb-8">Key Features of PMSSS</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6">
              <CardContent className="flex items-start space-x-4">
                <GraduationCap className="w-10 h-10 text-indigo-600" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Comprehensive Coverage</h3>
                  <p className="text-gray-700">Supports a wide range of courses including general degree, professional/engineering, and medical studies.</p>
                </div>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardContent className="flex items-start space-x-4">
                <Book className="w-10 h-10 text-indigo-600" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Substantial Financial Aid</h3>
                  <p className="text-gray-700">Offers academic fee coverage and a fixed maintenance allowance to support living expenses.</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Eligibility */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-900 mb-8">Eligibility Criteria</h2>
          <ul className="list-disc pl-6 space-y-4 text-gray-700">
            <li>Must be a domicile of Union Territories of J&K and Ladakh</li>
            <li>Passed 12th examination from JKBOSE or CBSE-affiliated schools in J&K and Ladakh</li>
            <li>Family income should not exceed ₹8,00,000 per annum</li>
            <li>For Lateral Entry: Passed Diploma in Engineering from recognized Polytechnic Institutes</li>
          </ul>
        </section>

        {/* Scholarship Details */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-900 mb-8">Scholarship Details</h2>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Stream</TableHead>
                <TableHead>Scholarships</TableHead>
                <TableHead>Academic Fee (Max)</TableHead>
                <TableHead>Maintenance Allowance</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>General Degree</TableCell>
                <TableCell>2070 (fixed)</TableCell>
                <TableCell>₹30,000</TableCell>
                <TableCell>₹1,00,000</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Professional/Engineering</TableCell>
                <TableCell>2830 (flexible)</TableCell>
                <TableCell>₹1,25,000</TableCell>
                <TableCell>₹1,00,000</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Medical/BDS</TableCell>
                <TableCell>100 (flexible)</TableCell>
                <TableCell>₹3,00,000</TableCell>
                <TableCell>₹1,00,000</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </section>

        {/* Application Process */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-900 mb-8">Application Process</h2>
          <ol className="space-y-4">
            {[
              "Visit the AICTE website",
              "Click on 'PMSSS 2021-22 Registration'",
              "Fill in all required fields",
              "Upload necessary documents",
              "Submit the application",
              "Attend document verification",
              "Participate in online counseling if eligible"
            ].map((step, index) => (
              <li key={index} className="flex items-center space-x-4">
                <span className="flex-shrink-0 w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center">{index + 1}</span>
                <span className="text-gray-700">{step}</span>
              </li>
            ))}
          </ol>
        </section>

        {/* FAQ */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-900 mb-8">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Is documents verification at facilitation centre necessary?</AccordionTrigger>
              <AccordionContent>
                Yes, document verification at the facilitation centre is an essential step in the application process to ensure the authenticity of submitted information.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Is attending online counseling mandatory?</AccordionTrigger>
              <AccordionContent>
                Yes, attending online counseling is mandatory for eligible students to avail benefits under PMSSS. It's a crucial step in the selection and seat allocation process.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Can I edit my application after submission?</AccordionTrigger>
              <AccordionContent>
                Once submitted, it may not be possible to edit your application. Please ensure all details are correct before submitting. If you need to make changes, contact the PMSSS support team immediately.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        {/* CTA */}
        <section className="bg-indigo-100 rounded-lg p-8 text-center">
          <h2 className="text-3xl font-semibold text-indigo-900 mb-4">Ready to Apply?</h2>
          <p className="text-lg text-indigo-700 mb-6">Don't miss this opportunity to shape your future. Apply for PMSSS today!</p>
          <a href="#" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
            Start Your Application <ChevronRight className="ml-2 -mr-1 h-5 w-5" aria-hidden="true" />
          </a>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 mt-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-indigo-600">About PMSSS</a></li>
                <li><a href="#" className="text-gray-600 hover:text-indigo-600">Eligibility</a></li>
                <li><a href="#" className="text-gray-600 hover:text-indigo-600">How to Apply</a></li>
                <li><a href="#" className="text-gray-600 hover:text-indigo-600">FAQs</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <p className="text-gray-600">All India Council for Technical Education</p>
              <p className="text-gray-600">Nelson Mandela Marg, Vasant Kunj</p>
              <p className="text-gray-600">New Delhi-110070</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-600 hover:text-indigo-600">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-600 hover:text-indigo-600">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-200 text-center">
            <p className="text-gray-600">&copy; 2023 Ministry of Education, Government of India. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}