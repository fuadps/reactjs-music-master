import React from 'react';

const Artist = ({artist}) => {
    if (!artist) return null;
    
    const{images,name,followers,genres} = artist;

    return (
        <div>
            <h4>{name}</h4>
            <p>{followers.total} followers</p>
            <p>{genres.join(',')}</p>
            <img src={images[0] && images[0].url} alt='artist image' 
            style = {{
                width: 250,
                height: 250,
                borderRadius: 125,
                objectFit: 'cover'
            }} />
        </div>
    )
}

export default Artist;