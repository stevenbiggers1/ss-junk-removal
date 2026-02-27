export default function Home() {
  return (
    <main style={{ fontFamily: "Arial, sans-serif", padding: "0", margin: "0" }}>
      
      {/* HERO SECTION */}
      <section style={{
        backgroundColor: "#111",
        color: "white",
        padding: "80px 20px",
        textAlign: "center"
      }}>
        <h1 style={{ fontSize: "48px", marginBottom: "20px" }}>
          SS Junk Removal
        </h1>
        <p style={{ fontSize: "20px", marginBottom: "30px" }}>
          Fast • Affordable • Reliable Junk Removal
        </p>
        <a
          href="tel:504-123-4567"
          style={{
            backgroundColor: "#00b894",
            color: "white",
            padding: "15px 30px",
            textDecoration: "none",
            fontSize: "18px",
            borderRadius: "8px"
          }}
        >
          Call Now
        </a>
      </section>

      {/* SERVICES SECTION */}
      <section style={{ padding: "60px 20px", textAlign: "center" }}>
        <h2 style={{ fontSize: "32px", marginBottom: "40px" }}>
          Our Services
        </h2>

        <div style={{ maxWidth: "900px", margin: "0 auto", fontSize: "18px", lineHeight: "1.8" }}>
          <p>✔ Furniture Removal</p>
          <p>✔ Appliance Removal</p>
          <p>✔ Yard Debris Cleanup</p>
          <p>✔ Garage & House Cleanouts</p>
          <p>✔ Construction Debris</p>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section style={{
        backgroundColor: "#f4f4f4",
        padding: "60px 20px",
        textAlign: "center"
      }}>
        <h2 style={{ fontSize: "32px", marginBottom: "20px" }}>
          Why Choose Us?
        </h2>
        <p style={{ maxWidth: "800px", margin: "0 auto", fontSize: "18px", lineHeight: "1.8" }}>
          We are a locally owned junk removal company dedicated to helping homeowners 
          and businesses clear unwanted items quickly and affordably. 
          Same-day service available!
        </p>
      </section>

      {/* FOOTER */}
      <footer style={{
        backgroundColor: "#111",
        color: "white",
        textAlign: "center",
        padding: "20px"
      }}>
        <p>© {new Date().getFullYear()} SS Junk Removal. All rights reserved.</p>
      </footer>

    </main>
  );
}