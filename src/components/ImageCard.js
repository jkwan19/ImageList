import React from 'react';

class ImageCard extends React.Component {

  render() {

    const { description, urls } = this.props.image;
    return (
      <div id={this.props.id}>
        <img
          alt={description}
          src={urls.regular}
          />
      </div>
    );
  }
}

export default ImageCard;