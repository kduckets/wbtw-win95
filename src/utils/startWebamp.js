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
            },
            {
                metaData: {
                   artist: "we broke the weather",
                   title: "Through the Wall"
               },
               url: `${process.env.PUBLIC_URL}/01 Through the Wall.mp3`,
               duration: 260
           },
           {
            metaData: {
               artist: "we broke the weather",
               title: "Rot King"
           },
           url: `${process.env.PUBLIC_URL}/02 Rot King.mp3`,
           duration: 260
       },
            //     {
                
            //     metaData: {
            //         artist: "we broke the weather",
            //         title: "Bellwether (demo)"
            //     },
            //     url: `${process.env.PUBLIC_URL}/Bellwether_Demo.mp3`,
            //     duration: 213
            // },
            // {
            //     metaData: {
            //         artist: "we broke the weather",
            //         title: "In Web (demo)"
            //     },
            //     url: `${process.env.PUBLIC_URL}/In Web_Demo.mp3`,
            //     duration: 213
            // },

            // {
            //     metaData: {
            //         artist: "we broke the weather",
            //         title: "Onyx Pooling (demo)"
            //     },
            //     url: `${process.env.PUBLIC_URL}/Onyx Pooling_demo.mp3`,
            //     duration: 213
            // },

            // {
            //     metaData: {
            //         artist: "we broke the weather",
            //         title: "Niceberg (demo)"
            //     },
            //     url: `${process.env.PUBLIC_URL}/Niceberg_demo.mp3`,
            //     duration: 213
            // },

            // {
            //     metaData: {
            //         artist: "we broke the weather",
            //         title: "Boneloader (demo)"
            //     },
            //     url: `${process.env.PUBLIC_URL}/Boneloader_demo.mp3`,
            //     duration: 213
            // },

            // {
            //     metaData: {
            //         artist: "we broke the weather",
            //         title: "Fire Season (demo)"
            //     },
            //     url: `${process.env.PUBLIC_URL}/Fire Season_demo.mp3`,
            //     duration: 213
            // },

            // {
            //     metaData: {
            //         artist: "we broke the weather",
            //         title: "Through the Wall (demo)"
            //     },
            //     url: `${process.env.PUBLIC_URL}/Through The Wall_demo.mp3`,
            //     duration: 213
            // },

            // {
            //     metaData: {
            //         artist: "we broke the weather",
            //         title: "Rot King (demo)"
            //     },
            //     url: `${process.env.PUBLIC_URL}/Rot King_demo.mp3`,
            //     duration: 213
            // },

            // {
            //     metaData: {
            //         artist: "we broke the weather",
            //         title: "Frequency (demo)"
            //     },
            //     url: `${process.env.PUBLIC_URL}/Frequency_demo.mp3`,
            //     duration: 213
            // },

            // {
            //     metaData: {
            //         artist: "we broke the weather",
            //         title: "These Old Bones (demo)"
            //     },
            //     url: `${process.env.PUBLIC_URL}/These Old Bones_demo.mp3`,
            //     duration: 213
            // },

            

            // {
            //     metaData: {
            //         artist: "we broke the weather",
            //         title: "The Fog (demo)"
            //     },
            //     url: `${process.env.PUBLIC_URL}/The Fog_demo.mp3`,
            //     duration: 213
            // },
        
        
        ]
        });
        webamp.onClose(() => {
            webamp.dispose();
        })

        webamp.renderWhenReady(document.getElementById('winamp-container'));
        
    }
}

export { startWebamp } 