"use client";

import { Typography } from "@material-tailwind/react";
import AboutCard from "@/components/about-card";

const EVENT_INFO = [
  {
    title: "Memorable Moments!",
    description:
      "Capture and cherish the unforgettable moments with your friends and teachers as you bid farewell to high school.",
    subTitle: "Photo Booth",
  },

  {
    title: "Share Your Stories!",
    description:
      "Take a trip down memory lane and share your favorite stories and experiences with your classmates.",
    subTitle: "Story Sharing",
  },
  {
    title: "Dance the Night Away!",
    description:
      "Enjoy a night of dancing and fun with your friends, creating memories that will last a lifetime.",
    subTitle: "Dance Party",
  },
  {
    title: "Delicious Food!",
    description:
      "Savor a variety of delicious dishes and treats, making the event even more enjoyable and memorable.",
    subTitle: "Catering",
  },
];

export function AboutEvent() {
  return (
    <section className="container mx-auto flex flex-col items-center px-4 py-10">
      <Typography variant="h6" className="text-center mb-2" color="orange">
        About the event
      </Typography>
      <Typography variant="h3" className="text-center" color="blue-gray">
        Why Attend?
      </Typography>
      <Typography
        variant="lead"
        className="mt-2 lg:max-w-4xl mb-8 w-full text-center font-normal !text-gray-500"
      >
        It has been 12 years maybe even more then that! And this is about time for that journey to end. Noting can win agianst Time! Nor will you, Maybe you should celebrate the end of your journey. We are making that easy for you. 
        Learn to love yourself and reward yurself with this FAREWELL PARTY! 
      </Typography>
      <div className="mt-8 w-full grid grid-cols-1 md:grid-cols-2 gap-4 ">
        {EVENT_INFO.map((props, idx) => (
          <AboutCard key={idx} {...props} />
        ))}
        <div className="md:col-span-2">
          <AboutCard
            title="Networking!"
            subTitle="Community"
            description="Time for you to say the things you have been hiding, make the confessions. Make the memories that will last forever."
          />
        </div>
      </div>
    </section>
  );
}

export default AboutEvent;
