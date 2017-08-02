import preloader from 'spectacle/lib/utils/preloader';

const images = {
  logo: require('assets/img/logo-blue.svg'),
  background: require('assets/img/bg.jpg'),
  mike: require('assets/img/mike.jpg'),
  wojcio: require('assets/img/wojcio.png'),
  dirtyTree: require('assets/img/dirtyTree.png'),
  drunk: require('assets/img/drunk.jpg'),
  fight: require('assets/img/fight.jpg'),
};

preloader(images);

export default images;
