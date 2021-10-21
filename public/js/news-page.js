document.addEventListener('submit', async (e) => {
  if(e.target.matches('.editNewsForm')) {
    e.preventDefault()
  const {action} = e.target
  const formData = new FormData(e.target)
  const response = await fetch(action, {
    method: 'PUT',
    body: formData
  })
  if(response.ok) {
    window.location.assign(action)
  }
  }
  if(e.target.matches('.deleteAnimalForm')) {
  e.preventDefault()
  const {action} = e.target
  const response = await fetch(action, {
    method: 'DELETE',
  })
  if(response.ok) {
    window.location.assign('/news')
  }
  }
})
