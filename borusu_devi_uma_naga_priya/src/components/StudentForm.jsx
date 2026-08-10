import { useState } from "react";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  gender: "",
  dob: "",
  college: "",
  course: "",
  year: "",
  address: "",
  city: "",
  state: "",
  pincode: "",
  message: "",
};

function StudentForm() {
  const [formData, setFormData] = useState(initialForm);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
    alert("Registration submitted successfully!");
  };

  return (
    <div className="min-h-screen bg-slate-100 px-4 py-12">

      <div className="mx-auto max-w-4xl">

        {/* Header */}

        <div className="mb-8 text-center">

          <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-2xl text-white shadow-lg shadow-blue-200">
            🎓
          </div>

          <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Student Registration
          </h1>

          <p className="mx-auto mt-3 max-w-lg text-sm leading-6 text-slate-500">
            Please provide your information carefully. All fields are
            required unless mentioned otherwise.
          </p>

        </div>


        {/* Form */}

        <form
          onSubmit={handleSubmit}
          className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl shadow-slate-200/60"
        >

          {/* Personal Details */}

          <section className="p-6 sm:p-8">

            <SectionHeading
              number="01"
              title="Personal Details"
              description="Tell us a little about yourself"
            />

            <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">

              <Input
                label="Full Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. Devi Priya"
              />

              <Input
                label="Email Address"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
              />

              <Input
                label="Phone Number"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter phone number"
              />

              <Select
                label="Gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                options={["Male", "Female", "Other"]}
              />

              <Input
                label="Date of Birth"
                name="dob"
                type="date"
                value={formData.dob}
                onChange={handleChange}
              />

            </div>

          </section>


          {/* Education */}

          <section className="border-t border-slate-200 bg-slate-50/50 p-6 sm:p-8">

            <SectionHeading
              number="02"
              title="Education Details"
              description="Enter your current academic information"
            />

            <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">

              <Input
                label="College Name"
                name="college"
                value={formData.college}
                onChange={handleChange}
                placeholder="Enter your college"
              />

              <Input
                label="Course"
                name="course"
                value={formData.course}
                onChange={handleChange}
                placeholder="e.g. B.Tech Information Technology"
              />

              <Select
                label="Year of Study"
                name="year"
                value={formData.year}
                onChange={handleChange}
                options={[
                  "1st Year",
                  "2nd Year",
                  "3rd Year",
                  "4th Year",
                ]}
              />

            </div>

          </section>


          {/* Address */}

          <section className="border-t border-slate-200 p-6 sm:p-8">

            <SectionHeading
              number="03"
              title="Address Details"
              description="Provide your current address"
            />

            <div className="mt-8 space-y-6">

              <TextArea
                label="Full Address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Enter your complete address"
              />

              <div className="grid grid-cols-1 gap-6 md:grid-cols-3">

                <Input
                  label="City"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="City"
                />

                <Input
                  label="State"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  placeholder="State"
                />

                <Input
                  label="Pincode"
                  name="pincode"
                  value={formData.pincode}
                  onChange={handleChange}
                  placeholder="Pincode"
                />

              </div>

            </div>

          </section>


          {/* Additional Information */}

          <section className="border-t border-slate-200 bg-slate-50/50 p-6 sm:p-8">

            <SectionHeading
              number="04"
              title="Additional Information"
              description="Anything else you would like to tell us"
            />

            <div className="mt-8">

              <TextArea
                label="Message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message here..."
              />

            </div>

          </section>


          {/* Submit */}

          <div className="border-t border-slate-200 bg-white p-6 sm:p-8">

            <button
              type="submit"
              className="group w-full rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-200 transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-200 focus:outline-none focus:ring-4 focus:ring-blue-100 active:translate-y-0"
            >
              <span className="flex items-center justify-center gap-2">
                Submit Registration

                <span className="transition-transform duration-200 group-hover:translate-x-1">
                  →
                </span>
              </span>
            </button>

            <p className="mt-4 text-center text-xs text-slate-400">
              Please review your information before submitting.
            </p>

          </div>

        </form>

      </div>

    </div>
  );
}


/* ============================= */
/* Section Heading */
/* ============================= */

function SectionHeading({ number, title, description }) {
  return (
    <div className="flex items-start gap-4">

      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-sm font-bold text-blue-600">
        {number}
      </div>

      <div>
        <h2 className="text-lg font-bold text-slate-900">
          {title}
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          {description}
        </p>
      </div>

    </div>
  );
}


/* ============================= */
/* Input */
/* ============================= */

function Input({
  label,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
}) {
  return (
    <div>

      <label className="mb-2 block text-sm font-semibold text-slate-700">
        {label}

        <span className="ml-1 text-red-500">
          *
        </span>
      </label>

      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required
        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-800 shadow-sm outline-none transition-all duration-200 placeholder:text-slate-400 hover:border-slate-300 hover:bg-white focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-50"
      />

    </div>
  );
}


/* ============================= */
/* Select */
/* ============================= */

function Select({
  label,
  name,
  value,
  onChange,
  options,
}) {
  return (
    <div>

      <label className="mb-2 block text-sm font-semibold text-slate-700">
        {label}

        <span className="ml-1 text-red-500">
          *
        </span>
      </label>

      <select
        name={name}
        value={value}
        onChange={onChange}
        required
        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-800 shadow-sm outline-none transition-all duration-200 hover:border-slate-300 hover:bg-white focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-50"
      >

        <option value="">
          Select {label}
        </option>

        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}

      </select>

    </div>
  );
}


/* ============================= */
/* TextArea */
/* ============================= */

function TextArea({
  label,
  name,
  value,
  onChange,
  placeholder,
}) {
  return (
    <div>

      <label className="mb-2 block text-sm font-semibold text-slate-700">
        {label}

        <span className="ml-1 text-red-500">
          *
        </span>
      </label>

      <textarea
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required
        rows="4"
        className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-800 shadow-sm outline-none transition-all duration-200 placeholder:text-slate-400 hover:border-slate-300 hover:bg-white focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-50"
      />

    </div>
  );
}

export default StudentForm;