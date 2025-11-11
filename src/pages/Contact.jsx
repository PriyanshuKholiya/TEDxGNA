import React, { useRef } from "react";

export default function Contact() {
  const formRef = useRef();

  // NOTE: This uses a mailto: link for demonstration. For production, use a backend or service like Formspree.
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = formRef.current;
    const name = form.elements["name"].value;
    const email = form.elements["email"].value;
    const phone = form.elements["phone"].value;
    const message = form.elements["message"].value;
    const mailto = `mailto:team@tedxsgnsyouth.com?subject=Contact%20Form%20Query%20from%20${encodeURIComponent(
      name
    )}&body=Name:%20${encodeURIComponent(name)}%0AEmail:%20${encodeURIComponent(
      email
    )}%0APhone:%20${encodeURIComponent(phone)}%0AMessage:%0A${encodeURIComponent(
      message
    )}`;
    window.location.href = mailto;
  };

  return (
    <div className="page contact" style={{
      background: "#faf9f7", // changed from #fff to match TED section
      minHeight: "80vh",
      padding: "2.5rem 0",
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    }}>
      <div style={{
        width: "96%",
        maxWidth: "1200px",
        background: "#faf9f7", // changed from #fff to match TED section
        borderRadius: "12px",
        boxShadow: "0 2px 24px #0001",
        padding: "2.5rem 2.5rem 2rem 2.5rem",
        margin: "0 auto"
      }}>
        <button
          style={{
            background: "none",
            border: "2px solid #e62b1e",
            color: "#e62b1e",
            borderRadius: "2rem",
            padding: "0.5rem 1.5rem",
            fontWeight: 600,
            fontSize: "1.1rem",
            marginBottom: "1.2rem",
            cursor: "pointer",
            letterSpacing: "1px"
          }}
          disabled
        >
          Contact Us
        </button>
        <h1 style={{
          fontSize: "2.8rem",
          fontWeight: 700,
          margin: "0 0 0.7rem 0",
          letterSpacing: "0.5px",
          color: "#181818",
          textAlign: "left"
        }}>
          Contact Us For Any Queries!
        </h1>
        <div style={{
          color: "#888",
          fontSize: "1.15rem",
          marginBottom: "2.2rem",
          textAlign: "left"
        }}>
          For any query, feedback or registration of speakers, feel free to contact us at:
        </div>
        <div style={{
          display: "flex",
          gap: "2.5rem",
          alignItems: "flex-start",
          flexWrap: "wrap"
        }}>
          {/* Left: Form */}
          <form
            ref={formRef}
            style={{
              flex: 1.5,
              minWidth: 320,
              maxWidth: 540,
              display: "flex",
              flexDirection: "column",
              gap: "1.2rem"
            }}
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              name="name"
              placeholder="Your Full Name"
              required
              style={{
                padding: "1.1rem",
                borderRadius: "10px",
                border: "1.5px solid #e62b1e",
                fontSize: "1.1rem",
                outline: "none",
                background: "#fff",
                color: "#181818"
              }}
            />
            <input
              type="email"
              name="email"
              placeholder="Enter Your Email ID"
              required
              style={{
                padding: "1.1rem",
                borderRadius: "10px",
                border: "1.5px solid #e62b1e",
                fontSize: "1.1rem",
                outline: "none",
                background: "#fff",
                color: "#181818"
              }}
            />
            <input
              type="tel"
              name="phone"
              placeholder="Enter Your Phone Number"
              required
              style={{
                padding: "1.1rem",
                borderRadius: "10px",
                border: "1.5px solid #e62b1e",
                fontSize: "1.1rem",
                outline: "none",
                background: "#fff",
                color: "#181818"
              }}
            />
            <textarea
              name="message"
              placeholder="Your Message"
              required
              rows={4}
              style={{
                padding: "1.1rem",
                borderRadius: "10px",
                border: "1.5px solid #e62b1e",
                fontSize: "1.1rem",
                outline: "none",
                background: "#fff",
                color: "#181818",
                resize: "vertical"
              }}
            />
            <button
              type="submit"
              style={{
                marginTop: "1.2rem",
                background: "#e62b1e",
                color: "#fff",
                border: "none",
                borderRadius: "2rem",
                padding: "1.1rem 0",
                fontWeight: 600,
                fontSize: "1.18rem",
                cursor: "pointer",
                letterSpacing: "1px",
                boxShadow: "0 2px 12px #e62b1e22"
              }}
            >
              Submit Now
            </button>
          </form>
          {/* Right: Info Cards */}
          <div style={{
            flex: 1,
            minWidth: 280,
            display: "flex",
            flexDirection: "column",
            gap: "1.2rem"
          }}>
            <div style={{
              background: "#faf9f7", // changed from #fff to match TED section
              border: "1.5px solid #e62b1e",
              borderRadius: "12px",
              padding: "1.2rem 1.5rem",
              display: "block"
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.7rem", marginBottom: "0.2rem" }}>
                <span style={{ color: "#3bb3f7", fontSize: "2rem" }}>🌐</span>
                <span style={{ fontWeight: 700, fontSize: "1.25rem", color: "#181818" }}>Address</span>
              </div>
              <div style={{ color: "#888", fontSize: "1.08rem", marginLeft: 0 }}>
                GNA University, Ludhiana, Punjab, India
              </div>
            </div>
            <div style={{
              background: "#faf9f7", // changed from #fff to match TED section
              border: "1.5px solid #e62b1e",
              borderRadius: "12px",
              padding: "1.2rem 1.5rem",
              display: "block"
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.7rem", marginBottom: "0.2rem" }}>
                <span style={{ color: "#b98a3e", fontSize: "2rem" }}>✉️</span>
                <span style={{ fontWeight: 700, fontSize: "1.25rem", color: "#181818" }}>Mail Us</span>
              </div>
              <div style={{ color: "#888", fontSize: "1.08rem", marginLeft: 0 }}>
                placeholder text 
              </div>
            </div>
            <div style={{
              background: "#faf9f7", // changed from #fff to match TED section
              border: "1.5px solid #e62b1e",
              borderRadius: "12px",
              padding: "1.2rem 1.5rem",
              display: "block"
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.7rem", marginBottom: "0.2rem" }}>
                <span style={{ color: "#6c3483", fontSize: "2rem" }}>👤</span>
                <span style={{ fontWeight: 700, fontSize: "1.18rem", color: "#181818" }}>Always there to help you!</span>
              </div>
              <div style={{ color: "#888", fontSize: "1.05rem", marginLeft: "2.7rem" }}>
                Feel free to reach out
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
