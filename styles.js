import createTheme from 'spectacle/lib/themes/default';

import images from 'images';

const colors = {
  primary: '#EA4E51',
  secondary: '#FFFFFF',
  tertiary: '#CDFFFF',
  quartenary: '#2B7CEA',
};

const fonts = {
  primary: 'Montserrat',
  secondary: 'Playfair Display',
};

export const backgroundWithImage = {
  backgroundImage: `url(${images.background})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
};

export const boldedPrimary = {
  color: colors.primary,
  fontWeight: 'bold',
};

export const boldedTertiary = {
  color: colors.tertiary,
  fontWeight: 'bold',
};

export const theme = createTheme(colors, fonts);
