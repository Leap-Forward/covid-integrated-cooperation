import React from 'react';
import { ResponsiveBubble } from '@nivo/circle-packing';
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

const BubbleChart = ({ root /* see root tab */ }) => (
  <ResponsiveBubble
    root={root}
    margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
    identity="name"
    value="count"
    padding={6}
    borderWidth={2}
    borderColor={{ from: 'color' }}
    animate
    motionStiffness={90}
    motionDamping={12}
  />
);


export default BubbleChart;
