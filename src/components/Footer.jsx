import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="d-sm-flex justify-content-center justify-content-sm-between">
        <span className="text-muted text-center text-sm-left d-block d-sm-inline-block">
          Copyright ©{" "}
          <a href="https://full-stack-app.com/" target="_blank">
            full-stack-app.com{" "}
          </a>
          2022
        </span>
        <span className="float-none float-sm-right d-block mt-1 mt-sm-0 text-center">
          Only the best{" "}
          <a href="https://getbootstrap.com/" target="_blank">
            {" "}
            Bootstrap
          </a>{" "}
          templates
        </span>
      </div>
    </footer>
  );
}
