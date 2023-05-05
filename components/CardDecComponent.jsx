

const React = require('react');

module.exports = function CardDecComponent({cardDecs}) {
    
  return (
  <div class="card subjects" style={{width: '18rem'}} data-id={cardDecs.id}>
    <div class="card-body">
    <br /><br />
      <h5 class="card-title">{cardDecs.subject}</h5>
      <br /><br /><br />
      
      <button href={`/play/${cardDecs.id}/0`} class="btn btn-primary subjectBtn" data-id={cardDecs.id} type='submit'>Card link</button>
      
    </div>
  </div>
  );
};




