import * as React from 'react';
import IsoTopeGrid from "react-isotope";
 
import { cards } from "./cards";
import { filtersDefault } from "./filters";
import { Card } from 'react-bootstrap';

export const IsoLayout = () => {
    // Local state for managing filtering logic
    const [filters, updateFilters] = React.useState(filtersDefault);
 
    // Filter change handler
    const onFilter = (e: any) => {
        const {
        target: { value, checked }
        } = e;
    
        updateFilters(state =>
            state.map(f => {
                if (f.label === value) {
                return {
                    ...f,
                    isChecked: checked
                };
                }
        
                return f;
            })
        );
    };
    return (
        <React.Fragment>
        <div className="filter-container">
            {filters.map(f => (
            <div className="filter" key={`${f.label}_key`}>
                <input
                id={f.label}
                type="checkbox"
                value={f.label}
                onChange={onFilter}
                checked={f.isChecked}
                />
                <label htmlFor={f.label}>{f.label}</label>
            </div>
            ))}
        </div>
    
        <div className="container">
            <IsoTopeGrid
            gridLayout={cards} // gridlayout of cards
            noOfCols={2} // number of columns show in one row
            unitWidth={200} // card width of 1 unit
            unitHeight={100} // card height of 1 unit
            filters={filters} // list of selected filters
            >
            {cards.map((card: any) => (
                <Card key={card.id} className={card.filter[0]}>
                    <Card.Title>{`Testing ${card.id}`}</Card.Title>
                    <Card.Body>
                        Lorem ipsume wiofwefonwfnweo
                    </Card.Body>
                </Card>
            ))}
            </IsoTopeGrid>
      </div>
      </React.Fragment>
    )
}