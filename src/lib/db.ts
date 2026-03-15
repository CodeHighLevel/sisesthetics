export interface Booking {
  id: string;
  service: string;
  stylist: string;
  date: string;
  time: string;
  name: string;
  phone: string;
  status: 'pending' | 'confirmed' | 'cancelled';
  createdAt: string;
}

export interface ContactMessage {
  id: string;
  name: string;
  phone: string;
  email: string;
  message: string;
  read: boolean;
  createdAt: string;
}

export interface Subscriber {
  id: string;
  email: string;
  subscribedAt: string;
}

export interface StaffMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  specialties: string[];
  initials: string;
  serviceIds: string[];
  active: boolean;
}

export interface Service {
  id: string;
  name: string;
  description: string;
  price: string;
  duration: string;
  category: 'hair' | 'nails' | 'face';
  image: string;
  active: boolean;
}

export interface WorkingHoursEntry {
  id: string;
  day: string;
  open: string;
  close: string;
  closed: boolean;
}

function generateId(): string {
  return Math.random().toString(36).substring(2, 10) + Date.now().toString(36);
}

// --- SEED DATA ---

const bookings: Booking[] = [
  {
    id: 'demo-1',
    service: 'coloring',
    stylist: 'pavlinka',
    date: '2026-03-18',
    time: '10:00',
    name: 'Мария Кирилова',
    phone: '+359 888 111 222',
    status: 'confirmed',
    createdAt: '2026-03-14T09:30:00Z',
  },
  {
    id: 'demo-2',
    service: 'cutting',
    stylist: 'radoslav',
    date: '2026-03-18',
    time: '14:00',
    name: 'Елена Димитрова',
    phone: '+359 899 333 444',
    status: 'pending',
    createdAt: '2026-03-14T15:00:00Z',
  },
  {
    id: 'demo-3',
    service: 'manicure',
    stylist: 'bela',
    date: '2026-03-19',
    time: '11:30',
    name: 'София Петрова',
    phone: '+359 877 555 666',
    status: 'pending',
    createdAt: '2026-03-15T08:00:00Z',
  },
];

const contacts: ContactMessage[] = [
  {
    id: 'msg-1',
    name: 'Ана Тодорова',
    phone: '+359 888 777 888',
    email: 'ana@example.com',
    message: 'Здравейте, бих искала да попитам дали правите балеаж на къса коса?',
    read: false,
    createdAt: '2026-03-13T12:00:00Z',
  },
  {
    id: 'msg-2',
    name: 'Николай Иванов',
    phone: '+359 899 999 000',
    email: 'nikolai@example.com',
    message: 'Интересувам се от подаръчна карта за моята съпруга. Какви опции предлагате?',
    read: true,
    createdAt: '2026-03-12T16:30:00Z',
  },
];

const subscribers: Subscriber[] = [
  { id: 'sub-1', email: 'maria@example.com', subscribedAt: '2026-03-10T10:00:00Z' },
  { id: 'sub-2', email: 'elena@example.com', subscribedAt: '2026-03-11T14:00:00Z' },
  { id: 'sub-3', email: 'sofia@example.com', subscribedAt: '2026-03-13T09:00:00Z' },
];

const staff: StaffMember[] = [
  {
    id: 'pavlinka',
    name: 'Pavlinka Boteva',
    role: 'Owner & Lead Stylist',
    bio: 'Over 15 years of experience in professional hair care.',
    specialties: ['Coloring', 'Bridal', 'Styling'],
    initials: 'PB',
    serviceIds: ['cutting', 'styling', 'coloring', 'treatments', 'bridal'],
    active: true,
  },
  {
    id: 'radoslav',
    name: 'Radoslav Matev',
    role: 'Senior Stylist',
    bio: 'Creative vision and precision in every cut.',
    specialties: ['Cutting', 'Styling', 'Treatments'],
    initials: 'RM',
    serviceIds: ['cutting', 'styling', 'treatments'],
    active: true,
  },
  {
    id: 'bela',
    name: 'Bela Todorova',
    role: 'Beauty Specialist',
    bio: 'Nails and makeup expert with attention to every detail.',
    specialties: ['Manicure', 'Pedicure', 'Makeup'],
    initials: 'BT',
    serviceIds: ['manicure', 'pedicure', 'makeup'],
    active: true,
  },
];

const services: Service[] = [
  { id: 'cutting', name: 'Hair Cutting', description: 'Precision cuts', price: 'from 40 BGN', duration: '45 min', category: 'hair', image: '/sisesthetics-scraped/podstrigvane-2-min.jpg', active: true },
  { id: 'styling', name: 'Styling', description: 'Everyday elegance to special occasions', price: 'from 50 BGN', duration: '60 min', category: 'hair', image: '/sisesthetics-scraped/stailing-2-min.jpg', active: true },
  { id: 'coloring', name: 'Hair Coloring', description: 'Balayage, highlights, full color', price: 'from 80 BGN', duration: '120 min', category: 'hair', image: '/sisesthetics-scraped/boiadisvane-2-min.jpg', active: true },
  { id: 'treatments', name: 'Hair Treatments', description: 'Restorative treatments', price: 'from 60 BGN', duration: '45 min', category: 'hair', image: '/sisesthetics-scraped/terapia-1-min.jpg', active: true },
  { id: 'bridal', name: 'Bridal Styling', description: 'Hair, makeup, and styling for your special day', price: 'from 200 BGN', duration: '180 min', category: 'hair', image: '/sisesthetics-scraped/bulka-2-min.jpg', active: true },
  { id: 'manicure', name: 'Manicure', description: 'Classic, gel, and art manicure', price: 'from 35 BGN', duration: '60 min', category: 'nails', image: '/sisesthetics-scraped/manikiur-2-min.jpg', active: true },
  { id: 'pedicure', name: 'Pedicure', description: 'Relaxing pedicure treatments', price: 'from 45 BGN', duration: '75 min', category: 'nails', image: '/sisesthetics-scraped/pedikiur-2-min.jpg', active: true },
  { id: 'makeup', name: 'Makeup', description: 'Professional makeup for any occasion', price: 'from 70 BGN', duration: '60 min', category: 'face', image: '/sisesthetics-scraped/grim-2-min.jpg', active: true },
];

