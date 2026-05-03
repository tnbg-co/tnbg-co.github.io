import {
  Bot,
  BrainCircuit,
  Factory,
  Gauge,
  Mail,
  MapPin,
  Phone,
  Settings2,
  SlidersHorizontal,
} from 'lucide-react';

export const profile = {
  name: 'Rishabh Dubey',
  role: 'Project Engineer | Industrial Automation Consultant',
  email: 'rishabh@tnbg.co.in',
  phone: '+91 8741814358',
  address: [
    '249, Gujro Ka Mohalla',
    'Near Laxminarayan Temple',
    'Nimoda Hiriji, Tehsil Digod',
    'Kota, Rajasthan 325201',
  ],
  education:
    'Bachelor of Technology in Electronics and Communications Engineering from Rajasthan Technical University, Kota',
  summary:
    'Graduated with strong technical competencies in object detection, mobile robotics, and radio network optimization. Experience includes both academic and industry exposure, focusing on practical engineering applications.',
  current:
    'Currently working as a Project Engineer at ABB Global, contributing to robotics and object detection initiatives. Focused on delivering efficient and innovative engineering solutions.',
};

export const expertise = [
  'Industrial automation delivery',
  'Robotics and object detection',
  'Instrumentation and control systems',
  'Troubleshooting and optimization',
];

export const experience = [
  {
    title: 'Project Engineer',
    company: 'ABB Global',
    period: 'Jun 2024 - Present',
    location: 'Bengaluru, India',
    description: 'Contributing to robotics and object detection initiatives for practical engineering applications.',
    skills: ['Troubleshooting', 'Robotics', 'Object Detection'],
  },
  {
    title: 'Senior Instrumentation Engineer',
    company: 'JK Cement',
    period: 'Mar 2024 - Jun 2024',
    location: 'India',
    description: 'Supported reliability, controls, and instrumentation priorities across plant engineering operations.',
    skills: ['Instrumentation', 'Maintenance', 'Plant Engineering'],
  },
  {
    title: 'Instrument Engineer',
    company: 'JK Cement Works',
    period: 'Oct 2019 - Mar 2024',
    location: 'India',
    description: 'Worked on instrumentation and control systems with practical exposure to P&ID-driven execution.',
    skills: ['I&C', 'P&ID', 'Controls'],
  },
  {
    title: 'Research Intern',
    company: 'IIT Kanpur',
    period: 'Jun 2018 - Jul 2018',
    location: 'Kanpur, India',
    description: 'Focused on AI and IoT research applications with an engineering implementation lens.',
    skills: ['AI', 'IoT', 'Research'],
  },
];

export const services = [
  {
    icon: Factory,
    title: 'Industrial Automation Consulting',
    description:
      'Practical guidance for automation initiatives, plant workflows, and engineering execution plans.',
  },
  {
    icon: SlidersHorizontal,
    title: 'Instrumentation & Control Systems',
    description:
      'Support for I&C architecture, P&ID reviews, loop checks, and reliability-focused instrumentation work.',
  },
  {
    icon: Bot,
    title: 'Robotics & AI Integration',
    description:
      'Applied robotics, object detection, and AI-enabled system integration for industrial environments.',
  },
  {
    icon: Gauge,
    title: 'Troubleshooting & Optimization',
    description:
      'Root-cause analysis, system tuning, and performance improvement across field and control systems.',
  },
  {
    icon: Settings2,
    title: 'Technical Project Consulting',
    description:
      'Structured engineering support for project planning, vendor coordination, and implementation tracking.',
  },
  {
    icon: BrainCircuit,
    title: 'AI & IoT Advisory',
    description:
      'Focused advisory for sensing, monitoring, and intelligent automation use cases from prototype to rollout.',
  },
];

export const contactDetails = [
  { icon: Phone, label: 'Phone', value: profile.phone, href: 'tel:+918741814358' },
  { icon: Mail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  { icon: MapPin, label: 'Address', value: profile.address.join(', ') },
];
