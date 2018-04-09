import React from 'react';
import ReactDOM from 'react-dom';

import Invitation from './components/Invitation';
import ThemedDecorations from './components/ThemedDecorations';
import MovieBrowser from './components/movieBrowser';
import Movie from './components/Movie'

ReactDOM.render(
  <div>
    <Invitation>Hey, you should totally come to this awesome party I&apos;m throwing!</Invitation>
    <ThemedDecorations theme="heaven">
      <p>A decoration</p>
      <p>Some other decoration</p>
      <p>A last decoration</p>
    </ThemedDecorations>
  </div>,
  document.getElementById('global')
);

ReactDOM.render(
  <MovieBrowser currentPlayingTitle="Harry Potter & The Goblet Of Fire">
    <Movie title='Mad Max: Fury Road' />
    <Movie title='Harry Potter & The Goblet Of Fire' />
  </MovieBrowser>,
  document.getElementById('root')
);
