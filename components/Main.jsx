const React = require('react');
const Layout = require('./Layout');

module.exports = function Main({title}) {
  return (
  <Layout title={title}>
    
   
      <div className="mainDiv card">
        <br />
        <h1>Welcome To The TrioFlashCards</h1>
        {/* <h3>Please enter your name:</h3> */}<br/><br/><br/>
        <div className="input-group flex-nowrap">
          <span className="input-group-text" id="addon-wrapping">
            @
          </span>
          <input
            type="text"
            className="form-control PlayerNameInput"
            placeholder="PlayerName"
            aria-describedby="addon-wrapping"
          />
        </div>
        <br />
      </div>
    </Layout>
  );
};
