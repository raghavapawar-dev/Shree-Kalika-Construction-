import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, Clock, ExternalLink, CheckCircle2 } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: 'Residential Construction',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [responseMsg, setResponseMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setResponseMsg(data.message);
        setFormData({ name: '', email: '', phone: '', projectType: 'Residential Construction', message: '' });
      } else {
        setStatus('error');
        setResponseMsg(data.error || 'Something went wrong');
      }
    } catch (error) {
      setStatus('error');
      setResponseMsg('Failed to connect to server');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <section id="contact" className="py-24 bg-bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <span className="text-secondary font-display font-bold uppercase tracking-widest text-sm mb-4 block">
              Contact Us
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-extrabold text-primary mb-8 leading-tight">
              Let's Build Something <br />
              <span className="text-secondary">Great</span> Together
            </h2>
            <p className="text-lg text-text-muted mb-12 leading-relaxed">
              Ready to start your next project? Get in touch with our experts today for a free consultation and quote. We are here to help you every step of the way.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-bg-section rounded-lg flex items-center justify-center text-secondary flex-shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-display font-bold text-primary mb-1">Call Us</h4>
                  <p className="text-text-muted">+91 84828 67010</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-bg-section rounded-lg flex items-center justify-center text-secondary flex-shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-display font-bold text-primary mb-1">Email Us</h4>
                  <p className="text-text-muted">shrikalika.official@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-bg-section rounded-lg flex items-center justify-center text-secondary flex-shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-display font-bold text-primary mb-1">Our Location</h4>
                  <p className="text-text-muted">Shop No-26, Hashimji premji Complex,</p>
                  <p className="text-text-muted">Station Rd, Sane Nagar, Amalner,</p>
                  <p className="text-text-muted">Maharashtra 425401, India</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-bg-section rounded-lg flex items-center justify-center text-secondary flex-shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-display font-bold text-primary mb-1">Working Hours</h4>
                  <p className="text-text-muted">Mon - Sat: 9:00 AM - 7:00 PM</p>
                  <p className="text-text-muted">Sun: Closed</p>
                </div>
              </div>

              {/* Google Maps Embed */}
              <div className="mt-8 rounded-lg overflow-hidden border border-border shadow-sm h-64 w-full relative group">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.464670433282!2d75.0564613759604!3d21.13390318393525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd9379666666667%3A0x8956666666666666!2sShop%20No-26%2C%20Hashimji%20premji%20Complex%2C%20Station%20Rd%2C%20Sane%20Nagar%2C%20Amalner%2C%20Maharashtra%20425401!5e0!3m2!1sen!2sin!4v1708780000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Shree Kalika Construction Location"
                ></iframe>
                <a 
                  href="https://maps.app.goo.gl/WKiXbwCHAabLgjNM8" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="absolute bottom-4 right-4 bg-bg-light shadow-lg rounded-sm py-2 px-4 text-primary font-bold text-xs flex items-center gap-2 hover:bg-secondary hover:text-white transition-colors z-10"
                >
                  <ExternalLink size={14} />
                  View on Google Maps
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-bg-section p-8 md:p-12 rounded-lg shadow-sm border border-border"
          >
            {status === 'success' ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 size={40} />
                </div>
                <h3 className="text-2xl font-display font-bold text-primary mb-4">Inquiry Sent!</h3>
                <p className="text-text-muted mb-8">{responseMsg}</p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="bg-primary text-white px-8 py-3 rounded-sm font-bold hover:bg-accent transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-primary uppercase tracking-wider mb-2">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full px-4 py-4 bg-bg-light border border-border rounded-sm focus:outline-none focus:border-secondary transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-primary uppercase tracking-wider mb-2">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 84828 67010"
                      className="w-full px-4 py-4 bg-bg-light border border-border rounded-sm focus:outline-none focus:border-secondary transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-primary uppercase tracking-wider mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full px-4 py-4 bg-bg-light border border-border rounded-sm focus:outline-none focus:border-secondary transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-primary uppercase tracking-wider mb-2">Project Type</label>
                  <select 
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full px-4 py-4 bg-bg-light border border-border rounded-sm focus:outline-none focus:border-secondary transition-colors appearance-none"
                  >
                    <option>Residential Construction</option>
                    <option>Commercial Construction</option>
                    <option>Renovation & Remodeling</option>
                    <option>Interior Design</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold text-primary uppercase tracking-wider mb-2">Message</label>
                  <textarea
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Tell us about your project..."
                    className="w-full px-4 py-4 bg-bg-light border border-border rounded-sm focus:outline-none focus:border-secondary transition-colors resize-none"
                  ></textarea>
                </div>

                {status === 'error' && (
                  <p className="text-red-500 text-sm font-bold">{responseMsg}</p>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full bg-primary hover:bg-secondary text-white font-bold py-5 rounded-sm flex items-center justify-center gap-2 transition-all group disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  <span>{status === 'loading' ? 'Sending...' : 'Send Message'}</span>
                  {status !== 'loading' && <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
