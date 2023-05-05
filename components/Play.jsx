const React = require('react');
const CardDecComponent = require('./CardDecComponent');
const Layout = require('./Layout');
module.exports = function Play({ title, cardDecdb ,name}) {
  return (
    <Layout title={title}>
      <div className='name'>Hello, {name}!</div>
      <div className="PlayDiv card">
        {cardDecdb.map((cardDecs) => {
          return <CardDecComponent cardDecs={cardDecs} ></CardDecComponent>;
        })}
      </div>
    </Layout>
  );
};
