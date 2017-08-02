import preloader from 'spectacle/lib/utils/preloader';

const images = {
  logo: require('assets/img/logo-blue.svg'),
  background: require('assets/img/bg.jpg'),
  mike: require('assets/img/mike.jpg'),
};

preloader(images);

export default images;
