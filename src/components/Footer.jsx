import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright ⓒ {year}</p>
      <p>
        Made with{" "}
        <span role="img" aria-label="heart">
          ❤️
        </span>{" "}
        by Shruti Agrawal.
      </p>
    </footer>
  );
}

export default Footer;