const workingHours: WorkingHoursEntry[] = [
  { id: 'mon', day: 'Monday', open: '09:00', close: '19:00', closed: false },
  { id: 'tue', day: 'Tuesday', open: '09:00', close: '19:00', closed: false },
  { id: 'wed', day: 'Wednesday', open: '09:00', close: '19:00', closed: false },
  { id: 'thu', day: 'Thursday', open: '09:00', close: '19:00', closed: false },
  { id: 'fri', day: 'Friday', open: '09:00', close: '19:00', closed: false },
  { id: 'sat', day: 'Saturday', open: '10:00', close: '17:00', closed: false },
  { id: 'sun', day: 'Sunday', open: '00:00', close: '00:00', closed: true },
];

// --- BOOKINGS ---

export async function createBooking(data: Omit<Booking, 'id' | 'status' | 'createdAt'>): Promise<Booking> {
  const booking: Booking = { ...data, id: generateId(), status: 'pending', createdAt: new Date().toISOString() };
  bookings.unshift(booking);
  return booking;
}

export async function getAllBookings(): Promise<Booking[]> {
  return [...bookings];
}

export async function getBookingById(id: string): Promise<Booking | undefined> {
  return bookings.find((b) => b.id === id);
}

export async function updateBookingStatus(id: string, status: Booking['status']): Promise<Booking | undefined> {
  const booking = bookings.find((b) => b.id === id);
  if (booking) booking.status = status;
  return booking;
}

// --- CONTACTS ---

export async function createContact(data: Omit<ContactMessage, 'id' | 'read' | 'createdAt'>): Promise<ContactMessage> {
  const msg: ContactMessage = { ...data, id: generateId(), read: false, createdAt: new Date().toISOString() };
  contacts.unshift(msg);
  return msg;
}

export async function getAllContacts(): Promise<ContactMessage[]> {
  return [...contacts];
}

export async function markContactRead(id: string): Promise<ContactMessage | undefined> {
  const msg = contacts.find((c) => c.id === id);
  if (msg) msg.read = true;
  return msg;
}

// --- NEWSLETTER ---

export async function createSubscriber(email: string): Promise<Subscriber> {
  const existing = subscribers.find((s) => s.email === email);
  if (existing) throw new Error('Already subscribed');
  const sub: Subscriber = { id: generateId(), email, subscribedAt: new Date().toISOString() };
  subscribers.unshift(sub);
  return sub;
}

export async function getAllSubscribers(): Promise<Subscriber[]> {
  return [...subscribers];
}

export async function deleteSubscriber(email: string): Promise<boolean> {
  const idx = subscribers.findIndex((s) => s.email === email);
  if (idx === -1) return false;
  subscribers.splice(idx, 1);
  return true;
}

// --- STAFF ---

export async function getAllStaff(): Promise<StaffMember[]> {
  return [...staff];
}

export async function getStaffById(id: string): Promise<StaffMember | undefined> {
  return staff.find((s) => s.id === id);
}

export async function createStaff(data: Omit<StaffMember, 'id' | 'active'>): Promise<StaffMember> {
  const member: StaffMember = { ...data, id: generateId(), active: true };
  staff.push(member);
  return member;
}

export async function updateStaff(id: string, data: Partial<Omit<StaffMember, 'id'>>): Promise<StaffMember | undefined> {
  const member = staff.find((s) => s.id === id);
  if (!member) return undefined;
  Object.assign(member, data);
  return member;
}

export async function deleteStaff(id: string): Promise<boolean> {
  const idx = staff.findIndex((s) => s.id === id);
  if (idx === -1) return false;
  staff.splice(idx, 1);
  return true;
}

// --- SERVICES ---

export async function getAllServices(): Promise<Service[]> {
  return [...services];
}

export async function createService(data: Omit<Service, 'id' | 'active'>): Promise<Service> {
  const svc: Service = { ...data, id: generateId(), active: true };
  services.push(svc);
  return svc;
}

export async function updateService(id: string, data: Partial<Omit<Service, 'id'>>): Promise<Service | undefined> {
  const svc = services.find((s) => s.id === id);
  if (!svc) return undefined;
  Object.assign(svc, data);
  return svc;
}

export async function deleteService(id: string): Promise<boolean> {
  const idx = services.findIndex((s) => s.id === id);
  if (idx === -1) return false;
  services.splice(idx, 1);
  return true;
}

// --- WORKING HOURS ---

export async function getWorkingHours(): Promise<WorkingHoursEntry[]> {
  return [...workingHours];
}

export async function updateWorkingHoursEntry(id: string, data: Partial<Omit<WorkingHoursEntry, 'id' | 'day'>>): Promise<WorkingHoursEntry | undefined> {
  const entry = workingHours.find((h) => h.id === id);
  if (!entry) return undefined;
  Object.assign(entry, data);
  return entry;
}
