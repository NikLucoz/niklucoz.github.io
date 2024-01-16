document.addEventListener('DOMContentLoaded', function() {
    // Ottieni le dimensioni dello schermo
    const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    const screenHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
  
    const draggables = document.querySelectorAll('#draggable');
    draggables.forEach(div => {
        const padding = 300;
        const randomX = Math.floor(Math.random() * (screenWidth - 2 * padding));
        const randomY = Math.floor(Math.random() * (screenHeight - 2 * padding));
        
        div.DraggableJS();
        div.setPosition(randomX, randomY);

        //Aggiunta componenti alla navbar

        const nav = document.querySelectorAll('.start-bar');


    });
  });

document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('[role="tab"]');
    tabs.forEach(tab => {
      tab.addEventListener('click', function() {
        const tabId = this.getAttribute('aria-controls');
        const tabPanel = document.getElementById(tabId);
  
        // Nascondi tutti i pannelli delle schede e rimuovi aria-selected dalle schede
        document.querySelectorAll('[role="tabpanel"]').forEach(panel => {
          panel.setAttribute('hidden', true);
        });
        tabs.forEach(t => {
          t.setAttribute('aria-selected', false);
        });
  
        // Mostra il pannello della scheda selezionata e imposta aria-selected="true" sulla tab
        tabPanel.removeAttribute('hidden');
        tab.setAttribute('aria-selected', true);
      });
    });
  });

function toggleWelcome() {
  let element = document.getElementsByClassName('welcome');
  if(element[0].style.display  != "none") {
    element[0].style.display = "none";  
  }else {
    element[0].style.display = "block";  
  }
}
  
function toggleProjects() {
  let element = document.getElementsByClassName('progetti');
  if(element[0].style.display  != "none") {
    element[0].style.display = "none";  
  }else {
    element[0].style.display = "block";  
  }
}

function toggleExplorer(ref) {
  if(ref.style.display  != "none") {
    ref.style.display = "none";  
  }else {
    ref.style.display = "block";  
  }
}

function toggleAllExporer() {
  document.querySelectorAll('.explorer').forEach((e) => {
    console.log(e)
    if(e.style.display  != "none") {
      e.style.display = "none";  
    }else {
      e.style.display = "block";  
    }
  });
}

function toggleCMD() {
  let element = document.getElementsByClassName('terminale');
  if(element[0].style.display  != "none") {
    element[0].style.display = "none";  
  }else {
    element[0].style.display = "block";  
  }
}