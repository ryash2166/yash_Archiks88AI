import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const LazyLoadImg = ({
  alt,
  src,
  className,
  height,
  width,
  defaultImg = '',
  style = {},
  ...other
}) => {
  return (
    <LazyLoadImage
      alt={alt}
      src={src || defaultImg}
      className={className}
      effect='blur'
      height={height}
      width={width}
      style={style}
      {...other}
    />
  );
};

export default LazyLoadImg;
