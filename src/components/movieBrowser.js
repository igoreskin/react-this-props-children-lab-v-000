import React from 'react';

export default class MovieBrowser extends React.Component {
  render() {
    const currentPlayingTitle = this.props.currentPlayingTitle;
    const childrenWithExtraProp = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
        isplaying: child.props.title === currentPlayingTitle
      });
    });

    return (
      <div className="movie-browser">
        { childrenWithExtraProp }
      </div>
    );
  }
}
