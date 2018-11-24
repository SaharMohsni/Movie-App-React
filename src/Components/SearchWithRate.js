import React from 'react'
import Rate from './Rate'


const SearchWithRate = (props) =>
    <div className="searchRate">
        <span className="rateLevel">Minimum Rating</span>
        <div className="rating">
            <Rate fullStarsnbr={props.rateValue} minRateChange={props.minRateChange}/>
        </div>
    </div>






export default SearchWithRate