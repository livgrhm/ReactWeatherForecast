export let styles = {
    item: {
        padding: '2px 6px',
        cursor: 'default'
    },

    highlightedItem: {
        color: 'white',
        background: 'hsl(200, 50%, 50%)',
        padding: '2px 6px',
        cursor: 'default'
    },

    menu: {
        border: 'solid 1px #ccc'
    }
}

export function matchSearchTerm(location, value) {
    return (
        location.name.toLowerCase().indexOf(value.toLowerCase()) !== -1
    );
}

export function sortLocations(a, b, value) {
    const aLower = a.name.toLowerCase();
    const bLower = b.name.toLowerCase();
    const valueLower = value.toLowerCase();
    const queryPosA = aLower.indexOf(valueLower);
    const queryPosB = bLower.indexOf(valueLower);
    if (queryPosA !== queryPosB) {
        return queryPosA - queryPosB;
    }
    return (aLower < bLower ? -1 : 1);
}

export function getLocations() {
    return [
    	{id:2643743,name:"London",country:"GB",coord:{lon:-0.12574,lat:51.50853}},
    	{id:2648110,name:"Greater London",country:"GB",coord:{lon:-0.16667,lat:51.5}},
    	{id:2643744,name:"City of London",country:"GB",coord:{lon:-0.08901,lat:51.51334}},
    	{id:5128638,name:"New York",country:"US",coord:{lon:-75.499901,lat:43.000351}},
    	{id:5106292,name:"West New York",country:"US",coord:{lon:-74.014313,lat:40.78788}},
    	{id:5115985,name:"East New York",country:"US",coord:{lon:-73.882362,lat:40.666771}},
    	{id:5138935,name:"South New Berlin",country:"US",coord:{lon:-75.385178,lat:42.529518}},
    	{id:2878102,name:"Berlin Lichtenberg",country:"DE",coord:{lon:13.49975,lat:52.51395}},
    	{id:6545310,name:"Berlin Mitte",country:"DE",coord:{lon:13.40489,lat:52.520031}},
    	{id:7290245,name:"Berlin Steglitz Zehlendorf",coord:"DE",country:{lon:13.24183,lat:52.434849}},
    	{id:7290251,name:"Berlin Wilmersdorf",country:"DE",coord:{lon:13.29097,lat:52.500969}},
    	{id:7290252,name:"Berlin Spandau",country:"DE",coord:{lon:13.19921,lat:52.551102}},
    	{id:7290253,name:"Berlin Tempelhof",country:"DE",coord:{lon:13.41027,lat:52.476929}},
    	{id:7290254,name:"Berlin Schoeneberg",country:"DE",coord:{lon:13.34839,lat:52.474571}},
    	{id:2950158,name:"Berlin",country:"DE",coord:{lon:10.45,lat:54.033329}},
    	{id:3448439,name:"Sao Paulo",country:"BR",coord:{lon:-46.636108,lat:-23.547501}},
    	{id:3388238,name:"Sao Paulo do Potengi",country:"BR",coord:{lon:-35.762779,lat:-5.895}},
    	{id:3662252,name:"Sao Paulo de Olivenca",country:"BR",coord:{lon:-68.872498,lat:-3.37833}}
    ]
}
