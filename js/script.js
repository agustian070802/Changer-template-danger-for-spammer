function updateTemplate() {
    var emoji = [
        " :yt: ", 
        " :oops: ",
        " :buffering: ",
        " :stayhome: ",
        " :dothefive: ",
        " :elbowbump: ",
        " :goodvibes: ",
        " :thanksdoc: ",
        " :videocall: ",
        " :virtualhug: ",
        " :yougotthis: ",
        " :sanitizer: ",
        " :takeout: ",
        " :hydrate: ",
        " :chillwcat: ",
        " :chillwdog: ",
        " :elbowcough: ",
        " :learning: ",
        " :washhands: ",
        " :socialdist: ",
        " :shelterin: ",
    ];
    var textArea = document.getElementById('text'); 
    var textareaHasil = document.getElementById('texthasil');
    textareaHasil.value= textArea.value + emoji[Math.floor(Math.random() * emoji.length)];
}