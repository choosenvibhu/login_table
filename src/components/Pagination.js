import React from 'react';

const Pagination = ({ countryPerPage, totalCountry, paginate }) => {
    const pageNumbers = [];

    for( let i = 1; i<=Math.ceil(totalCountry/ countryPerPage); i++ ) {
        pageNumbers.push(i);
    }
    
    return (
        <nav>
            <ul className="pagination">
                {pageNumbers.map(number => (
                    <li onClick={() => paginate(number)} key={number} className="page-item">
                        <a className="page-link">
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default React.memo(Pagination);