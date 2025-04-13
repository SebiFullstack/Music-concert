import React from 'react';
import TestimonialsCard from './TestimonialsCard';
import styles from './TestimonialsSection.module.css';

const testimonialsData = [
  {
    id: 1,
    name: 'Ellie James',
    website: 'lorem.com',
    image: '/img/Testimonials1.svg',
    text: "The concert was pure magic! I danced all night, the tickets were a steal, and the energy was off the charts. I’m so excited to return soon!"
  },
  {
    id: 2,
    name: 'Johnny Doe',
    website: 'ipsum.com',
    image: '/img/Testimonials2.svg',
    text: "The concert was absolutely amazing! The atmosphere was electric, the tickets were reasonably priced, and I had the best time. Can’t wait to come back for the next one!"
  },
  {
    id: 3,
    name: 'Myne Barack',
    website: 'ipsum.com',
    image: '/img/Testimonials3.svg',
    text: "I had a blast at the concert! The sound was perfect, the tickets were affordable, and the crowd was so lively. I’m counting down to the next show!"
  },
  {
    id: 4,
    name: 'James Bond',
    website: 'dolor.com',
    image: '/img/Testimonials4.webp',
    text: "The concert blew me away! The artists were phenomenal, tickets were a great deal, and the night was unforgettable. I’ll be back for the next one!"
  },
  {
    id: 5,
    name: 'Laura Bennett',
    website: 'sit.com',
    image: '/img/Testimonials5.webp',
    text: "What a concert experience! The music was thrilling, the tickets were fairly priced, and the vibe was electric. I’m eager to attend the next event!"
  },
  {
    id: 6,
    name: 'Emily Carter',
    website: 'amet.com',
    image: '/img/Testimonials6.webp',
    text: "The concert was a dream come true! The band was incredible, the tickets were affordable, and I had so much fun. I can’t wait for the next show!"
  },
  {
    id: 7,
    name: 'Michael Evans',
    website: 'consectetur.com',
    image: '/img/Testimonials7.webp',
    text: "I loved the concert so much! The atmosphere was buzzing, the tickets were a bargain, and the music was amazing. I’ll definitely be back soon!"
  },
  {
    id: 8,
    name: 'David Harris',
    website: 'adipiscing.com',
    image: '/img/Testimonials8.webp',
    text: "The concert was an epic night! The sound was fantastic, the tickets were a great value, and I had a blast. I’m already planning my next visit!"
  },
  {
    id: 9,
    name: 'James Wilson',
    website: 'elit.com',
    image: '/img/Testimonials9.webp',
    text: "What a show at the concert! The energy was infectious, the tickets were reasonably priced, and I had a great time. I can’t wait to return soon!"
  },
  {
    id: 10,
    name: 'Robert Clark',
    website: 'sed.com',
    image: '/img/Testimonials10.webp',
    text: "The concert was simply awesome! The music was electrifying, the tickets were a steal, and I enjoyed every second. I’m excited for the next one!"
  },
];

function TestimonialsSection() {
  const extendedTestimonials = [...testimonialsData, ...testimonialsData];

  return (
    <section className={styles.testimonialsSection}>
      <h2>Testimonials</h2>
      <div className={styles.carouselContainer}>
        <div className={styles.carouselTrack}>
          {extendedTestimonials.map((testimonial, index) => (
            <TestimonialsCard
              key={`${testimonial.id}-${index}`}
              name={testimonial.name}
              website={testimonial.website}
              image={testimonial.image}
              text={testimonial.text}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;