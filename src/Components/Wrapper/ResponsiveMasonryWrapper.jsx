import React from 'react'
import { ResponsiveMasonry } from 'react-responsive-masonry';

const ResponsiveMasonryWrapper = ({
  children,
  columnsCountBreakPoints,
  ...rest
}) => {
  // Here you can handle the columnsCountBreakPoints prop however needed
  return (
    <div {...rest}>
      <ResponsiveMasonry columnsCountBreakPoints={columnsCountBreakPoints}>
        {children}
      </ResponsiveMasonry>
    </div>
  );
}

export default ResponsiveMasonryWrapper
