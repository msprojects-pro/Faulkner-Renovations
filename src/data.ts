export interface Service {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: 'Tv' | 'Clapperboard' | 'Layers' | 'DoorClosed' | 'ChefHat' | 'Wrench' | 'Warehouse' | 'Maximize';
  features: string[];
}

export interface Project {
  id: string;
  title: string;
  category: string;
  location: string;
  image: string;
  tag: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  text: string;
  project: string;
  date: string;
}

export const SERVICES: Service[] = [
  {
    id: 'media-walls',
    title: 'Media Walls & Feature Walls',
    shortDesc: 'Bespoke entertainment hubs featuring integrated smart TVs, ribbon fireplaces, and hidden cable management.',
    fullDesc: 'We design and construct luxury media walls tailored to your living space. From floating shelves and built-in alcoves to vertical acoustic wooden slats and ambient smart LED lighting, we create the ultimate home cinema and focal point for your room.',
    iconName: 'Tv',
    features: ['Integrated ribbon fireplaces', 'Precision television recess sizing', 'Hidden cable trunking and access', 'Ambient remote-controlled LED backlighting']
  },
  {
    id: 'custom-wardrobes',
    title: 'Custom Built Wardrobes',
    shortDesc: 'Stunning floor-to-ceiling fitted wardrobes customized to optimize your bedroom layout and storage space.',
    fullDesc: 'Maximize your bedroom space with our made-to-measure fitted wardrobes. Available in a vast selection of high-end finishes, sliding or hinged doors, with custom interior configurations including vanity units, shoe racks, pull-out drawers, and integrated LED lighting.',
    iconName: 'DoorClosed',
    features: ['Floor-to-ceiling maximize storage', 'Soft-close luxury German hinges & runners', 'Bespoke drawer, shelving and hanging configs', 'Modern matte, shaker, or mirrored doors']
  },
  {
    id: 'kitchen-refurbishment',
    title: 'Kitchen Refurbishments',
    shortDesc: 'Complete modern kitchen updates from premium quartz worktops to bespoke cabinet refacing and open-plan design.',
    fullDesc: 'The kitchen is the heart of the home. Whether you need a full tear-out and remodel or a high-quality refurbishment with premium new cabinets, luxury quartz countertops, state-of-the-art integrated appliances, and beautiful tiling, we deliver flawless results.',
    iconName: 'ChefHat',
    features: ['Premium quartz, granite, or solid wood tops', 'Custom layout and structural alterations', 'Bespoke breakfast bars & kitchen islands', 'Full appliance integration and plumbing']
  },
  {
    id: 'wall-panelling',
    title: 'Wall Panelling (Acoustic & Traditional)',
    shortDesc: 'Transform plain walls with contemporary acoustic wood slat panels or timeless traditional shaker panelling.',
    fullDesc: 'Add immediate character, warmth, and depth to any room. We specialize in both contemporary vertical acoustic wood slat panelling (improving sound acoustics and modern aesthetics) and timeless, elegant MDF traditional panelling (shaker, jacobean, or beadboard styles).',
    iconName: 'Layers',
    features: ['Sound-absorbing modern acoustic wood slats', 'Traditional shaker, Georgian, and dado rail panelling', 'Precision spray-painted or hand-finished options', 'Perfect for hallways, bedrooms, and dining spaces']
  },
  {
    id: 'garage-conversions',
    title: 'Garage Conversions',
    shortDesc: 'Convert cold, unused garage spaces into highly functional, fully insulated modern rooms.',
    fullDesc: 'Unlock your home’s hidden footprint. We transform cold, cluttered garages into warm, fully insulated, and building-regulation-compliant living spaces. Ideal for home offices, kids’ playrooms, personal home gyms, utility rooms, or extra bedrooms.',
    iconName: 'Warehouse',
    features: ['Full premium insulation & damp proofing', 'Building regulations approval compliance', 'Plastering, electrical, heating & lighting setup', 'Seamless integration with existing house facade']
  },
  {
    id: 'made-to-measure-storage',
    title: 'Made to Measure Storage',
    shortDesc: 'Bespoke under-stairs storage, floating alcove units, and custom joinery to fit awkward spaces perfectly.',
    fullDesc: 'Turn awkward, under-utilized spaces into functional, beautiful storage systems. We design and craft bespoke under-stairs drawer systems, floating alcove shelving units, integrated bookcases, and custom storage trunks to fit your home’s exact dimensions.',
    iconName: 'Maximize',
    features: ['Under-stairs push-to-open drawer units', 'Floating alcove shelves & fitted bookcases', 'Custom window seats with integrated storage', 'Bespoke hallway coat and shoe organizers']
  }
];

export const GALLERY_PROJECTS: Project[] = [
  {
    id: 'p1',
    title: 'Bespoke Media Wall & Electric Fireplace',
    category: 'Media Walls',
    location: 'Wickersley, Rotherham',
    image: '/images/hero_media_wall_1783101277176.jpg',
    tag: 'Latest Work'
  },
  {
    id: 'p2',
    title: 'Luxury Fitted Wardrobe in Matte Navy',
    category: 'Custom Wardrobes',
    location: 'Moorgate, Rotherham',
    image: '/images/custom_wardrobe_1783101297771.jpg',
    tag: 'Fitted Joinery'
  },
  {
    id: 'p3',
    title: 'Modern Shaker Kitchen Remodel',
    category: 'Kitchen Refurbishment',
    location: 'Bramley, Rotherham',
    image: '/images/modern_kitchen_1783101316422.jpg',
    tag: 'Full Refurb'
  },
  {
    id: 'p4',
    title: 'Acoustic Wood Slat Feature Panelling',
    category: 'Wall Panelling',
    location: 'Whiston, Rotherham',
    image: '/images/acoustic_panelling_1783101329119.jpg',
    tag: 'Contemporary'
  },
  {
    id: 'p5',
    title: 'Premium Garage Conversion to Home Office',
    category: 'Garage Conversions',
    location: 'Ravenfield, Rotherham',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
    tag: 'Conversions'
  },
  {
    id: 'p6',
    title: 'Bespoke Under-Stairs Storage System',
    category: 'Made to Measure Storage',
    location: 'Greasbrough, Rotherham',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    tag: 'Smart Storage'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Mark & Sarah Jennings',
    location: 'Wickersley, Rotherham',
    rating: 5,
    text: 'Faulkner Renovations built our dream media wall. The craftsmanship is flawless—the acoustic slatting and the hidden wiring are perfect. They kept everything clean, tidy, and finished right on schedule. Absolutely recommend!',
    project: 'Bespoke Media Wall',
    date: 'May 2026'
  },
  {
    id: 't2',
    name: 'Rebecca Thorne',
    location: 'Moorgate, Rotherham',
    rating: 5,
    text: 'Highly professional from start to finish. Our fitted bedroom wardrobes look like they belong in a five-star hotel. Excellent communication and incredible attention to detail. Worth every single penny.',
    project: 'Bespoke Fitted Wardrobes',
    date: 'June 2026'
  },
  {
    id: 't3',
    name: 'David Harrison',
    location: 'Bramley, Rotherham',
    rating: 5,
    text: 'We hired Faulkner Renovations to convert our cold, brick garage into a modern home gym and playroom. They handled everything: insulation, plastering, custom doors, and electrics. It has completely changed how we use our home!',
    project: 'Garage Conversion',
    date: 'April 2026'
  }
];
