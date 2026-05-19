import React from 'react';

export const iconData = {
  "id": "ZonaKey",
  "name": "ZonaKey",
  "category": "WW",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.41 4.67 L 14.12 15.25"
      }
    ],
    [
      "path",
      {
        "d": "M 12.05 5.89 L 6.60 4.74 L 18.28 13.66 L 12.45 19.67 L 9.97 13.44 L 18.43 19.53 L 4.24 15.36"
      }
    ],
    [
      "path",
      {
        "d": "M 5.26 8.40 L 11.61 5.78"
      }
    ],
    [
      "path",
      {
        "d": "M 17.59 15.05 L 21.20 2.41 L 11.48 6.74 L 12.41 17.03 L 2.56 2.49 L 9.70 8.17 L 2.88 13.19"
      }
    ]
  ]
};

export const ZonaKey = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.41 4.67 L 14.12 15.25" />
      <path d="M 12.05 5.89 L 6.60 4.74 L 18.28 13.66 L 12.45 19.67 L 9.97 13.44 L 18.43 19.53 L 4.24 15.36" />
      <path d="M 5.26 8.40 L 11.61 5.78" />
      <path d="M 17.59 15.05 L 21.20 2.41 L 11.48 6.74 L 12.41 17.03 L 2.56 2.49 L 9.70 8.17 L 2.88 13.19" />
      {children}
    </svg>
  );
});

export default ZonaKey;
