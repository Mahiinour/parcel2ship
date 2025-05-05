import React from 'react';
import serviceImg from '../assets/images/first.png';
import packageImg from '../assets/images/second.png';
import trackImg from '../assets/images/third.png';

const steps = [
  {
    title: 'Cheap Parcel Delivery on All Services',
    description:
      "We’re committed to offering the cheapest parcel delivery in the UAE and worldwide. With our Lowest Price Guarantee, we’ll match any comparable service you find elsewhere.",
    image: serviceImg,
  },
  {
    title: 'Send a Parcel to over 180 Countries',
    description:
      "Booking your parcel delivery is simple. Just enter your destination and parcel size into our quick quote tool to compare prices from trusted international couriers instantly.",
    image: packageImg,
  },
  {
    title: 'Free Tracking on all Parcel Services',
    description:
      "Whether you need to send a parcel within the UK or overseas, at Parcel2Ship you can always track a parcel for free. ",
    image: trackImg,
  },
];

const HowItWorksSection = () => {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2
          className="text-4xl font-extrabold mb-16 tracking-tight"
          style={{ color: 'rgba(1, 0, 252, 1)' }}
        >
          How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-lg border border-gray-200 p-6 hover:shadow-xl transition"
            >
              <img
                src={step.image}
                alt={step.title}
                className="w-full h-48 object-contain mb-6 rounded-lg"
              />
              <h3
                className="text-xl font-semibold mb-3"
                style={{ color: 'rgba(1, 0, 252, 1)' }}
              >
                {step.title}
              </h3>
              <p className="text-gray-600 text-base leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
