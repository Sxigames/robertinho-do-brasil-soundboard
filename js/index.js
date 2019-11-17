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