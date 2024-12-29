"use client";

import { contactInfo } from "@/data/contact";
import { useState } from "react";

export const ContactSection = () => {
  const [status, setStatus] = useState('');
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    // try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.get('name'),
          email: formData.get('email'),
          message: formData.get('message'),
        }),
      });

      if (response.ok) {
        setStatus('Message sent successfully!');
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus('Failed to send message. Please try again.');
      }
    // } catch (err) {
    //   setStatus(err);
    // }
  };

  return (
    <section className="container mx-auto px-4 mb-16">
      <h2 className="text-2xl font-bold mb-8">Contact Me</h2>
      <div className="space-y-8">
        <p className="text-zinc-300 leading-relaxed">{contactInfo.description}</p>
        {/* <ul className="space-y-2">
          <li className="text-zinc-400">Email: {contactInfo.email}</li>
          <li className="text-zinc-400">Phone: {contactInfo.phone}</li>
        </ul> */}
        <form onSubmit={handleSubmit} className="space-y-8" >
          <div>
            <label htmlFor="name" className="block text-sm text-zinc-300">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-4 py-2 border border-zinc-600 rounded-md bg-zinc-800 text-zinc-200 focus:ring-2 focus:ring-zinc-500"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm text-zinc-300">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2 border border-zinc-600 rounded-md bg-zinc-800 text-zinc-200 focus:ring-2 focus:ring-zinc-500"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm text-zinc-300">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="w-full px-4 py-2 border border-zinc-600 rounded-md bg-zinc-800 text-zinc-200 focus:ring-2 focus:ring-zinc-500"
              required
            />
          </div>
          <button
            type="submit"
            className="px-4 py-2 bg-zinc-700 text-zinc-100 rounded-md hover:bg-zinc-600 transition"
          >
            Send Message
          </button>
        </form>
        {status && (
          <p className={`mt-6 text-center ${status.includes('success') ? 'text-green-500' : 'text-red-500'}`}>
            {status}
          </p>
        )}
      </div>
    </section>
  );
};
