import React, { useState } from 'react'
import TagCloud, { renderData } from 'd3-tagcloud-for-react';
import VisibilitySensor from 'react-visibility-sensor';

const colorarray = [
    '#a3a3a3',
    '#737373',
    '#525252',
    '#404040',
    '#262626',
    '#171717',
    '#0a0a0a',
]
const data = [
    {
        label: 'C/C++',
        fontSize: 9,
        opacity: 9,
    },
    {
        label: 'React',
        fontSize: 7,
        opacity: 7,
    },
    {
        label: 'Vue',
        fontSize: 7,
        opacity: 8,
    },
    {
        label: 'JavaScript',
        fontSize: 4,
        opacity: 9,
    },
    {
        label: 'TypeScript',
        fontSize: 3,
        opacity: 8,
    },
    {
        label: 'Python',
        fontSize: 6,
        opacity: 7,
    },
    {
        label: 'Flask',
        fontSize: 4,
        opacity: 5,
    },
    
    {
        label: 'SQL',
        fontSize: 6,
        opacity: 7,
    },    
    {
        label: 'Express',
        fontSize: 6,
        opacity: 7,
    },
    {
        label: 'PostgreSQL',
        fontSize: 4,
        opacity: 5,
    },
    
    {
        label: 'Tensorflow',
        fontSize: 4,
        opacity: 3,
    },
    {
        label: 'Pandas',
        fontSize: 3,
        opacity: 5,
    },
    {
        label: 'Flutter',
        fontSize: 5,
        opacity: 5,
    },

    {
        label: 'Docker',
        fontSize: 3,
        opacity: 5,
    },
    {
        label: 'Git',
        fontSize: 3,
        opacity: 4,
    },
    {
        label: 'Bash',
        fontSize: 3,
        opacity: 4,
    },
    
    /*
        {
        label: 'HTML/CSS',
        fontSize: 4,
        opacity: 4,
    },
    {
        label: 'CSS',
        fontSize: 4,
        opacity: 5,
    },
    */
   
]

const ToolsTagCloud = () => {

    const [visible, setVisible] = useState(false);
    const onVisibilitySensorChange = (isVisible) => {
        if (isVisible) {
            setVisible(true);
        }
    };
    return (
        <div>
            <VisibilitySensor
                partialVisibility
                offset={{ bottom: 80 }}
                onChange={onVisibilitySensorChange}>
                <TagCloud
                    className='tag-cloud'
                    style={{
                        fontFamily: 'sans-serif',
                        padding: 5,
                        width: '100%',
                        height: '300px',
                    }}
                    data={data}
                    colorarray={colorarray}
                >
                    {renderData(data)}
                </TagCloud>
            </VisibilitySensor>


        </div>
    )
}

export default ToolsTagCloud
