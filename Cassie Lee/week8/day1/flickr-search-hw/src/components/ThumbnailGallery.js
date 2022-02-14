import React from 'react';

class ThumbnailGallery extends React.Component {

    generateImage = (photo, size) => {
        return `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_${size}.jpg`
    }


    render(){

        return(
            <div className = "thumbnails">
                <ul>
                {
                    this.props.loading
                    ?
                    <p>Loading results...</p>
                    :
                    this.props.photos.map(photo => <img src={this.generateImage(photo, 'q')} />)  

                }
                </ul>
            </div>
        )
    }
}

export default ThumbnailGallery;