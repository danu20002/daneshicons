import React from 'react';

export const iconData = {
  "id": "PotoGallery",
  "name": "PotoGallery",
  "category": "MF",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.06 20.26 L 6.32 5.32 L 20.62 10.42 Z"
      }
    ]
  ]
};

export const PotoGallery = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...rest}
    >
      <path d="M 9.06 20.26 L 6.32 5.32 L 20.62 10.42 Z" />
      {children}
    </svg>
  );
});

export default PotoGallery;
