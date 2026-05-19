import React from 'react';

export const iconData = {
  "id": "VarcareRetire",
  "name": "VarcareRetire",
  "category": "IJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 15.27 9.95 L 16.46 9.04 L 14.59 11.55 L 16.60 13.14 L 19.29 11.85 L 18.87 12.32 L 19.14 14.53 L 21.16 16.61 L 21.24 18.14 L 18.37 16.72 L 19.95 19.08 L 22.16 16.48 L 23.00 17.52 L 21.71 18.59 L 22.08 15.70 L 20.45 14.61 L 18.87 14.45"
      }
    ],
    [
      "path",
      {
        "d": "M 9.41 10.81 L 7.14 7.88 L 6.20 5.09 L 4.76 3.79 L 5.65 6.33 L 6.42 3.82 L 8.55 3.37 L 5.69 1.82 L 6.89 1.98 L 5.44 1.00 L 8.15 3.95 L 7.43 3.06 L 4.93 1.00 L 7.11 3.69 L 9.28 2.20 L 7.36 3.97 L 7.73 2.55"
      }
    ]
  ]
};

export const VarcareRetire = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 15.27 9.95 L 16.46 9.04 L 14.59 11.55 L 16.60 13.14 L 19.29 11.85 L 18.87 12.32 L 19.14 14.53 L 21.16 16.61 L 21.24 18.14 L 18.37 16.72 L 19.95 19.08 L 22.16 16.48 L 23.00 17.52 L 21.71 18.59 L 22.08 15.70 L 20.45 14.61 L 18.87 14.45" />
      <path d="M 9.41 10.81 L 7.14 7.88 L 6.20 5.09 L 4.76 3.79 L 5.65 6.33 L 6.42 3.82 L 8.55 3.37 L 5.69 1.82 L 6.89 1.98 L 5.44 1.00 L 8.15 3.95 L 7.43 3.06 L 4.93 1.00 L 7.11 3.69 L 9.28 2.20 L 7.36 3.97 L 7.73 2.55" />
      {children}
    </svg>
  );
});

export default VarcareRetire;
