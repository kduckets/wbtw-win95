import Webamp from 'webamp'

const startWebamp = () => {
    if (Webamp.browserIsSupported()) {
        const webamp = new Webamp({
            initialTracks: [{
                metaData: {
                    artist: "we broke the weather",
                    title: "the fog (demo)"
                },
                url: `${process.env.PUBLIC_URL}/The Fog_demo.mp3`,
                duration: 213
            }]
        });
        webamp.onClose(() => {
            webamp.dispose();
        })

        webamp.renderWhenReady(document.getElementById('winamp-container'));
        
    }
}

export { startWebamp } 