let activeRadioId = '';
let activeBU = '';

let buList = {
  'TESTING ENVIRONMENT': {
    id: 'test',
    link: 'https://cloud.coms.opap.gr/filter1',
  },
  'VLTS PRODUCTION ENVIRONMENT': {
    id: 'vlts',
    link: 'https://cloud.coms.opap.gr/filter-vlts-prod',
  },
  'ONLINE PRODUCTION ENVIRONMENT': {
    id: 'online',
    link: 'https://cloud.coms.opap.gr/filter-online-prod',
  },
  'RETAIL PRODUCTION ENVIRONMENT': {
    id: 'retail',
    link: 'https://cloud.coms.opap.gr/filter-retail-prod',
  },
};

const addElemets = (x, y, z) => {
  x.appendChild(y);
  x.appendChild(z);
  return x;
};

for (let key in buList) {
  let bu = buList[key];
  let input = document.createElement('input');

  input.type = 'radio';
  input.name = 'bu';
  input.value = bu.link;
  input.id = bu.id;
  input.title = key;
  input.disabled = true;
  input.classList.add('.radio');

  let label = document.createElement('label');
  label.for = bu.id;
  label.innerText = key;
  let container = document.createElement('div');
  document
    .querySelector('#popupForm')
    .appendChild(addElemets(container, input, label));
}

async function getFromStorage(key) {
  return new Promise((resolve, reject) => {
    chrome.storage.sync.get(key, resolve);
  }).then((result) => {
    if (key == null) return result;
    else return result[key];
  });
}

window.addEventListener('DOMContentLoaded', async () => {
  let buName = await getFromStorage('buName');
  let target = document.querySelector(`#${buList[buName].id}`);
  if (target) {
    target.checked = true;
  } else {
    console.log('target not found');
  }
});
