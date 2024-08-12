const audio = {
    title: 'a',
    play() {console.log('play this',this);
    }
}

audio.play();

audio.stop = function() {
    console.log('stop this',this);

    audio.stop();
}