"use client";
import { TypeAnimation } from 'react-type-animation';


const HeroSectionAnimation = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Siyuan Zhao',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
      ]}
      wrapper="span"
      speed={50}
      style={{ display: 'inline-block' }}
      repeat={Infinity}
    />
  );
};

export default HeroSectionAnimation