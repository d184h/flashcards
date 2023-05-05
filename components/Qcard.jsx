

const React = require('react');

module.exports = function Qcard({card}) {
    // console.log(card, ' 000000000000000000000000000000000000')
  return (
    <div class="card" style={{width: "18rem"}}>
    <div class="card-body">
    <br /><br />
      <h5 class="card-title">{card.questions}</h5>
      <br /><br />
      <h5 class="card-title">Right Answer</h5>
      <br />
      <div class="input-group flex-nowrap">
      <span class="input-group-text" id="addon-wrapping">Answer:</span>
      <input type="text" class="form-control inputAnswer" name='answer'/>
      <a href={`/play/${card.decId}/${card.id + 1}`} class="btn btn-primary questionBtn" data-id={card.id + 1}>Submit</a>
    </div>
    </div>
    </div>
  );
};




