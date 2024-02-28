import Webamp from 'webamp'

const startWebamp = () => {
    if (Webamp.browserIsSupported()) {
        const webamp = new Webamp({
            initialTracks: [
            {
                metaData: {
                   artist: "dj mike llama",
                   title: "llama whippin' intro"
               },
               url: `${process.env.PUBLIC_URL}/llama-2.91.mp3`,
               duration: 20
           }  
        ]
        });
        webamp.onClose(() => {
            webamp.dispose();
        })

        webamp.renderWhenReady(document.getElementById('winamp-container'));
        
    }
}

export { startWebamp } 