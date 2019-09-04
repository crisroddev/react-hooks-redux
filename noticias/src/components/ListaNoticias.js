import React from 'react';

const ListaNoticias = ({noticias}) => (
    <div className="row">
        {noticias.map(noticia => (
            <Noticia/>
        ))}
    </div>
);

 
export default ListaNoticias;