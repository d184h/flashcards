const React = require('react');
const Layout = require('./Layout');


module.exports = function Main({title}) {
  return (
  <Layout title={title}>
    
   
      <div className="mainDiv card">
        <br />
        <h1>Welcome To The TrioFlashCards</h1>
        <br/><br/><br/>
        <form action='/' method='post' id='playerNameForm'>
        <div className="input-group flex-nowrap">
          <span className="input-group-text" id="addon-wrapping">
            @
          </span>
          <input
            type="text"
            className="form-control PlayerNameInput"
            placeholder="PlayerName"
            name='PlayerName'
            aria-describedby="addon-wrapping"
          />
          <button className="input-group-text" type='submit' >Send</button>
        </div>
        </form>
        <br />
      </div>
    </Layout>
  );
};
