/* React + Plugins */
import React from 'react';
import Autocomplete from 'react-autocomplete';
import { Button } from 'react-bootstrap';

/* Search/Autocomplete utility functions */
import { getLocations, matchSearchTerm, sortLocations, styles } from '../lib/search';

/* Component Styles */
import '../css/SearchForm.css';

const SearchForm = React.createClass({

    getInitialState() {
        return {
            value: this.props.value
        };
    },

    sendSearch() {
        let that = this;
        let city = getLocations().filter(function (loc) { return loc.name === that.state.value });
        this.props.searchLocation(this.state.value, city[0].country);
    },

    render() {
        return (
            <div className="autoOuter">
                <Autocomplete
                    value={this.state.value}
                    inputProps={{name: "City", id: "city-autocomplete"}}
                    items={getLocations()}
                    getItemValue={(item) => item.name}
                    shouldItemRender={matchSearchTerm}
                    sortItems={sortLocations}
                    onChange={(event, value) => this.setState({ value })}
                    onSelect={value => this.setState({ value: value })}
                    renderItem={(item, isHighlighted) => (
                        <div
                        style={isHighlighted ? styles.highlightedItem : styles.item}
                        key={item.abbr}
                        >{item.name}</div>
                    )}
                />
                <Button onClick={this.sendSearch} className="pull-right">GO</Button>
            </div>
        );
    }
});

export default SearchForm;
