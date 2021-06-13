import React from 'react';
import { BrowseContainer } from '../containers/browse';
import { useContent } from '../hooks';
import { selectionFilter } from '../utils';

export default function Browse() {
  const { stories } = useContent('stories');
  const slides = selectionFilter({ stories });

  return <BrowseContainer slides={slides} />;
}