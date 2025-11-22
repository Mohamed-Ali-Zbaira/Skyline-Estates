import React from 'react';
import { Mail, MapPin, Phone, Clock } from 'lucide-react';

const MapPinIcon = ({ className }) => (<svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>);
const MailIcon = ({ className }) => (<svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-18 4v8a2 2 0 002 2h14a2 2 0 002-2v-8m-18 0l9 5.95M3 12a2 2 0 00-2 2v6a2 2 0 002 2h18a2 2 0 002-2v-6a2 2 0 00-2-2H3z"></path></svg>);
const PhoneIcon = ({ className }) => (<svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.49 5.49l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-11a2 2 0 01-2-2v-11z"></path></svg>);
const ClockIcon = ({ className }) => (<svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>);

const lucideIcons = { MapPin, Mail, Phone, Clock };

export const getIconComponent = (info) => {
  return lucideIcons[info.iconName] || info.fallbackIcon;
};

export const contactInfoData = [
  {
    iconName: 'MapPin',
    title: 'Office Address',
    details: [' United Arab Emirates'],
    fallbackIcon: MapPinIcon,
  },
  {
    iconName: 'Mail',
    title: 'Email Address',
    details: ['info@SkylineEstates.ae'],
    fallbackIcon: MailIcon,
  },
  {
    iconName: 'Phone',
    title: 'Phone Number',
    details: ['+90000000000'],
    fallbackIcon: PhoneIcon,
  },
  {
    iconName: 'Clock',
    title: 'Working Hours',
    details: ['Mon–Sat: 9:00 AM – 6:00 PM'],
    fallbackIcon: ClockIcon,
  },
];

export const sectionTexts = {
  subtitle: 'We are ready to serve',
  title: 'Contact Us',
  paragraph: "Get in touch with us for any inquiries or assistance. Whether you have questions about our services or need support, we're here to help. Our dedicated team is readily available to ensure all your concerns are addressed promptly and effectively. Don't hesitate to reach out via phone, email, or our online contact form we look forward to hearing from you!  lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  formTitle: 'Send us a message',
  submitButtonText: 'Send Message'
};

export const formPlaceholders = {
    firstName: 'First Name',
    lastName: 'Last Name',
    email: 'Your Email Address',
    mobile: 'Your Mobile Number',
    message: 'Your Message'
};