import React, { useEffect, useState, useContext } from 'react'
import DataContext from '../../contexts/dataContext'
import About from './About'
import Shows from './Shows'
import Merch from './Merch'
import Credits from './Credits'
import Videos from './Videos'

function ContentFactory({ id, isMobile }) {
    const data = useContext(DataContext);
    const [item, setItem] = useState(null);

    useEffect(() => {
        const file = data.getItem(id);
        setItem(file);
    }, [id, data]);

    if (item === null) {
        return (<div></div>);
    }

    switch (item.id) {
     
        case 'shows':
            return <Shows content={item.content} />
        case 'merch':
            return <Merch content={item.content} />
        case 'videos':
            return <Videos content={item.content} />
        case 'about':
            return <About content={item.content} />
        case 'credits':
            return <Credits content={item.content} />
        default:
            return (<div></div>);
    }

}

export default ContentFactory
