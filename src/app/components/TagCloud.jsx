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
        opacity: 10,
    },
    {
        label: 'Dart',
        fontSize: 4,
        opacity: 5,
    },
    {
        label: 'Flutter',
        fontSize: 7,
        opacity: 7,
    },
    {
        label: 'HTML',
        fontSize: 4,
        opacity: 4,
    },
    {
        label: 'CSS',
        fontSize: 4,
        opacity: 5,
    },
    {
        label: 'React',
        fontSize: 7,
        opacity: 7,
    },
    {
        label: 'JavaScript',
        fontSize: 4,
        opacity: 8,
    },
    {
        label: 'Shell',
        fontSize: 5,
        opacity: 6,
    },
    {
        label: 'Python',
        fontSize: 8,
        opacity: 9,
    },
    {
        label: 'Tensorflow',
        fontSize: 6,
        opacity: 3,
    },
    {
        label: 'Git',
        fontSize: 6,
        opacity: 4,
    },
    {
        label: 'Pandas',
        fontSize: 3,
        opacity: 5,
    },
    {
        label: 'Flask',
        fontSize: 4,
        opacity: 5,
    },
    /*
    {
        label: 'SQL',
        fontSize: 6,
        opacity: 6,
    },
    */
    {
        label: 'Next.js',
        fontSize: 3,
        opacity: 4,
    },
    /*
    {
        label: 'GraphQL',
        fontSize: 3,
        opacity: 4,
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
