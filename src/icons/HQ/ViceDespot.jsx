import React from 'react';

export const iconData = {
  "id": "ViceDespot",
  "name": "ViceDespot",
  "category": "HQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 12.99 5.27 L 13.45 6.56 L 12.56 4.74 L 14.36 4.69 L 13.32 3.18 L 11.57 3.76 L 8.86 5.72 L 6.96 5.59 L 6.38 5.97 L 8.51 8.18 L 9.19 7.91 L 11.09 7.28 L 8.24 7.64 L 5.33 5.23 L 5.16 7.88 L 4.10 8.40"
      }
    ],
    [
      "path",
      {
        "d": "M 18.03 11.78 L 20.35 10.04 L 21.09 7.75 L 19.91 8.53 L 17.54 8.37 L 18.13 5.40 L 18.57 3.57 L 18.25 4.48 L 19.75 7.41 L 19.10 8.91 L 17.91 6.81 L 17.48 7.98 L 20.04 6.44 L 21.26 6.28 L 21.55 8.84 L 21.81 6.67 L 23.00 5.29 L 22.71 6.46 L 23.00 6.53 L 21.30 3.79 L 21.16 6.62 L 22.58 8.94 L 23.00 10.80 L 23.00 13.73 L 20.76 13.71 L 20.47 14.50 L 22.10 14.24 L 23.00 13.71"
      }
    ]
  ]
};

export const ViceDespot = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 12.99 5.27 L 13.45 6.56 L 12.56 4.74 L 14.36 4.69 L 13.32 3.18 L 11.57 3.76 L 8.86 5.72 L 6.96 5.59 L 6.38 5.97 L 8.51 8.18 L 9.19 7.91 L 11.09 7.28 L 8.24 7.64 L 5.33 5.23 L 5.16 7.88 L 4.10 8.40" />
      <path d="M 18.03 11.78 L 20.35 10.04 L 21.09 7.75 L 19.91 8.53 L 17.54 8.37 L 18.13 5.40 L 18.57 3.57 L 18.25 4.48 L 19.75 7.41 L 19.10 8.91 L 17.91 6.81 L 17.48 7.98 L 20.04 6.44 L 21.26 6.28 L 21.55 8.84 L 21.81 6.67 L 23.00 5.29 L 22.71 6.46 L 23.00 6.53 L 21.30 3.79 L 21.16 6.62 L 22.58 8.94 L 23.00 10.80 L 23.00 13.73 L 20.76 13.71 L 20.47 14.50 L 22.10 14.24 L 23.00 13.71" />
      {children}
    </svg>
  );
});

export default ViceDespot;
