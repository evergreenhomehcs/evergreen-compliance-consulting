
/* Evergreen Compliance Consulting Conversion Widget
   Upload this file to the root of the GitHub Pages repository.
   Then link it before </body> on each HTML page:
   <script src="conversion-widget.js"></script>
*/

(function () {
  const ECC = {
    phoneDisplay: "(320) 469-7560",
    phoneRaw: "13204697560",
    email: "evergreencomplianceconsulting@gmail.com",
    intakeUrl: "https://forms.gle/yNKTCw8JK15idA977",
    calendly60: "https://calendly.com/evergreencomplianceconsulting/60min",
    brand: "#063f2f",
    brand2: "#0b5a43",
    gold: "#c8a43a",
    mint: "#e9f8f0"
  };

  function fireEvent(name, params = {}) {
    try {
      if (typeof gtag === "function") {
        gtag("event", name, {
          event_category: "ECC Lead Funnel",
          ...params
        });
      }
    } catch (e) {}
  }

  function addStyles() {
    const style = document.createElement("style");
    style.textContent = `
      .ecc-sticky-cta {
        position: fixed;
        right: 18px;
        bottom: 18px;
        z-index: 99999;
        display: flex;
        flex-direction: column;
        gap: 10px;
        font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      }
      .ecc-sticky-cta a {
        text-decoration: none;
        border-radius: 999px;
        padding: 13px 18px;
        font-weight: 900;
        font-size: 14px;
        box-shadow: 0 18px 45px rgba(6,63,47,.22);
        border: 1px solid rgba(255,255,255,.55);
        transition: transform .15s ease, box-shadow .15s ease, opacity .15s ease;
        display: flex;
        align-items: center;
        gap: 8px;
        white-space: nowrap;
      }
      .ecc-sticky-cta a:hover {
        transform: translateY(-2px);
        box-shadow: 0 24px 60px rgba(6,63,47,.30);
      }
      .ecc-btn-intake { background: ${ECC.brand}; color: white; }
      .ecc-btn-call { background: white; color: ${ECC.brand}; border-color: ${ECC.brand} !important; }
      .ecc-btn-email { background: ${ECC.gold}; color: ${ECC.brand}; }
      .ecc-mobile-bar {
        display: none;
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 99998;
        background: white;
        border-top: 1px solid #e5e7eb;
        box-shadow: 0 -8px 30px rgba(6,63,47,.12);
        padding: 8px;
        gap: 8px;
        font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      }
      .ecc-mobile-bar a {
        flex: 1;
        text-align: center;
        text-decoration: none;
        border-radius: 14px;
        padding: 11px 8px;
        font-size: 13px;
        font-weight: 900;
      }
      .ecc-mobile-intake { background: ${ECC.brand}; color: white; }
      .ecc-mobile-text { background: ${ECC.mint}; color: ${ECC.brand}; border: 1px solid ${ECC.brand}; }
      .ecc-mobile-email { background: ${ECC.gold}; color: ${ECC.brand}; }
      .ecc-inline-lead-box {
        margin: 48px auto;
        max-width: 1100px;
        border-radius: 28px;
        overflow: hidden;
        background: linear-gradient(135deg, ${ECC.brand} 0%, ${ECC.brand2} 100%);
        color: white;
        box-shadow: 0 24px 70px rgba(6,63,47,.18);
        font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      }
      .ecc-inline-lead-inner {
        padding: 34px;
        display: grid;
        grid-template-columns: 1.5fr 1fr;
        gap: 28px;
        align-items: center;
      }
      .ecc-inline-lead-box h2 {
        font-size: clamp(28px, 4vw, 44px);
        line-height: 1.05;
        margin: 0;
        font-weight: 950;
      }
      .ecc-inline-lead-box p {
        color: rgba(255,255,255,.82);
        line-height: 1.7;
        margin: 14px 0 0;
        font-size: 17px;
      }
      .ecc-inline-actions {
        display: flex;
        flex-direction: column;
        gap: 12px;
      }
      .ecc-inline-actions a {
        text-decoration: none;
        border-radius: 18px;
        padding: 15px 18px;
        text-align: center;
        font-weight: 950;
      }
      .ecc-inline-primary { background: ${ECC.gold}; color: ${ECC.brand}; }
      .ecc-inline-secondary { background: white; color: ${ECC.brand}; }
      .ecc-inline-tertiary { background: rgba(255,255,255,.12); color: white; border: 1px solid rgba(255,255,255,.3); }
      @media (max-width: 760px) {
        .ecc-sticky-cta { display: none; }
        .ecc-mobile-bar { display: flex; }
        body { padding-bottom: 68px; }
        .ecc-inline-lead-inner { grid-template-columns: 1fr; padding: 24px; }
      }
    `;
    document.head.appendChild(style);
  }

  function buildStickyButtons() {
    const wrap = document.createElement("div");
    wrap.className = "ecc-sticky-cta";
    wrap.innerHTML = `
      <a class="ecc-btn-intake" href="${ECC.intakeUrl}" target="_blank" rel="noopener" data-ecc-event="intake_click">🌲 Start Intake</a>
      <a class="ecc-btn-call" href="tel:${ECC.phoneRaw}" data-ecc-event="call_click">📞 Call/Text ${ECC.phoneDisplay}</a>
      <a class="ecc-btn-email" href="mailto:${ECC.email}?subject=Assisted%20Living%20Consulting%20Inquiry" data-ecc-event="email_click">✉️ Email ECC</a>
    `;
    document.body.appendChild(wrap);

    const mobile = document.createElement("div");
    mobile.className = "ecc-mobile-bar";
    mobile.innerHTML = `
      <a class="ecc-mobile-intake" href="${ECC.intakeUrl}" target="_blank" rel="noopener" data-ecc-event="intake_click">Start Intake</a>
      <a class="ecc-mobile-text" href="sms:${ECC.phoneRaw}" data-ecc-event="text_click">Text</a>
      <a class="ecc-mobile-email" href="mailto:${ECC.email}?subject=Assisted%20Living%20Consulting%20Inquiry" data-ecc-event="email_click">Email</a>
    `;
    document.body.appendChild(mobile);
  }

  function addInlineLeadBox() {
    const main = document.querySelector("main");
    if (!main || document.querySelector(".ecc-inline-lead-box")) return;

    const box = document.createElement("section");
    box.className = "ecc-inline-lead-box";
    box.innerHTML = `
      <div class="ecc-inline-lead-inner">
        <div>
          <h2>Ready to move your assisted living project forward?</h2>
          <p>Start with ECC's intake form so your licensing stage, property status, timeline, and compliance priorities can be reviewed before the consultation.</p>
        </div>
        <div class="ecc-inline-actions">
          <a class="ecc-inline-primary" href="${ECC.intakeUrl}" target="_blank" rel="noopener" data-ecc-event="intake_click">Complete Intake Form</a>
          <a class="ecc-inline-secondary" href="${ECC.calendly60}" target="_blank" rel="noopener" data-ecc-event="calendly_click">Book 60-Min Consultation</a>
          <a class="ecc-inline-tertiary" href="mailto:${ECC.email}?subject=Assisted%20Living%20Consulting%20Inquiry" data-ecc-event="email_click">Email ECC Directly</a>
        </div>
      </div>
    `;

    const book = document.getElementById("book");
    if (book && book.parentNode) {
      book.parentNode.insertBefore(box, book);
    } else {
      main.appendChild(box);
    }
  }

  function attachTracking() {
    document.addEventListener("click", function(e) {
      const link = e.target.closest("[data-ecc-event]");
      if (!link) return;
      fireEvent(link.getAttribute("data-ecc-event"), {
        link_url: link.href || "",
        link_text: (link.textContent || "").trim()
      });
    });
  }

  addStyles();
  buildStickyButtons();
  addInlineLeadBox();
  attachTracking();
})();
