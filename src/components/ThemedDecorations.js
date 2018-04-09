import React from 'react';

class ThemedDecorations extends React.Component {
  render() {

      const wrappedDecorations = React.Children.map(this.props.children, child => {
        return (
          <div className={this.props.theme}>{child}</div>
        );
      });

      return (
        <div>
          {wrappedDecorations}
        </div>
      );

  }
}

export default ThemedDecorations;
