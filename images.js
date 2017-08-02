import preloader from 'spectacle/lib/utils/preloader';

const images = {
  logo: require('assets/img/logo.svg'),
  background: require('assets/img/bg.jpg'),
  chudziak: require('assets/img/chudziak.jpg'),
  dratwa: require('assets/img/dratwa.jpg'),
  facebookWeb: require('assets/img/facebookWeb.png'),
  facebookAndroid: require('assets/img/facebookAndroid.png'),
  facebookIos: require('assets/img/facebookIos.png'),
};

preloader(images);

export default images;
