const {
  addAnimalForm,
  addEmployeeForm,
  addTariffForm,
  addNewsForm,
  editScheduleForm,
} = document;

async function getSchedule() {
  const response = await fetch('/schedule');

  if (response.ok) {
    const data = await response.json();

    return data;
  }
  return [];
}

async function setScheduleFormValues() {
  const schedule = await getSchedule();
  const scheduleEntries = Object.entries(schedule);

  scheduleEntries.forEach((item) => {
    const [name, time] = item;
    editScheduleForm[name].value = time;
  });
}

setScheduleFormValues();

addAnimalForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);

  const response = await fetch(`/categories/${formData.categoryId}/animals`, {
    method: 'POST',
    body: formData,
  });

  if (response.ok) {
    const data = await response.json();
    console.log(data);
  }
});

addEmployeeForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const formData = Object.fromEntries(new FormData(e.target));

  const response = await fetch(`/admins`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  });

  if (response.ok) {
    const data = await response.json();
    console.log(data);
  }
});

addTariffForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);

  const response = await fetch(`/tariffs`, {
    method: 'POST',
    body: formData,
  });

  if (response.ok) {
    const data = await response.json();
    console.log({ data });
  }
});

addNewsForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);

  const response = await fetch(`/news`, {
    method: 'POST',
    body: formData,
  });

  if (response.ok) {
    const data = await response.json();
    console.log({ data });
  }
});

editScheduleForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const formData = Object.fromEntries(new FormData(e.target));

  console.log(formData);

  const response = await fetch(`/schedule`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  });

  if (response.ok) {
    const data = await response.json();
  }
});

document.addEventListener('submit', async (e) => {
  if(e.target.matches('.editStaffForm')) {
    e.preventDefault()
    const formData = new FormData(e.target);
    const {action} = e.target;
    const response = await fetch(action, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(Object.fromEntries(formData)),
    })
    if(response.ok) {
      const data = await response.json()
      console.log(data);
    }
  }
  if(e.target.matches('.deleteStaffForm')) {
    e.preventDefault()
    console.log(1111111);
    const {action} = e.target;
    const response = await fetch(action, {
      method: 'DELETE',
    })
    if(response.ok) {
      console.log('ok');
    }
  }
})
