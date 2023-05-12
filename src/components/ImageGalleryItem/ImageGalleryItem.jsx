import PropTypes from 'prop-types';
import css from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ picture, tags, largeImage, onImage }) => {
  return (
    <li className={css.galleryItem}>
      <img
        className={css.galleryImage}
        src={picture}
        alt={tags}
        onClick={() => onImage(largeImage)}
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  picture: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  largeImage: PropTypes.string.isRequired,
  onImage: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
