import React from 'react'
import Plot from 'react-plotly.js';

export default function Map ({countries, values, attribute}) {
    return (
        <Plot
            data={[{
                type: 'choropleth',
                locationmode: 'country names',
                locations: countries,
                z: values,
                autocolorscale: true
            }]}
            layout={{
                width: 1500,
                height: 900, 
                geo: {
                    projection: {
                        type: 'robinson'
                    }
                }
            }}
        />
    );
}

// text: unpack(rows, 'location'),

