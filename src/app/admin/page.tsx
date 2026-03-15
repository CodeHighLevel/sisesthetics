'use client';

import { useState, useEffect, useReducer } from 'react';
import Link from 'next/link';
import {
  Calendar, MessageSquare, Mail, Settings, Users, Scissors, Clock,
  CheckCircle, XCircle, Eye, Trash2, ArrowLeft, Plus, Edit3, X, Save,
} from 'lucide-react';
import type { Booking, ContactMessage, Subscriber, StaffMember, Service, WorkingHoursEntry } from '@/lib/db';

type Tab = 'bookings' | 'staff' | 'services' | 'hours' | 'messages' | 'subscribers' | 'settings';

const statusConfig = {
  pending: { label: 'Pending', color: 'bg-amber-100 text-amber-700', icon: Clock },
  confirmed: { label: 'Confirmed', color: 'bg-emerald-100 text-emerald-700', icon: CheckCircle },
  cancelled: { label: 'Cancelled', color: 'bg-red-100 text-red-700', icon: XCircle },
};

const categoryLabels: Record<string, string> = { hair: 'Hair', nails: 'Nails', face: 'Face' };

const inputCls = 'w-full px-3 py-2 bg-white border border-neutral-200 text-[13px] focus:outline-none focus:border-accent transition-colors';
const labelCls = 'block text-[10px] tracking-[0.15em] uppercase text-neutral-400 mb-1.5';

