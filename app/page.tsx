export default function Home() {
  return (
    <main className="min-h-screen bg-slate-900 text-white">

      {/* HERO SECTION */}
      <section className="text-center py-20 px-6 bg-gradient-to-r from-slate-900 to-slate-700 text-white">

        <img
          src="/logo.png"
          alt="S&S Junk Removal Logo"
          className="h-40 md:h-48 mb-6 mx-auto"
        />

        <h1 className="text-5xl font-bold mb-4">
          S&S Junk Removal Services
        </h1>

        <p className="text-xl mb-6">
          Fast • Affordable • Reliable Junk Removal in Marrero & Surrounding Areas
        </p>

        <p className="text-lg font-semibold mb-8">
          Call or Text: (504) 676-7292
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="tel:5046767292"
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl text-lg font-bold"
          >
            📞 Call (504) 676-7292
          </a>

          <a
            href="sms:5046767292"
            className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-xl text-lg font-bold"
          >
            💬 Text (504) 676-7292
          </a>
        </div>

      </section>

      {/* PRICING SECTION */}
      <section className="py-20 px-6 text-center bg-slate-800">

        <h2 className="text-4xl font-bold mb-8">
          Simple & Transparent Pricing
        </h2>

        <div className="max-w-3xl mx-auto space-y-6 text-lg">

          <div className="bg-slate-700 p-6 rounded-xl">
            <h3 className="text-2xl font-semibold mb-2">$100 Call-Out Fee</h3>
            <p>
              Includes arrival, labor, loading, and responsible disposal.
            </p>
          </div>

          <div className="bg-slate-700 p-6 rounded-xl">
            <h3 className="text-2xl font-semibold mb-2">Priced by Volume</h3>
            <p>
              Final pricing is based on how much space your items take up in the trailer.
            </p>
            <p className="mt-2">
              No hidden fees. No surprise charges. You approve the price before we haul.
            </p>
          </div>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="text-center py-6 bg-slate-900 text-sm">
        © {new Date().getFullYear()} S&S Junk Removal Services — Serving Marrero & Surrounding Areas
      </footer>

    </main>
  )
}