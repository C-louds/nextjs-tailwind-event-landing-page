"use client";

import Image from "next/image";
import { Typography } from "@material-tailwind/react";


export function SponsoredBy() {
  return (
    <section className="py-8 px-8 lg:py-20">
      <div className="container mx-auto text-center">
        <Typography variant="h3" color="blue-gray" className="mb-2">
          SPONSORED BY YOUR<br /> FELLOW<br /> BATCHMATES!
        </Typography>
        <div className="flex flex-wrap items-center justify-center gap-6">
          
        </div>
      </div>
    </section>
  );
}

export default SponsoredBy;