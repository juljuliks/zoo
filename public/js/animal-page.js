document.addEventListener('submit', async (e) => {
  if(e.target.matches('.editAnimalForm')) {
    e.preventDefault()
    const formData = new FormData(e.target)
    const {action} = e.target
    const response = await fetch(action, {
    method: 'PUT',
    body: formData
  })
  if(response.ok) {
    window.location.assign(action)
  }
  }
  if(e.target.matches('.deleteAnimalForm')) {
    const {action} = e.target
    const response = await fetch(action, {
    method: 'DELETE',
  })
  if (response.ok) {
    const path = action.split('/')
    path.pop()
    path.pop()
    window.location.assign(path.join('/'))
  }
  }

  if(e.target.matches('.addPhotoForm')) {
    e.preventDefault()
  const formData = new FormData(e.target)
  const {action} = e.target
  const response = await fetch(action, {
    method: 'POST',
    body: formData
  })
  if(response.ok) {
    const path = action.split('/')
    path.pop()
    window.location.assign(path.join('/'))
  }
  }
})



