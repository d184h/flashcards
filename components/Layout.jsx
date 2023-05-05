const React = require('react');
const Navbar = require('./NavBar.jsx');

module.exports = function Layout({ title, children }) {
  return (
    <html lang="en">
      <head>
        <title>{title}</title>

<link rel="stylesheet" href="/styles/style.css" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
          crossorigin="anonymous"
        ></link>
        <script defer src="/scripts/mainScript.js"/>
        <script defer src="/scripts/playScript.js"/>

      </head>
      <body>
        <Navbar />

        {children}
        </body>
    </html>
  );
};
