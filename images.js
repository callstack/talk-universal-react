import preloader from 'spectacle/lib/utils/preloader';

const images = {
  logo: require('assets/img/logo.svg'),
  background: require('assets/img/bg.jpg'),
  chudziak: require('assets/img/chudziak.jpg'),
  dratwa: require('assets/img/dratwa.jpg'),
};

preloader(images);

export default images;
