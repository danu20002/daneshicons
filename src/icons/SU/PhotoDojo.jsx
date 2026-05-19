import React from 'react';

export const iconData = {
  "id": "PhotoDojo",
  "name": "PhotoDojo",
  "category": "SU",
  "nodes": [
    [
      "path",
      {
        "d": "M 11.66 3.61 L 19.10 7.52 L 19.43 15.90 L 12.34 20.39 L 4.90 16.48 L 4.57 8.10 Z"
      }
    ]
  ]
};

export const PhotoDojo = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 11.66 3.61 L 19.10 7.52 L 19.43 15.90 L 12.34 20.39 L 4.90 16.48 L 4.57 8.10 Z" />
      {children}
    </svg>
  );
});

export default PhotoDojo;
