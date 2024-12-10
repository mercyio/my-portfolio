import contactInfo from "@/data/contact";

export const ContactSection = () => {
//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     alert("Thank you for reaching out! Form submitted.");
//     // Add API call here for real functionality
//   };

  return (
    <section className="container mx-auto px-4 mb-16">
      <h2 className="text-2xl font-bold mb-8">Contact Me</h2>
      <div className="space-y-8">
        <p className="text-zinc-300 leading-relaxed">{contactInfo.description}</p>
        <ul className="space-y-2">
          {/* <li className="text-zinc-400">Email: {contactInfo.email}</li>
          <li className="text-zinc-400">Phone: {contactInfo.phone}</li> */}
        </ul>
        {/* <form onSubmit={handleSubmit} className="space-y-4"> */}
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
        {/* </form> */}
      </div>
    </section>
  );
};
