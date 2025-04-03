import React, { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';
const supabase = createClient(supabaseUrl, supabaseKey);


const Cards = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchData() {
            const { data, error } = await supabase
                .from('mythes') // Remplace par le nom de ta table
                .select('*');
            if (error) {
                setError(error);
            } else {
                setData(data);
            }
        }
        fetchData();
    }, []);

    return (
        <div>
            {error && <p>Erreur : {error.message}</p>}
            <div className="cards-container">
                {data.map(item => (
                    <div key={item.id} className="card">
                        <h3>{item.titre}</h3>
                        <p>{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};


