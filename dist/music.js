const ap = new APlayer({
    container: document.getElementById('player'),
    mini: true,
    autoplay: false, //自动播放
    listFolded: true,
    audio: [{
        name: 'Once Again',
        artist: 'Tristam',
        url: '/disc/Tristam - Once Again.flac',
        cover: '/disc/Tristam - Once Again.jpeg',

        //name: 'name2', //如果只有一首歌，删掉这一块，如有更多歌曲按此格式逐渐往下添加
        //artist: 'artist2',
        //url: 'url2.mp3',
        //cover: 'cover2.jpg',
        //lrc: 'lrc2.lrc',
        //theme: '#46718b'
    }]
});