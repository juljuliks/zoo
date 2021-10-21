document.addEventListener('submit', async (e) => {
  if(e.target.matches('.editTariff')) {
    e.preventDefault()
    const {action} = e.target
    const formData = new FormData(e.target)
    const response = await fetch(action, {
    method: 'PUT',
    body: formData
  })
  if(response.ok) {
    window.location.reload()
    }
  }
  if(e.target.matches('.deleteTariff')) {
    e.preventDefault()
    const {action} = e.target
    const response = await fetch(action, {
    method: 'DELETE',
  })
  if(response.ok) {
    window.location.reload()
    }
  }
})

