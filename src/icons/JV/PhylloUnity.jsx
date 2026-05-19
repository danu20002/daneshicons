import React from 'react';

export const iconData = {
  "id": "PhylloUnity",
  "name": "PhylloUnity",
  "category": "JV",
  "nodes": [
    [
      "path",
      {
        "d": "M 13.69 11.61 L 15.32 9.78 L 13.06 8.53 L 10.76 8.88 L 11.62 7.54 L 10.69 7.20 L 13.23 8.28 L 12.96 10.96 L 11.56 11.82 L 12.69 9.46 L 15.33 8.90 L 18.14 6.87 L 19.61 5.17 L 18.20 6.07 L 19.60 5.97 L 19.14 5.87 L 16.63 7.04 L 16.64 4.16 L 18.15 6.46 L 16.79 7.12 L 14.80 7.96"
      }
    ]
  ]
};

export const PhylloUnity = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 13.69 11.61 L 15.32 9.78 L 13.06 8.53 L 10.76 8.88 L 11.62 7.54 L 10.69 7.20 L 13.23 8.28 L 12.96 10.96 L 11.56 11.82 L 12.69 9.46 L 15.33 8.90 L 18.14 6.87 L 19.61 5.17 L 18.20 6.07 L 19.60 5.97 L 19.14 5.87 L 16.63 7.04 L 16.64 4.16 L 18.15 6.46 L 16.79 7.12 L 14.80 7.96" />
      {children}
    </svg>
  );
});

export default PhylloUnity;
