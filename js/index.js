let newWorker;
  function showUpdateBar() {
    let snackbar = document.getElementById('snackbar');
    snackbar.className = 'show';
  }
  // The click event on the pop up notification
  document.getElementById('reload').addEventListener('click', function(){
    newWorker.postMessage({ action: 'skipWaiting' });
  });
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js').then(reg => {
      reg.addEventListener('updatefound', () => {
        // A wild service worker has appeared in reg.installing!
        newWorker = reg.installing;
        newWorker.addEventListener('statechange', () => {
          // Has network.state changed?
          switch (newWorker.state) {
            case 'installed':
              if (navigator.serviceWorker.controller) {
                // new update available
                showUpdateBar();
              }
              // No update available
              break;
          }
        });
      });
    });
    let refreshing;
    navigator.serviceWorker.addEventListener('controllerchange', function () {
      if (refreshing) return;
      window.location.reload();
      refreshing = true;
    });
  }

$(document).ready(function() {
    lowLag.init({'urlPrefix':'./audio/'});
    lowLag.load(['afeganistao.wav'], 'afg');
    lowLag.load(['robertos.wav'], 'rbrs');
    lowLag.load(['sos.wav'], 'sos');
    lowLag.load(['souroberto.wav'], 'sr');
    lowLag.load(['vamoscanta.wav'], 'vc');
    lowLag.load(['vemcantar.wav'], 'vcg');
    lowLag.load(['vemdancar.wav'], 'vd');
    lowLag.load(['vemtreinar.wav'], 'vt');
    lowLag.load(['progredir.wav'], 'prg')
    lowLag.load(['aprender.wav'], 'apr');
    lowLag.load(['maiorhomem.wav'], 'jcmh');
});

function afg(){
    lowLag.play('afg');
};

function rbrs(){
    lowLag.play('rbrs');
};

function sos(){
    lowLag.play('sos');
};

function sr(){
    lowLag.play('sr');
};

function vc(){
    lowLag.play('vc');
};

function vcg(){
    lowLag.play('vcg');
};


function vd(){
    lowLag.play('vd');
};

function vt(){
    lowLag.play('vt');
};

function prg(){
    lowLag.play('prg');
};

function apr(){
    lowLag.play('apr');
};

function jcmh(){
    lowLag.play('jcmh');
};