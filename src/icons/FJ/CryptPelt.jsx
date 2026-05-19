import React from 'react';

export const iconData = {
  "id": "CryptPelt",
  "name": "CryptPelt",
  "category": "FJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.75 11.68 3.61 8.07 Q 7.60 9.80 11.59 11.53 Q 14.15 14.40 16.71 17.28 Q 18.18 19.04 19.66 20.80 Q 17.41 19.84 15.16 18.87 Q 11.45 18.38 7.74 17.90 Q 5.94 17.13 4.14 16.36 Q 5.02 15.82 5.89 15.28 Z"
      }
    ]
  ]
};

export const CryptPelt = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.75 11.68 3.61 8.07 Q 7.60 9.80 11.59 11.53 Q 14.15 14.40 16.71 17.28 Q 18.18 19.04 19.66 20.80 Q 17.41 19.84 15.16 18.87 Q 11.45 18.38 7.74 17.90 Q 5.94 17.13 4.14 16.36 Q 5.02 15.82 5.89 15.28 Z" />
      {children}
    </svg>
  );
});

export default CryptPelt;
