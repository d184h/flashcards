const PlayDiv = document.getElementById('PlayDiv');
const subjects = document.querySelector('.subjects');
const questionBtn = document.querySelector('.questionBtn')
let subjectId;
var count = 0;
var question;
if (PlayDiv) {
  // console.log(subjects)
  // console.log(PlayDiv)

  PlayDiv.addEventListener('click', async (event) => {
    event.preventDefault();
    if (event.target.classList.contains('subjectBtn')) {
       subjectId = event.target.closest('.subjectBtn').dataset.id;
    //   console.log(subjectId);

      const res = await fetch(`/play/${subjectId}/0`, {
        method: 'get',
      });

      const data = await res.json();
      // console.log(data.message)
      if (data.message === 'ok') {
        while (PlayDiv.firstChild) {
          PlayDiv.firstChild.remove();
        }
        

        

        PlayDiv.insertAdjacentHTML('afterbegin', data.html);
        // console.log(data)
      }
    }

    if(event.target.classList.contains('questionBtn')){
        // console.log(event.target.classList.contains('questionBtn'))
        const qId = event.target.closest('.questionBtn').dataset.id;
        // const input = event.target.closest('.inputAnswer')
        const input = document.querySelector('.inputAnswer').value
       
        
        console.log(count)
        
        console.log(qId)
        console.log(input)
        const res = await fetch(`/play/${subjectId}/${qId}`)

        const data = await res.json();
      // console.log(data.message)
      if (data.message === 'ok') {
        while (PlayDiv.firstChild) {
          PlayDiv.firstChild.remove();
        //   question = data.cards.answer

        // console.log(question)
        //   if(input == question){
        //     count +=10
        // }
        }

        PlayDiv.insertAdjacentHTML('afterbegin', data.html);
        // console.log(data)
      }

    }
  });
}
