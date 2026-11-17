// Central image paths + demo content for the Mint Dental website.
// IMPORTANT: every person shown here is a FICTIONAL demo profile backed by an
// AI-generated image. Never present them as real doctors, real patients or
// real reviews. See public/images/README.md for the full rules.

// Prefix with the Vite base URL so assets resolve correctly on GitHub Pages
// subpaths (e.g. /mint-dental-clinic/) as well as on the local dev server.
export const assetUrl = (path: string) => `${import.meta.env.BASE_URL}${path}`

export const IMAGES = {
  dentistFemale: assetUrl('images/dentist-female.png'),
  dentistMale: assetUrl('images/dentist-male.png'),
  dentalTeam: assetUrl('images/dental-team.png'),
  testimonialMale: assetUrl('images/testimonial-male.png'),
  testimonialFemale: assetUrl('images/testimonial-female.png'),
  testimonialSeniorFemale: assetUrl('images/testimonial-senior-female.png'),
  clinicReception: assetUrl('images/clinic-reception.png'),
  treatmentRoom: assetUrl('images/treatment-room.png'),
  dentalXray: assetUrl('images/dental-xray.png'),
  dentalInstruments: assetUrl('images/dental-instruments.png'),
  teethModel: assetUrl('images/teeth-model.png'),
} as const

export type Treatment = { name: string; icon: string; description: string }

export const treatments: Treatment[] = [
  { name: 'Dental Implants', icon: 'icon-implants.png', description: 'Restore missing teeth with natural-looking implants.' },
  { name: 'Teeth Whitening', icon: 'icon-whitening.png', description: 'Bring back your confident, brighter smile.' },
  { name: 'Root Canal', icon: 'icon-root-canal.png', description: 'Gentle care to preserve your natural teeth.' },
  { name: 'Braces & Aligners', icon: 'icon-braces.png', description: 'Create a straighter, balanced smile.' },
  { name: 'Dental Crowns', icon: 'icon-crowns.png', description: 'Restore damaged teeth with precision.' },
  { name: 'Tooth Extraction', icon: 'icon-extraction.png', description: 'Professional care for problem teeth.' },
  { name: 'Pediatric Dentistry', icon: 'icon-comfort.png', description: 'Friendly dental care for little smiles.' },
  { name: 'Preventive Care', icon: 'icon-protection.png', description: 'Protect your teeth with regular dental care.' },
]

export type Doctor = { name: string; role: string; intro: string; photo: string; alt: string }

export const doctors: Doctor[] = [
  {
    name: 'Dr. Ananya Sharma',
    role: 'Dental Surgeon · Demo profile',
    intro:
      'Fictional demo profile previewing this layout. Specialization, qualifications and introduction will be finalized with the clinic before launch.',
    photo: IMAGES.dentistFemale,
    alt: 'AI-generated fictional portrait of a female dental surgeon — demo profile',
  },
  {
    name: 'Dr. Arjun Mehta',
    role: 'Dental Surgeon · Demo profile',
    intro:
      'Fictional demo profile previewing this layout. Specialization, qualifications and introduction will be finalized with the clinic before launch.',
    photo: IMAGES.dentistMale,
    alt: 'AI-generated fictional portrait of a male dental surgeon — demo profile',
  },
]

export type Testimonial = { quote: string; name: string; photo: string; alt: string }

export const testimonials: Testimonial[] = [
  {
    quote:
      'Booking was quick and the team explained every step before starting. Demo text used to preview the final layout.',
    name: 'Rohit K. · Demo patient',
    photo: IMAGES.testimonialMale,
    alt: 'AI-generated fictional portrait of a male patient giving a thumbs up — demo review',
  },
  {
    quote:
      'The clinic feels calm and modern, and treatment was gentler than expected. Placeholder review for layout purposes.',
    name: 'Priya M. · Demo patient',
    photo: IMAGES.testimonialFemale,
    alt: 'AI-generated fictional portrait of a smiling female patient — demo review',
  },
  {
    quote:
      'Clear guidance at every step of the visit and a friendly team. Demo review text, not a real patient statement.',
    name: 'Sunita D. · Demo patient',
    photo: IMAGES.testimonialSeniorFemale,
    alt: 'AI-generated fictional portrait of a senior female patient giving a thumbs up — demo review',
  },
]

export type GalleryImage = { src: string; alt: string; caption: string; span: string }

// Spans build an asymmetric 6-column grid on desktop:
// reception 3×2 large, treatment room 3-wide, three 1-cell images below.
export const galleryImages: GalleryImage[] = [
  {
    src: IMAGES.clinicReception,
    alt: 'Demo render of a bright dental clinic reception with mint branding',
    caption: 'Reception',
    span: 'sm:col-span-2 lg:col-span-3 lg:row-span-2',
  },
  {
    src: IMAGES.treatmentRoom,
    alt: 'Demo render of a modern dental treatment room with a mint chair',
    caption: 'Treatment room',
    span: 'lg:col-span-3',
  },
  {
    src: IMAGES.dentalXray,
    alt: 'Demo render of a panoramic dental X-ray on a monitor',
    caption: 'Digital X-ray',
    span: 'lg:col-span-1',
  },
  {
    src: IMAGES.dentalInstruments,
    alt: 'Demo render of sterilized dental instruments on a mint tray',
    caption: 'Instruments',
    span: 'lg:col-span-1',
  },
  {
    src: IMAGES.teethModel,
    alt: 'Demo render of a dental teeth model with a mouth mirror',
    caption: 'Smile education',
    span: 'lg:col-span-1',
  },
]

export type Faq = { question: string; answer: string }

export const faqs: Faq[] = [
  {
    question: 'How do I book an appointment?',
    answer:
      'Demo answer: use the booking button above. The final booking flow — phone, WhatsApp or an online form — will be connected before launch.',
  },
  {
    question: 'Do you treat children?',
    answer:
      'Demo answer: pediatric care is part of the treatment list. Age-specific details will be finalized with the clinic.',
  },
  {
    question: 'Is teeth whitening safe?',
    answer:
      'Demo answer: whitening is offered as a supervised treatment. Exact protocols and pricing will be confirmed by the clinic.',
  },
  {
    question: 'How long does a first visit take?',
    answer:
      'Demo answer: a first visit usually includes an examination and a treatment-plan discussion. Timings will be finalized before launch.',
  },
  {
    question: 'What payment options are available?',
    answer:
      'Demo answer: payment and insurance options are placeholders here and will be updated with clinic-approved information.',
  },
]
