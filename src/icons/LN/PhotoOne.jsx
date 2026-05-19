import React from 'react';

export const iconData = {
  "id": "PhotoOne",
  "name": "PhotoOne",
  "category": "LN",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.90 15.34 L 14.94 21.04 L 6.76 19.93 L 2.53 12.85 L 5.43 5.13 L 13.28 2.58 L 20.16 7.13 Z"
      }
    ]
  ]
};

export const PhotoOne = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.90 15.34 L 14.94 21.04 L 6.76 19.93 L 2.53 12.85 L 5.43 5.13 L 13.28 2.58 L 20.16 7.13 Z" />
      {children}
    </svg>
  );
});

export default PhotoOne;
