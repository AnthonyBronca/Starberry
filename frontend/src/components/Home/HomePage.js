import React from 'react';
import NavBar from '../NavBar/NavBar';


export default function HomePage() {
    return (
        <div>
            <NavBar />
            <hr
                width='110%'
                style={{ position: 'relative', right: '1rem' }}
                color='#D9D9D9' />
        </div>
    );
}
