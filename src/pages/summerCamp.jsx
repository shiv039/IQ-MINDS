import React from 'react';
import { Footer } from '@/widgets/layout';

export function SummerCamp() {
  return (
    <>
      <section className="relative block h-[13vh]">
        <div className="bg-profile-background absolute top-0 h-full w-full bg-[url('/img/background-3.png')] bg-cover bg-center scale-105" />
        <div className="absolute top-0 h-full w-full bg-black/60 bg-cover bg-center" />
      </section>
      <div class="bg-profile-background bg-[url('/img/background-3.png')] bg-cover bg-center scale-105 min-h-screen flex flex-col items-center justify-center">
        <h1 class="text-5xl text-white font-bold mb-8 animate-pulse">
          Coming Soon
        </h1>
        <p class="text-white text-lg mb-8">
          We're working hard to bring you something amazing. Stay tuned!
        </p>
      </div>
      {/* <div className="bg-white">
        <Footer />
      </div> */}
    </>
  );
}

export default SummerCamp;
