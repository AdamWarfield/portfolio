import React from 'react';

const HeadComponents = [<script  src="/scripts.js" />];

const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents(HeadComponents);
};

export { onRenderBody };