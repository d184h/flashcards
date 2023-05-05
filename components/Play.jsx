const React = require('react');
const CardDecComponent = require('./CardDecComponent');
const Layout = require('./Layout');
const Qcard = require('./Qcard');
module.exports = function Play({ title, cardDecdb ,name}) {
  return (
    <Layout title={title}>
      <div className='name'>Hello, {name}!</div>
      <div className="PlayDiv card" id='PlayDiv'>
        {cardDecdb.map((cardDecs) => {
          return <CardDecComponent cardDecs={cardDecs} ></CardDecComponent>;
        })}
        {/* <Qcard/> */}
      </div>
    </Layout>
  );
};
