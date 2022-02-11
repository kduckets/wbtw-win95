import Webamp from 'webamp'

const startWebamp = () => {
    if (Webamp.browserIsSupported()) {
        const webamp = new Webamp({
            initialTracks: [
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
       {
        metaData: {
            artist: "we broke the weather",
            title: "These Old Bones"
        },
        url: `${process.env.PUBLIC_URL}/03 These Old Bones.mp3`,
        duration: 260
    },

         {
            metaData: {
                artist: "we broke the weather",
                title: "Niceberg"
            },
            url: `${process.env.PUBLIC_URL}/04 Niceberg.mp3`,
            duration: 260
        },


        {
            metaData: {
                artist: "we broke the weather",
                title: "wbtw"
            },
            url: `${process.env.PUBLIC_URL}/05 wbtw.mp3`,
            duration: 260
        },
        {
            metaData: {
                artist: "we broke the weather",
                title: "Fire Season"
            },
            url: `${process.env.PUBLIC_URL}/06 Fire Season.mp3`,
            duration: 260
        },
                {
                
                metaData: {
                    artist: "we broke the weather",
                    title: "Bellwether"
                },
                url: `${process.env.PUBLIC_URL}/07 Bellwether.mp3`,
                duration: 260
            },
            {
                metaData: {
                    artist: "we broke the weather",
                    title: "In Web"
                },
                url: `${process.env.PUBLIC_URL}/08 In Web.mp3`,
                duration: 260
            },

            {
                metaData: {
                    artist: "we broke the weather",
                    title: "The Fog"
                },
                url: `${process.env.PUBLIC_URL}/09 The Fog.mp3`,
                duration: 260
            },
            {
                metaData: {
                    artist: "we broke the weather",
                    title: "Frequency"
                },
                url: `${process.env.PUBLIC_URL}/10 Frequency.mp3`,
                duration: 260
            },
            {
                metaData: {
                   artist: "dj mike llama",
                   title: "llama whippin' intro"
               },
               url: `${process.env.PUBLIC_URL}/llama-2.91.mp3`,
               duration: 20
           },
        
        
        ]
        });
        webamp.onClose(() => {
            webamp.dispose();
        })

        webamp.renderWhenReady(document.getElementById('winamp-container'));
        
    }
}

export { startWebamp } 