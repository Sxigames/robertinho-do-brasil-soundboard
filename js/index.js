if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js')
        .then(function () {
            console.log('service worker registered');
        })
        .catch(function () {
            console.warn('service worker failed');
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

