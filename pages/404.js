import React from "react";
import Link from "next/link";

function ErrorPage() {
  return (
    <div className="gx-page-error-container">
      <div className="gx-page-error-content">
        <div className="gx-error-code gx-mb-4">404</div>
        <h2 className="gx-text-center">
          Oops, an error has occurred. Page not found!
        </h2>
        <p className="gx-text-center">
          <Link href="/">
            <a className="gx-btn gx-btn-primary">Go to Home</a>
          </Link>
        </p>
      </div>
    </div>
  );
}

export default ErrorPage;
