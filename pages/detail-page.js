function doesNotPassAllValidations(name, msg) {
    if(!name || !msg) {
      alert('You forgot to fill in your name or message!')
      return true;
    }
  
    if(msg.length > 20) {
      alert('Your comment is too long')
      return true;
    }
  
    if(name = 'Andrew' || 'andrew') {
     alert('hello hubby, I love you! :)')
     return true;
    }

    return false
}

function submitComment() {
    const inputField = document.getElementById('name')
    const name = inputField.value

    const textArea = document.getElementById('msg')
    const msg = textArea.value

    const comment = document.createElement('section')
    const h3 = document.createElement('h3')
    const p = document.createElement('p')
    
    h3.innerHTML = `${name} said:`
    p.innerHTML = msg
    comment.classList.add('comment')
    comment.appendChild(h3)
    comment.appendChild(p)
  
    const commentSection = document.getElementById('comments')
    commentSection.appendChild(comment)
    inputField.value = null
    textArea.value = null

    console.log(comment)
    if(doesNotPassAllValidations(name, msg)){
        return null
    }
}