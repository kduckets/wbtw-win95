import React from 'react'



function Videos({ content }) {


    return (
        <div>
            <h2>we broke the weather</h2>
            <hr class="rounded"></hr> 

            <h3>video archives</h3>
            <p><small><i>Fire Season - January 21, 2020 at the Midway JP</i></small></p>
            <iframe width="100%" height="315" 
            src="https://www.youtube.com/embed/gJOayQVMbIg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

        </div>
    )
}

export default Videos
