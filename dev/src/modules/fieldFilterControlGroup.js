import React, { useState } from "react";
import './css/style.css';
import { FieldFilterControl } from "./fieldFilterControl";
import { FilterGroupAndGate } from "./filter";
const _ = require('lodash')

function Block({ children }) {
    return <div className="filter-control-block">{children}</div>
}

export default function FieldFilterControlGroup({ data, filterDescriptors, onFilterChanged, onFiltered, defaultFilters }) {
    const [filters, setFilters] = useState(defaultFilters)
    const [active, setActive] = useState('')
    function updateFilters(newFilters) {
        setFilters(newFilters)
        if (onFilterChanged) {
            onFilterChanged(newFilters)
        }
        if (onFiltered) {
            onFiltered(new FilterGroupAndGate('', newFilters).filter(data))
        }
    }
    return <div className="filter-control-group">
        {
            filterDescriptors.map(kit => <Block key={`filter-control-block-${kit.name}`}>
                <FieldFilterControl
                    title={kit.title}
                    name={kit.name}
                    type={kit.type}
                    filters={filters}
                    data={data}
                    impactedByOtherFilters={kit.impactedByOtherFilters}
                    expand={kit.expand}
                    expandIcon={kit.expandIcon}
                    collapseIcon={kit.collapseIcon}
                    isActive={active === kit.name}
                    onFilterChanged={filter => {
                        setActive(kit.name)

                        const temp = [...filters]
                        _.remove(temp, f => f.getOwner() === kit.name)
                        if (filter) {
                            updateFilters([...temp, filter])
                        }
                        else {
                            updateFilters(temp)
                        }
                    }}
                    config={kit.config}
                />
            </Block>)
        }
    </div>
}