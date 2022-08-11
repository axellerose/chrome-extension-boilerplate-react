import React from 'react';
import logo from '../../assets/img/logo.svg';
import Greetings from '../../containers/Greetings/Greetings';
import './Popup.css';

const Popup = () => {
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

  /* 
    Create elements
*/
  const clickRadio = () => {
    console.log('on click', this);
    this.checked = true;
    alert(this.value);
    chrome.storage.sync.set(
      {
        inputId: this.id,
        buLink: this.value,
        buName: this.title,
      },
      () => {
        activeBU = this.title;
        activeRadioId = this.id;
      }
    );
  };

  async function getFromStorage(key) {
    return new Promise((resolve, reject) => {
      chrome.storage.sync.get(key, resolve);
    }).then((result) => {
      if (key == null) return result;
      else return result[key];
    });
  }

  window.addEventListener('DOMContentLoaded', async () => {
    console.log('loaded');
    let buName = await getFromStorage('buName');
    let target = document.querySelector(`#${buList[buName].id}`);
    if (target) {
      target.checked = true;
      console.log('target checked');
    } else {
      console.log('target not found');
    }
  });

  return (
    <div>
      <p>Please select your Business Unit:</p>
      <form id="popupForm" class="bu_form">
        <input
          type={radio}
          name="bu"
          value="https://cloud.coms.opap.gr/filter1"
          id="test"
          title="TESTING ENVIRONMENT"
          disabled
          className="radio"
          onClick={clickRadio}
        ></input>
        <label>TEST ENVIRONMENT</label>
        <input
          type={radio}
          name="bu"
          value="https://cloud.coms.opap.gr/filter-vlts-prod"
          id="vlts"
          title="VLTS PRODUCTION ENVIRONMENT"
          disabled
          className="radio"
          onClick={clickRadio}
        ></input>
        <label>VLTS PRODUCTION ENVIRONMENT</label>
        <input
          type={radio}
          name="bu"
          value="https://cloud.coms.opap.gr/filter-online-prod"
          id="online"
          title="ONLINE PRODUCTION ENVIRONMENT"
          disabled
          className="radio"
          onClick={clickRadio}
        ></input>
        <label>ONLINE PRODUCTION ENVIRONMENT</label>
        <input
          type={radio}
          name="bu"
          value="https://cloud.coms.opap.gr/filter-retail-prod"
          id="retail"
          title="RETAIL PRODUCTION ENVIRONMENT"
          disabled
          className="radio"
          onClick={clickRadio}
        ></input>
        <label>RETAIL PRODUCTION ENVIRONMENT</label>
      </form>
    </div>
  );
};

export default Popup;
