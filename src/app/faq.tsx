"use client";

import React from "react";
import { Typography, Accordion, AccordionHeader, AccordionBody } from "@material-tailwind/react";

const FAQS = [
  {
    title: "1. When is the farewell party scheduled?",
    desc: "The farewell party is scheduled for June 25th, 2023, starting at 6 PM in the Resort.",
  },
  {
    title: "2. What is the dress code for the farewell party?",
    desc: "The dress code for the farewell party is semi-formal. Students are encouraged to dress smartly but comfortably.",
  },
  {
    title: "3. Can I bring a guest to the farewell party?",
    desc: "Yes, each student is allowed to brring guests but there will be extra charges and are supposed to inform the organizers in advance.",
  },
  {
    title: "4. Will there be food and drinks provided?",
    desc: "Yes, there will be a variety of food and drinks provided at the farewell party.",
  },
  {
    title: "5. Are there any planned activities or performances?",
    desc: "Yes, the farewell party will include a series of performances by students, a DJ, and a photo booth to capture memorable moments.",
  }, 
{
  title: "6. Can I make special requests regarding the event?",
  desc: "Yes, you can make special requests regarding the event by contacting the organizers directly. Please ensure to make your requests well in advance to allow for proper arrangements.",
}
];

export function Faq() {
  const [open, setOpen] = React.useState(0);
  const handleOpen = (value: number) => setOpen(open === value ? 0 : value);

  return (
    <section className="py-8 px-8 lg:py-20">
      <div className="container mx-auto">
        <div className="text-center">
          <Typography variant="h1" color="blue-gray" className="mb-4">
            Frequently asked questions
          </Typography>
          <Typography
            variant="lead"
            className="mx-auto mb-24 lg:w-3/5 !text-gray-500"
          >
            As we bid farewell to another successful year, we understand you may have questions about the upcoming events and changes. Here are some of the most frequently asked questions to help you stay informed and prepared.
          </Typography>
        </div>

        <div className="mx-auto lg:max-w-screen-lg lg:px-20">
          {FAQS.map(({ title, desc }, key) => (
            <Accordion
              key={key}
              open={open === key + 1}
              onClick={() => handleOpen(key + 1)}
            >
              <AccordionHeader className="text-left text-gray-900">
                {title}
              </AccordionHeader>
              <AccordionBody>
                <Typography
                  color="blue-gray"
                  className="font-normal text-gray-500"
                >
                  {desc}
                </Typography>
              </AccordionBody>
            </Accordion>
          ))}
        </div>
      </div>
    </section>
  );
}


export default Faq;