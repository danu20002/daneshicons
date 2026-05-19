import React from 'react';

export const iconData = {
  "id": "PomoHay",
  "name": "PomoHay",
  "category": "WZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 18.55 9.89 L 19.26 9.15 L 19.63 9.47 L 18.13 9.44 L 19.37 10.45 L 18.77 13.07 L 16.68 10.22 L 19.42 12.55 L 21.17 12.87 L 22.79 10.64 L 23.00 7.86 L 20.26 8.87 L 17.68 8.38 L 15.69 8.33 L 15.19 6.76 L 17.74 5.63 L 19.42 7.43 L 21.62 6.30"
      }
    ],
    [
      "path",
      {
        "d": "M 7.16 11.63 L 4.85 13.78 L 2.55 16.10 L 4.85 15.47 L 4.44 17.49 L 2.85 15.99 L 3.95 14.08 L 4.68 15.22 L 7.31 17.07 L 8.98 18.41 L 7.33 16.19 L 7.59 17.84 L 5.74 18.22 L 8.14 20.33 L 8.57 18.57 L 9.18 16.67 L 8.32 17.06 L 9.25 17.25 L 8.12 15.27 L 9.67 16.04 L 7.13 15.45 L 9.21 14.32 L 12.14 11.58 L 9.26 10.62 L 12.25 13.10 L 13.86 11.27 L 16.60 12.75"
      }
    ]
  ]
};

export const PomoHay = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 18.55 9.89 L 19.26 9.15 L 19.63 9.47 L 18.13 9.44 L 19.37 10.45 L 18.77 13.07 L 16.68 10.22 L 19.42 12.55 L 21.17 12.87 L 22.79 10.64 L 23.00 7.86 L 20.26 8.87 L 17.68 8.38 L 15.69 8.33 L 15.19 6.76 L 17.74 5.63 L 19.42 7.43 L 21.62 6.30" />
      <path d="M 7.16 11.63 L 4.85 13.78 L 2.55 16.10 L 4.85 15.47 L 4.44 17.49 L 2.85 15.99 L 3.95 14.08 L 4.68 15.22 L 7.31 17.07 L 8.98 18.41 L 7.33 16.19 L 7.59 17.84 L 5.74 18.22 L 8.14 20.33 L 8.57 18.57 L 9.18 16.67 L 8.32 17.06 L 9.25 17.25 L 8.12 15.27 L 9.67 16.04 L 7.13 15.45 L 9.21 14.32 L 12.14 11.58 L 9.26 10.62 L 12.25 13.10 L 13.86 11.27 L 16.60 12.75" />
      {children}
    </svg>
  );
});

export default PomoHay;
