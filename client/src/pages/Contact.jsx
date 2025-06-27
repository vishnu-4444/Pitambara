export default function Contact() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            required
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
          <input
            type="email"
            placeholder="Email"
            required
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
          <input
            type="tel"
            placeholder="Phone"
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
          <input
            type="text"
            placeholder="Subject"
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
          <select className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500">
            <option>-- Select Service --</option>
            <option>Cybersecurity</option>
            <option>Legal Compliance</option>
            <option>Forensics</option>
            <option>Policy & Documentation</option>
            <option >Training</option>
          </select>
          <textarea
            placeholder="Message"
            rows="5"
            required
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
          ></textarea>
          <button
            type="submit"
            className="bg-teal-500 text-white px-6 py-2 rounded hover:bg-teal-600 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
