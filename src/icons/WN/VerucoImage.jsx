import React from 'react';

export const iconData = {
  "id": "VerucoImage",
  "name": "VerucoImage",
  "category": "WN",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.30 14.79 L 15.18 14.91 L 15.62 21.02 L 11.71 16.30 L 7.21 20.45 L 8.45 14.46 L 2.41 13.52 L 7.87 10.76 L 4.83 5.45 L 10.39 8.00 L 12.65 2.31 L 14.13 8.25 L 19.99 6.47 L 16.26 11.33 Z"
      }
    ]
  ]
};

export const VerucoImage = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.30 14.79 L 15.18 14.91 L 15.62 21.02 L 11.71 16.30 L 7.21 20.45 L 8.45 14.46 L 2.41 13.52 L 7.87 10.76 L 4.83 5.45 L 10.39 8.00 L 12.65 2.31 L 14.13 8.25 L 19.99 6.47 L 16.26 11.33 Z" />
      {children}
    </svg>
  );
});

export default VerucoImage;
