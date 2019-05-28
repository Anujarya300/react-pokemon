import * as React from 'react';
import {Typeahead} from 'react-bootstrap-typeahead';

export interface FilterTextProps {
    items: any[];
    defaultSelected?: any;
    onFilterChanged: (selected: any[]) => any;
    placeholder?: string;
    selectedItem?: any;
}

const FilterText: React.SFC<FilterTextProps> = props => {

    return (
        <div>
            <Typeahead
                id={props.defaultSelected}
                options={props.items}
                onChange={(selected) => props.onFilterChanged(selected)}
                placeholder={props.placeholder}
                selected={[props.selectedItem || ""]}
            />
        </div>
    )
}

export default FilterText;