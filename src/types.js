import { GraphQLEnumType } from 'gatsby/graphql';

export const WatermarkGravityType = new GraphQLEnumType({
  name: 'WatermarkGravity',
  values: {
    Center: { value: 'center' },
    South: { value: 'south' },
    SouthEast: { value: 'southeast' },
    SouthWest: { value: 'southwest' },
    North: { value: 'north' },
    NorthEast: { value: 'northeast' },
    NorthWest: { value: 'northwest' },
    East: { value: 'east' },
    West: { value: 'west' },
  },
});

export const WatermarkBlendType = new GraphQLEnumType({
  name: 'WatermarkBlend',
  values: {
    Clear: { value: 'clear' },
    Source: { value: 'source' },
    Over: { value: 'over' },
    In: { value: 'in' },
    Out: { value: 'out' },
    Atop: { value: 'atop' },
    Dest: { value: 'dest' },
    DestOver: { value: 'dest-over' },
    DestIn: { value: 'dest-in' },
    DestOut: { value: 'dest-out' },
    DestAtop: { value: 'dest-atop' },
    Xor: { value: 'xor' },
    Add: { value: 'add' },
    Saturate: { value: 'saturate' },
    Multiply: { value: 'multiply' },
    Screen: { value: 'screen' },
    Overlay: { value: 'overlay' },
    Darken: { value: 'darken' },
    Lighten: { value: 'lighten' },
    ColourDodge: { value: 'colour-dodge' },
    ColorDodge: { value: 'color-dodge' },
    ColourBurn: { value: 'colour-burn' },
    ColorBurn: { value: 'color-burn' },
    HardLight: { value: 'hard-light' },
    SoftLight: { value: 'soft-light' },
    Difference: { value: 'difference' },
    Exclusion: { value: 'exclusion' },
  },
});
