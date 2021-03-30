const ap = new APlayer({
    container: document.getElementById('aplayer'),
    mini: true,
    theme: '#FADFA3', //主题色
    autoplay: false, //自动播放
    listFolded: true,
    loop: 'all', //音频循环播放, 可选值: 'all'全部循环, 'one'单曲循环, 'none'不循环
    audio: [{
        name: 'Once Again',
        artist: 'Tristam',
        url: '/dist/Once-Again.flac',
        cover: '/dist/Once-Again.jpeg',

        //name: 'name2', //如果只有一首歌，删掉这一块，如有更多歌曲按此格式逐渐往下添加
        //artist: 'artist2',
        //url: 'url2.mp3',
        //cover: 'cover2.jpg',
        //lrc: 'lrc2.lrc',
        //theme: '#46718b'
    }]
});