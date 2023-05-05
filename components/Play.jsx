const React = require('react');
const CardDecComponent = require('./CardDecComponent');
const Layout = require('./Layout');
module.exports = function Play({ title, cardDecdb }) {
  return (
    <Layout title={title}>
      <div className="PlayDiv card">
        {cardDecdb.map((cardDecs) => {
          return <CardDecComponent cardDecs={cardDecs} ></CardDecComponent>;
        })}
      </div>
    </Layout>
  );
};