export default function AdminPage() {
  const [tab, setTab] = useState<Tab>('bookings');
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [subscribers, setSubscribers] = useState<Subscriber[]>([]);
  const [staffList, setStaffList] = useState<StaffMember[]>([]);
  const [servicesList, setServicesList] = useState<Service[]>([]);
  const [hours, setHours] = useState<WorkingHoursEntry[]>([]);
  const [refreshKey, refresh] = useReducer((x: number) => x + 1, 0);

  // Modals
  const [showStaffForm, setShowStaffForm] = useState(false);
  const [editingStaff, setEditingStaff] = useState<StaffMember | null>(null);
  const [showServiceForm, setShowServiceForm] = useState(false);
  const [editingService, setEditingService] = useState<Service | null>(null);

  useEffect(() => {
    let cancelled = false;
    Promise.all([
      fetch('/api/booking').then((r) => r.json()),
      fetch('/api/contact').then((r) => r.json()),
      fetch('/api/newsletter').then((r) => r.json()),
      fetch('/api/staff').then((r) => r.json()),
      fetch('/api/services').then((r) => r.json()),
      fetch('/api/hours').then((r) => r.json()),
    ]).then(([bData, cData, sData, stData, svData, hData]) => {
      if (cancelled) return;
      setBookings(bData.bookings || []);
      setMessages(cData.messages || []);
      setSubscribers(sData.subscribers || []);
      setStaffList(stData.staff || []);
      setServicesList(svData.services || []);
      setHours(hData.hours || []);
    });
    return () => { cancelled = true; };
  }, [refreshKey]);

  const api = async (url: string, method: string, body?: object) => {
    await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      ...(body ? { body: JSON.stringify(body) } : {}),
    });
    refresh();
  };

  const tabs: { key: Tab; label: string; icon: typeof Calendar; count?: number }[] = [
    { key: 'bookings', label: 'Bookings', icon: Calendar, count: bookings.filter((b) => b.status === 'pending').length },
    { key: 'staff', label: 'Staff', icon: Users, count: staffList.filter((s) => s.active).length },
    { key: 'services', label: 'Services', icon: Scissors, count: servicesList.filter((s) => s.active).length },
    { key: 'hours', label: 'Hours', icon: Clock },
    { key: 'messages', label: 'Messages', icon: MessageSquare, count: messages.filter((m) => !m.read).length },
    { key: 'subscribers', label: 'Subscribers', icon: Mail, count: subscribers.length },
    { key: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-neutral-50">
      <div className="bg-neutral-900 text-white">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/" className="text-neutral-400 hover:text-white transition-colors">
              <ArrowLeft size={18} />
            </Link>
            <h1 className="font-serif text-lg tracking-[0.15em] uppercase">Sis Esthetics</h1>
            <span className="text-[10px] tracking-[0.2em] uppercase text-neutral-500 bg-neutral-800 px-2 py-1">Admin</span>
          </div>
          <span className="text-[11px] text-neutral-500">Demo Dashboard</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex gap-1.5 mb-8 border-b border-neutral-200 pb-4 overflow-x-auto">
          {tabs.map((t) => (
            <button
              key={t.key}
              onClick={() => setTab(t.key)}
              className={`flex items-center gap-2 px-3 py-2 text-[11px] tracking-[0.1em] uppercase transition-all whitespace-nowrap ${
                tab === t.key ? 'bg-accent text-white' : 'text-neutral-500 hover:text-foreground hover:bg-neutral-100'
              }`}
            >
              <t.icon size={13} />
              {t.label}
              {t.count !== undefined && t.count > 0 && (
                <span className={`ml-0.5 text-[9px] px-1.5 py-0.5 rounded-full ${
                  tab === t.key ? 'bg-white/20 text-white' : 'bg-accent-gold/20 text-accent'
                }`}>{t.count}</span>
              )}
            </button>
          ))}
        </div>

        {/* BOOKINGS */}
        {tab === 'bookings' && (
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-serif">Appointments</h2>
              <span className="text-[11px] text-neutral-400">{bookings.length} total</span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-neutral-200">
                    {['Date', 'Time', 'Client', 'Phone', 'Service', 'Stylist', 'Status', 'Actions'].map((h) => (
                      <th key={h} className="pb-3 text-[10px] tracking-[0.15em] uppercase text-neutral-400 font-medium pr-4">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {bookings.map((b) => {
                    const cfg = statusConfig[b.status];
                    const svc = servicesList.find((s) => s.id === b.service);
                    const st = staffList.find((s) => s.id === b.stylist);
                    return (
                      <tr key={b.id} className="border-b border-neutral-100 hover:bg-white transition-colors">
                        <td className="py-3.5 text-[13px] pr-4">{b.date}</td>
                        <td className="py-3.5 text-[13px] pr-4">{b.time}</td>
                        <td className="py-3.5 text-[13px] font-medium pr-4">{b.name}</td>
                        <td className="py-3.5 text-[13px] text-neutral-500 pr-4">{b.phone}</td>
                        <td className="py-3.5 text-[13px] pr-4">{svc?.name || b.service}</td>
                        <td className="py-3.5 text-[13px] pr-4">{st?.name || b.stylist}</td>
                        <td className="py-3.5 pr-4">
                          <span className={`inline-flex items-center gap-1 px-2 py-1 text-[10px] tracking-wider uppercase ${cfg.color}`}>
                            <cfg.icon size={10} />{cfg.label}
                          </span>
                        </td>
                        <td className="py-3.5">
                          <div className="flex gap-1">
                            {b.status !== 'confirmed' && (
                              <button onClick={() => api(`/api/booking/${b.id}`, 'PATCH', { status: 'confirmed' })} className="p-1.5 text-emerald-600 hover:bg-emerald-50" title="Confirm"><CheckCircle size={14} /></button>
                            )}
                            {b.status !== 'cancelled' && (
                              <button onClick={() => api(`/api/booking/${b.id}`, 'PATCH', { status: 'cancelled' })} className="p-1.5 text-red-500 hover:bg-red-50" title="Cancel"><XCircle size={14} /></button>
                            )}
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              {bookings.length === 0 && <p className="text-center text-neutral-400 text-sm py-12">No bookings yet</p>}
            </div>
          </div>
        )}

        {/* STAFF */}
        {tab === 'staff' && (
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-serif">Staff Members</h2>
              <button onClick={() => { setEditingStaff(null); setShowStaffForm(true); }} className="flex items-center gap-2 px-4 py-2 bg-accent text-white text-[11px] tracking-[0.15em] uppercase hover:bg-accent-dark transition-colors">
                <Plus size={14} /> Add Staff
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {staffList.map((m) => (
                <div key={m.id} className={`border p-5 ${m.active ? 'border-neutral-200 bg-white' : 'border-neutral-100 bg-neutral-50 opacity-60'}`}>
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center border border-accent/15">
                        <span className="font-serif text-sm text-accent">{m.initials}</span>
                      </div>
                      <div>
                        <h3 className="text-sm font-medium">{m.name}</h3>
                        <p className="text-[11px] text-neutral-400">{m.role}</p>
                      </div>
                    </div>
                    <div className="flex gap-1">
                      <button onClick={() => { setEditingStaff(m); setShowStaffForm(true); }} className="p-1.5 text-neutral-400 hover:text-accent hover:bg-accent/10 transition-colors"><Edit3 size={13} /></button>
                      <button onClick={() => api(`/api/staff/${m.id}`, 'DELETE')} className="p-1.5 text-neutral-400 hover:text-red-500 hover:bg-red-50 transition-colors"><Trash2 size={13} /></button>
                    </div>
                  </div>
                  <p className="text-[12px] text-neutral-500 mb-3">{m.bio}</p>
                  <div className="mb-3">
                    <span className="text-[10px] tracking-[0.15em] uppercase text-neutral-400 block mb-1.5">Specialties</span>
                    <div className="flex flex-wrap gap-1">
                      {m.specialties.map((s) => (
                        <span key={s} className="text-[10px] px-2 py-0.5 bg-accent/5 text-accent border border-accent/10">{s}</span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <span className="text-[10px] tracking-[0.15em] uppercase text-neutral-400 block mb-1.5">Assigned Services</span>
                    <div className="flex flex-wrap gap-1">
                      {m.serviceIds.map((sid) => {
                        const svc = servicesList.find((s) => s.id === sid);
                        return <span key={sid} className="text-[10px] px-2 py-0.5 bg-neutral-100 text-neutral-600">{svc?.name || sid}</span>;
                      })}
                      {m.serviceIds.length === 0 && <span className="text-[10px] text-neutral-300">None</span>}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {showStaffForm && (
              <StaffFormModal
                staff={editingStaff}
                services={servicesList}
                onClose={() => setShowStaffForm(false)}
                onSave={async (data) => {
                  if (editingStaff) {
                    await api(`/api/staff/${editingStaff.id}`, 'PATCH', data);
                  } else {
                    await api('/api/staff', 'POST', data);
                  }
                  setShowStaffForm(false);
                }}
              />
            )}
          </div>
        )}

        {/* SERVICES */}
        {tab === 'services' && (
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-serif">Services</h2>
              <button onClick={() => { setEditingService(null); setShowServiceForm(true); }} className="flex items-center gap-2 px-4 py-2 bg-accent text-white text-[11px] tracking-[0.15em] uppercase hover:bg-accent-dark transition-colors">
                <Plus size={14} /> Add Service
              </button>
            </div>

            {(['hair', 'nails', 'face'] as const).map((cat) => {
              const catServices = servicesList.filter((s) => s.category === cat);
              if (catServices.length === 0) return null;
              return (
                <div key={cat} className="mb-8">
                  <h3 className="text-[11px] tracking-[0.15em] uppercase text-accent mb-3">{categoryLabels[cat]}</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left">
                      <thead>
                        <tr className="border-b border-neutral-200">
                          {['Name', 'Price', 'Duration', 'Staff', 'Status', 'Actions'].map((h) => (
                            <th key={h} className="pb-2 text-[10px] tracking-[0.15em] uppercase text-neutral-400 font-medium pr-4">{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {catServices.map((svc) => {
                          const assignedStaff = staffList.filter((s) => s.serviceIds.includes(svc.id));
                          return (
                            <tr key={svc.id} className={`border-b border-neutral-100 hover:bg-white transition-colors ${!svc.active ? 'opacity-50' : ''}`}>
                              <td className="py-3 text-[13px] pr-4 font-medium">{svc.name}</td>
                              <td className="py-3 text-[13px] pr-4 text-neutral-500">{svc.price}</td>
                              <td className="py-3 text-[13px] pr-4 text-neutral-500">{svc.duration}</td>
                              <td className="py-3 text-[13px] pr-4">
                                <div className="flex gap-1">
                                  {assignedStaff.map((s) => (
                                    <span key={s.id} className="text-[10px] px-2 py-0.5 bg-accent/5 text-accent border border-accent/10">{s.initials}</span>
                                  ))}
                                  {assignedStaff.length === 0 && <span className="text-[10px] text-neutral-300">—</span>}
                                </div>
                              </td>
                              <td className="py-3 pr-4">
                                <button
                                  onClick={() => api(`/api/services/${svc.id}`, 'PATCH', { active: !svc.active })}
                                  className={`text-[10px] px-2 py-1 tracking-wider uppercase ${svc.active ? 'bg-emerald-100 text-emerald-700' : 'bg-neutral-100 text-neutral-500'}`}
                                >
                                  {svc.active ? 'Active' : 'Inactive'}
                                </button>
                              </td>
                              <td className="py-3">
                                <div className="flex gap-1">
                                  <button onClick={() => { setEditingService(svc); setShowServiceForm(true); }} className="p-1.5 text-neutral-400 hover:text-accent hover:bg-accent/10"><Edit3 size={13} /></button>
                                  <button onClick={() => api(`/api/services/${svc.id}`, 'DELETE')} className="p-1.5 text-neutral-400 hover:text-red-500 hover:bg-red-50"><Trash2 size={13} /></button>
                                </div>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              );
            })}

            {showServiceForm && (
              <ServiceFormModal
                service={editingService}
                onClose={() => setShowServiceForm(false)}
                onSave={async (data) => {
                  if (editingService) {
                    await api(`/api/services/${editingService.id}`, 'PATCH', data);
                  } else {
                    await api('/api/services', 'POST', data);
                  }
                  setShowServiceForm(false);
                }}
              />
            )}
          </div>
        )}

        {/* WORKING HOURS */}
        {tab === 'hours' && (
          <div className="max-w-lg">
            <h2 className="text-lg font-serif mb-6">Working Hours</h2>
            <div className="border border-neutral-200 bg-white divide-y divide-neutral-100">
              {hours.map((h) => (
                <div key={h.id} className="flex items-center gap-4 px-5 py-3.5">
                  <span className="text-[13px] font-medium w-28">{h.day}</span>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={!h.closed}
                      onChange={() => api('/api/hours', 'PATCH', { id: h.id, closed: !h.closed })}
                      className="accent-accent"
                    />
                    <span className="text-[11px] text-neutral-400">{h.closed ? 'Closed' : 'Open'}</span>
                  </label>
                  {!h.closed && (
                    <div className="flex items-center gap-2 ml-auto">
                      <input
                        type="time"
                        value={h.open}
                        onChange={(e) => api('/api/hours', 'PATCH', { id: h.id, open: e.target.value })}
                        className="px-2 py-1 border border-neutral-200 text-[13px] focus:outline-none focus:border-accent"
                      />
                      <span className="text-neutral-300">—</span>
                      <input
                        type="time"
                        value={h.close}
                        onChange={(e) => api('/api/hours', 'PATCH', { id: h.id, close: e.target.value })}
                        className="px-2 py-1 border border-neutral-200 text-[13px] focus:outline-none focus:border-accent"
                      />
                    </div>
                  )}
                  {h.closed && <span className="ml-auto text-[12px] text-neutral-300">—</span>}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* MESSAGES */}
        {tab === 'messages' && (
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-serif">Contact Messages</h2>
              <span className="text-[11px] text-neutral-400">{messages.filter((m) => !m.read).length} unread</span>
            </div>
            <div className="space-y-3">
              {messages.map((m) => (
                <div key={m.id} className={`p-5 border transition-colors ${m.read ? 'border-neutral-200 bg-white' : 'border-accent/20 bg-accent/[0.02]'}`}>
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div>
                      <span className="text-sm font-medium">{m.name}</span>
                      <span className="text-neutral-300 mx-2">|</span>
                      <a href={`mailto:${m.email}`} className="text-[13px] text-accent hover:underline">{m.email}</a>
                      {m.phone && (<><span className="text-neutral-300 mx-2">|</span><span className="text-[13px] text-neutral-500">{m.phone}</span></>)}
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] text-neutral-400">{new Date(m.createdAt).toLocaleDateString()}</span>
                      {!m.read && (
                        <button onClick={() => api(`/api/contact/${m.id}`, 'PATCH')} className="p-1.5 text-accent hover:bg-accent/10" title="Mark as read"><Eye size={14} /></button>
                      )}
                    </div>
                  </div>
                  <p className="text-[13px] text-neutral-600 leading-relaxed">{m.message}</p>
                </div>
              ))}
              {messages.length === 0 && <p className="text-center text-neutral-400 text-sm py-12">No messages yet</p>}
            </div>
          </div>
        )}

        {/* SUBSCRIBERS */}
        {tab === 'subscribers' && (
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-serif">Newsletter Subscribers</h2>
              <span className="text-[11px] text-neutral-400">{subscribers.length} total</span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-neutral-200">
                    {['Email', 'Subscribed', 'Actions'].map((h) => (
                      <th key={h} className="pb-3 text-[10px] tracking-[0.15em] uppercase text-neutral-400 font-medium pr-4">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {subscribers.map((s) => (
                    <tr key={s.id} className="border-b border-neutral-100 hover:bg-white transition-colors">
                      <td className="py-3.5 text-[13px] pr-4">{s.email}</td>
                      <td className="py-3.5 text-[13px] text-neutral-500 pr-4">{new Date(s.subscribedAt).toLocaleDateString()}</td>
                      <td className="py-3.5"><button onClick={() => api('/api/newsletter', 'DELETE', { email: s.email })} className="p-1.5 text-red-500 hover:bg-red-50"><Trash2 size={14} /></button></td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {subscribers.length === 0 && <p className="text-center text-neutral-400 text-sm py-12">No subscribers yet</p>}
            </div>
          </div>
        )}

        {/* SETTINGS */}
        {tab === 'settings' && (
          <div className="max-w-lg">
            <h2 className="text-lg font-serif mb-6">Settings</h2>
            <div className="border border-neutral-200 p-8 bg-white space-y-4">
              <p className="text-[13px] text-neutral-400 mb-2">Demo mode — data resets on server restart.</p>
              {[
                { label: 'Database', value: 'In-Memory (Demo)' },
                { label: 'Authentication', value: 'Not configured' },
                { label: 'Notifications', value: 'SMS & Email — Not configured' },
                { label: 'Payments', value: 'Not configured' },
              ].map((item) => (
                <div key={item.label} className="border border-neutral-200 p-4">
                  <h3 className="text-[10px] tracking-[0.15em] uppercase text-neutral-400 mb-1">{item.label}</h3>
                  <p className="text-sm">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// --- STAFF FORM MODAL ---

function StaffFormModal({ staff, services, onClose, onSave }: {
  staff: StaffMember | null;
  services: Service[];
  onClose: () => void;
  onSave: (data: Partial<StaffMember>) => Promise<void>;
}) {
  const [form, setForm] = useState({
    name: staff?.name || '',
    role: staff?.role || '',
    bio: staff?.bio || '',
    specialties: staff?.specialties?.join(', ') || '',
    initials: staff?.initials || '',
    serviceIds: staff?.serviceIds || [] as string[],
  });

  const update = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((p) => ({ ...p, [field]: e.target.value }));

  const toggleService = (id: string) =>
    setForm((p) => ({
      ...p,
      serviceIds: p.serviceIds.includes(id) ? p.serviceIds.filter((s) => s !== id) : [...p.serviceIds, id],
    }));

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="bg-white border border-neutral-200 w-full max-w-md max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-200">
          <h3 className="font-serif text-lg">{staff ? 'Edit Staff' : 'Add Staff'}</h3>
          <button onClick={onClose} className="text-neutral-400 hover:text-foreground"><X size={18} /></button>
        </div>
        <div className="p-6 space-y-4">
          <div>
            <label className={labelCls}>Name *</label>
            <input value={form.name} onChange={update('name')} className={inputCls} />
          </div>
          <div>
            <label className={labelCls}>Role *</label>
            <input value={form.role} onChange={update('role')} className={inputCls} placeholder="e.g. Senior Stylist" />
          </div>
          <div>
            <label className={labelCls}>Initials</label>
            <input value={form.initials} onChange={update('initials')} className={inputCls} maxLength={3} placeholder="e.g. PB" />
          </div>
          <div>
            <label className={labelCls}>Bio</label>
            <textarea value={form.bio} onChange={update('bio')} className={inputCls} rows={3} />
          </div>
          <div>
            <label className={labelCls}>Specialties (comma separated)</label>
            <input value={form.specialties} onChange={update('specialties')} className={inputCls} placeholder="e.g. Coloring, Styling" />
          </div>
          <div>
            <label className={labelCls}>Assigned Services</label>
            <div className="grid grid-cols-2 gap-2 mt-1">
              {services.map((svc) => (
                <label key={svc.id} className="flex items-center gap-2 cursor-pointer text-[12px]">
                  <input
                    type="checkbox"
                    checked={form.serviceIds.includes(svc.id)}
                    onChange={() => toggleService(svc.id)}
                    className="accent-accent"
                  />
                  {svc.name}
                </label>
              ))}
            </div>
          </div>
        </div>
        <div className="px-6 py-4 border-t border-neutral-200 flex justify-end gap-3">
          <button onClick={onClose} className="px-4 py-2 text-[11px] tracking-[0.15em] uppercase text-neutral-500 hover:text-foreground">Cancel</button>
          <button
            onClick={() => onSave({
              name: form.name,
              role: form.role,
              bio: form.bio,
              initials: form.initials || form.name.split(' ').map((n) => n[0]).join('').toUpperCase(),
              specialties: form.specialties.split(',').map((s) => s.trim()).filter(Boolean),
              serviceIds: form.serviceIds,
            })}
            disabled={!form.name || !form.role}
            className="flex items-center gap-2 px-4 py-2 bg-accent text-white text-[11px] tracking-[0.15em] uppercase hover:bg-accent-dark disabled:opacity-40"
          >
            <Save size={13} /> Save
          </button>
        </div>
      </div>
    </div>
  );
}

// --- SERVICE FORM MODAL ---

function ServiceFormModal({ service, onClose, onSave }: {
  service: Service | null;
  onClose: () => void;
  onSave: (data: Partial<Service>) => Promise<void>;
}) {
  const [form, setForm] = useState({
    name: service?.name || '',
    description: service?.description || '',
    price: service?.price || '',
    duration: service?.duration || '',
    category: service?.category || 'hair' as Service['category'],
    image: service?.image || '',
  });

  const update = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((p) => ({ ...p, [field]: e.target.value }));

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="bg-white border border-neutral-200 w-full max-w-md max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-200">
          <h3 className="font-serif text-lg">{service ? 'Edit Service' : 'Add Service'}</h3>
          <button onClick={onClose} className="text-neutral-400 hover:text-foreground"><X size={18} /></button>
        </div>
        <div className="p-6 space-y-4">
          <div>
            <label className={labelCls}>Name *</label>
            <input value={form.name} onChange={update('name')} className={inputCls} />
          </div>
          <div>
            <label className={labelCls}>Description</label>
            <textarea value={form.description} onChange={update('description')} className={inputCls} rows={2} />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className={labelCls}>Price *</label>
              <input value={form.price} onChange={update('price')} className={inputCls} placeholder="e.g. from 40 BGN" />
            </div>
            <div>
              <label className={labelCls}>Duration *</label>
              <input value={form.duration} onChange={update('duration')} className={inputCls} placeholder="e.g. 45 min" />
            </div>
          </div>
          <div>
            <label className={labelCls}>Category *</label>
            <select value={form.category} onChange={update('category')} className={inputCls}>
              <option value="hair">Hair</option>
              <option value="nails">Nails</option>
              <option value="face">Face</option>
            </select>
          </div>
          <div>
            <label className={labelCls}>Image Path</label>
            <input value={form.image} onChange={update('image')} className={inputCls} placeholder="/sisesthetics-scraped/..." />
          </div>
        </div>
        <div className="px-6 py-4 border-t border-neutral-200 flex justify-end gap-3">
          <button onClick={onClose} className="px-4 py-2 text-[11px] tracking-[0.15em] uppercase text-neutral-500 hover:text-foreground">Cancel</button>
          <button
            onClick={() => onSave(form)}
            disabled={!form.name || !form.price || !form.duration}
            className="flex items-center gap-2 px-4 py-2 bg-accent text-white text-[11px] tracking-[0.15em] uppercase hover:bg-accent-dark disabled:opacity-40"
          >
            <Save size={13} /> Save
          </button>
        </div>
      </div>
    </div>
  );
}
