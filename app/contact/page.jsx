import ContactForm from '@/components/contact/contact-form';
import React from 'react';

export const metadata = {
  title: "Contact Us | CodeLab",
  description: "Have questions or want to join CodeLab? Reach out to our team for inquiries about courses, support, or collaborations.",
};

const Page = () => {
  return (
    <div>
      <ContactForm />
    </div>
  );
}

export default Page;
