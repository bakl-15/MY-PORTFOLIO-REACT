import React from "react";

const ContactPage = () => {
  return (
    <div className="book-page page-right">
      <div className="page-back">
        <h1 className="title">CONTACTEZ-MOI !</h1>
        <p>Pour toute demande, contactez-moi à : <a href="mailto:exemple@email.com">exemple@email.com</a></p>
        <span className="number-page">6</span>
        <span className="nextprev-btn back">
          <i className="bx bx-chevron-left"></i>
        </span>
      </div>
    </div>
  );
};
export default ContactPage;