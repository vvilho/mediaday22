import React, {useEffect} from 'react';


const PromoVideo = () => {
    useEffect(() => {
        document.title = 'MediaDay Promo'
    }, []);

    return (
        <div>
            <iframe id="ls_embed_1632898919"
                    src="https://livestream.com/accounts/11707815/events/4299364/player?width=640&height=360&enableInfoAndActivity=true&defaultDrawer=&autoPlay=true&mute=false"
                    width="640" height="360" frameBorder="0" scrolling="no" allowFullScreen autoPlay={true}></iframe>
        </div>
    )
};

export {PromoVideo}
