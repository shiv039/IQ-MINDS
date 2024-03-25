import React from 'react';
import { Footer } from '@/widgets/layout';
import { featuresData } from '@/data';
import { FeatureCard } from '@/widgets/cards';

export function OurOffer() {
  return (
    <>
      <section className="relative block h-[13vh]">
        <div className="bg-profile-background absolute top-0 h-full w-full bg-[url('/img/background-3.png')] bg-cover bg-center scale-105" />
        <div className="absolute top-0 h-full w-full bg-black/60 bg-cover bg-center" />
      </section>
      <section className="relative bg-white py-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2">
            {featuresData.map(({ color, title, icon, description }) => (
              <FeatureCard
                key={title}
                color={color}
                title={title}
                icon={React.createElement(icon, {
                  className: 'w-5 h-5 text-white',
                })}
                description={description}
              />
            ))}
          </div>
        </div>
      </section>

      <div className="bg-white">
        <Footer />
      </div>
    </>
  );
}

export default OurOffer;
