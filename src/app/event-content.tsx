"use client";

import {
  Tab,
  Tabs,
  TabsHeader,
} from "@material-tailwind/react";

import EventContentCard from "@/components/event-content-card";


const EVENT_CONTENT = [
{
  type: "Solo",
  pricePerHead: 500,
},
{
  type: "Quintet",
  pricePerHead: 470,
},
{
  type: "Circle",
  pricePerHead: 450
}
];

export function EventContent() {
  return (
    <section className="py-8 px-8 lg:py-20">
      <Tabs value="Day1" className="mb-8">
        <div className="w-full flex mb-8 flex-col items-center">
          <TabsHeader className="h-12 w-72 md:w-96">
            <Tab value="Solo" className="font-medium">
              Solo(1)
            </Tab>
            <Tab value="Quintet" className="font-medium">
              Quintet(5)
            </Tab>
            <Tab value="Circle" className="font-medium">
              Circle(10)
            </Tab>
          </TabsHeader>
        </div>
      </Tabs>
      


       
   
    </section>
  );
}

export default EventContent;