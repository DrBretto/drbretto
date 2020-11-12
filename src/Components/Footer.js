import React from "react";
export default class Footer extends React.Component {
  render() {
    return (
      <footer>
        <p>© Copyright 2020</p>

        <ul>
          <li>
            email:{" "}
            <a href="mailto:drbretto82@gmail.com">drbretto82@gmail.com</a>
          </li>
          <li>
            LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/brett-westerlund-a8b4b6a8/"
              target="_blank"
              rel="noreferrer"
            >
              Brett Westerlund
            </a>
          </li>
          <li>
            GitHub:{" "}
            <a
              href="https://github.com/DrBretto/"
              target="_blank"
              rel="noreferrer"
            >
              DrBretto
            </a>
          </li>
        </ul>
      </footer>
    );
  }
}
