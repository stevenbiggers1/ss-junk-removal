export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">

      {/* HERO */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-700 text-white py-20 text-center px-6">
        <h1 className="text-5xl font-bold mb-4">
          S&S Junk Removal Services
        </h1>
        <p className="text-xl mb-6">
          Fast • Affordable • Reliable Junk Removal in Marrero & Surrounding Areas
        </p>

       <div className="flex flex-col items-center gap-4 mt-6">

  {/* Phone Number Display */}
  <p className="text-xl font-semibold">
    Call or Text: (504) 676-7292
  </p>

  <div className="flex gap-4">

    {/* Call Button */}
    <a
      href="tel:15046767292"
      className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg text-lg font-semibold transition"
    >
      📞 Call (504) 676-7292
    </a>

    {/* Text Button */}
    <a
      href="sms:15046767292"
      className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold transition"
    >
      💬 Text (504) 676-7292
    </a>

  </div>
</div>
      </section>

      {/* SERVICES */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-8">
          Our Services
        </h2>

        <div className="max-w-3xl mx-auto space-y-3 text-lg">
          <p>✔ Furniture Removal</p>
          <p>✔ Appliance Removal</p>
          <p>✔ Garage Cleanouts</p>
          <p>✔ Estate Cleanouts</p>
          <p>✔ Yard Debris Removal</p>
          <p>✔ Construction Debris</p>
        </div>
      </section>

      {/* PRICING */}
      <section className="bg-gray-100 py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">
          Transparent Pricing
        </h2>

        <div className="max-w-3xl mx-auto text-lg space-y-4">
          <p className="text-2xl font-bold text-gray-900">
            $100 Minimum Service Fee
          </p>

          <p>
            All jobs begin with a $100 call-out fee. This covers travel, labor, and disposal setup.
          </p>

          <p>
            Final pricing is based on the amount of space your items take up in our truck.
            We provide an upfront quote on-site before any work begins.
          </p>

          <p className="font-semibold">
            No hidden fees. No surprises. Pay only for the space you use.
          </p>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-8">
          Why Choose Us?
        </h2>

        <div className="max-w-3xl mx-auto space-y-4 text-lg">
          <p>✔ Same-Day & Next-Day Service Available</p>
          <p>✔ Professional & Friendly Crew</p>
          <p>✔ Upfront Quotes Before We Start</p>
          <p>✔ Locally Owned & Operated</p>
        </div>
      </section>

      {/* SERVICE AREAS */}
      <section className="bg-gray-100 py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">
          Areas We Serve
        </h2>

        <p className="text-lg">
          Marrero • Harvey • Gretna • Westwego • Metairie • New Orleans • Kenner • Slidell
        </p>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-white py-8 text-center">
        <p>© {new Date().getFullYear()} S&S Junk Removal Services</p>
        <p>Marrero, Louisiana</p>
      </footer>

    </main>
  );
}