"use client";
import { useState } from "react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    service: [] as string[],
    budget: [] as string[],
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;

      setFormData((prev) => {
        const prevArray = prev[name as keyof typeof prev] as string[];

        const updatedArray = checked
          ? [...prevArray, value]
          : prevArray.filter((v) => v !== value);

        return { ...prev, [name]: updatedArray };
      });

      return;
    }

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section className="mx-4 my-10 max-w-[1070px] rounded-3xl bg-white px-5 py-10 shadow-xl sm:px-10 lg:px-16 md:mx-10 lg:mx-20 xl:mx-auto">
      {/* HEADER */}
      <h2 className="mb-2 text-3xl font-semibold text-[#222227] sm:text-4xl lg:text-[42px]">
        {`Let's get in touch!`}
      </h2>

      <p className="mb-4 text-sm text-[#6b6b6b] sm:text-base">
        For business enquiries,{" "}
        <span className="font-semibold text-[#222227]">email me</span> or
        complete the form below.
      </p>

      <p className="text-sm text-gray-600 sm:text-base">
        For requirements regarding UI/UX Design
      </p>

      <p className="text-sm text-gray-600 sm:text-base">
        - Email me on :{" "}
        <span className="font-semibold text-[#222227]">
          ebrahimelgendy119@gmail.com
        </span>
      </p>

      <p className="mb-8 text-sm text-gray-600 sm:text-base">
        - To find out what tools or resources I use, go to{" "}
        <span className="font-semibold text-[#222227]">Blogs.</span>
      </p>

      {/* FORM */}
      <form onSubmit={handleSubmit} className="space-y-6 xl:pr-96 lg:pr-70">
        {/* Name */}
        <div>
          <label className="block mb-3 text-sm font-normal text-gray-800 sm:text-base">
            My name is
          </label>
          <input
            type="text"
            name="name"
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-2 py-2 text-sm border-b border-gray-300 focus:outline-none focus:ring-2 focus:ring-black sm:text-base"
          />
        </div>

        {/* Company */}
        <div>
          <label className="block text-sm font-medium text-gray-800 sm:text-base">
            I work at
          </label>
          <input
            type="text"
            name="company"
            placeholder="Company"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-2 py-2 my-3 text-sm border-b border-gray-300 focus:outline-none focus:ring-2 focus:ring-black sm:text-base"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-800 sm:text-base">
            My email is
          </label>
          <input
            type="email"
            name="email"
            placeholder="Your email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-2 py-2 my-3 text-sm border-b border-gray-300 focus:outline-none focus:ring-2 focus:ring-black sm:text-base"
          />
        </div>

        {/* Services */}
        <div>
          <label className="block mb-3 text-sm font-medium text-gray-800 sm:text-base">
            {`I'm looking for:`}
          </label>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {[
              "UI/UX Design",
              "Webflow/Framer",
              "Consultation",
              "Brand Partnership",
            ].map((service) => (
              <label
                key={service}
                className="flex items-center gap-2 px-4 py-3 border border-gray-300 rounded-full"
              >
                <input
                  type="checkbox"
                  name="service"
                  value={service}
                  checked={formData.service.includes(service)}
                  onChange={handleChange}
                  className="border-gray-300 rounded focus:ring-black"
                />
                <span className="text-sm text-gray-800 sm:text-base">
                  {service}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Budget */}
        <div>
          <label className="block mt-6 mb-3 text-sm font-medium text-gray-800 sm:text-base">
            My budget range is
          </label>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {[
              "USD $2,000 - $5,000",
              "USD $5,001 - $10,000",
              "USD $10,001 and up",
            ].map((budget) => (
              <label
                key={budget}
                className="flex items-center gap-2 px-4 py-3 border border-gray-300 rounded-full"
              >
                <input
                  type="checkbox"
                  name="budget"
                  value={budget}
                  checked={formData.budget.includes(budget)}
                  onChange={handleChange}
                  className="border-gray-300 rounded focus:ring-black"
                />
                <span className="text-sm text-gray-800 sm:text-base">
                  {budget}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Message */}
        <div>
          <label className="block mt-6 mb-3 text-sm font-medium text-gray-800 sm:text-base">
            More details about the project
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            placeholder="Your message"
            className="w-full px-4 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black sm:text-base"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="px-6 py-3 text-sm font-semibold text-white transition bg-black rounded-xl hover:bg-gray-800 sm:text-base"
        >
          Get in touch
        </button>
      </form>
    </section>
  );
};

export default ContactPage;
