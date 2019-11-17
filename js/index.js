if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js')
        .then(function () {
            console.log('service worker registered');
        })
        .catch(function () {
            console.warn('service worker failed');
        });
}

lowLag.init();
lowLag.load("./audio/afeganistao.wav", "afg");
lowLag.load("./audio/robertos.wav", "rbrs");
lowLag.load("./audio/sos.wav", "sos");
lowLag.load("./audio/souroberto.wav", "sr");
lowLag.load("./audio/vamoscanta.wav", "vc");
lowLag.load("./audio/vemcantar.wav", "vcg");

function afg(){
    lowLag.init();
    lowLag.play("afg");
};

function rbrs(){
    lowLag.init();
    lowLag.play("rbrs");
};

function sos(){
    lowLag.init();
    lowLag.play("sos");
};

function sr(){
    lowLag.init();
    lowLag.play("sr");
};

function vc(){
    lowLag.init();
    lowLag.play("vc");
};

function vcg(){
    lowLag.init();
    lowLag.play("vcg");
};

