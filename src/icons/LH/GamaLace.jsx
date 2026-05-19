import React from 'react';

export const iconData = {
  "id": "GamaLace",
  "name": "GamaLace",
  "category": "LH",
  "nodes": [
    [
      "path",
      {
        "d": "M 19.17 3.24 L 17.57 5.65 L 17.27 3.11 L 16.41 4.78 L 13.78 5.57 L 15.74 6.32 L 16.64 8.59 L 18.34 8.97 L 17.83 9.11 L 18.30 8.06 L 15.63 5.60 L 13.20 4.73 L 13.51 7.68 L 13.80 10.03 L 11.96 11.63 L 11.34 12.97 L 12.92 10.56 L 15.28 8.88 L 14.80 11.81 L 16.57 10.83 L 16.52 13.61 L 18.37 12.84 L 18.36 15.14 L 15.81 18.06 L 15.57 19.04 L 14.27 21.75 L 16.59 21.69 L 18.00 20.70 L 19.11 19.65 L 21.43 21.99 L 23.00 19.16"
      }
    ]
  ]
};

export const GamaLace = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 19.17 3.24 L 17.57 5.65 L 17.27 3.11 L 16.41 4.78 L 13.78 5.57 L 15.74 6.32 L 16.64 8.59 L 18.34 8.97 L 17.83 9.11 L 18.30 8.06 L 15.63 5.60 L 13.20 4.73 L 13.51 7.68 L 13.80 10.03 L 11.96 11.63 L 11.34 12.97 L 12.92 10.56 L 15.28 8.88 L 14.80 11.81 L 16.57 10.83 L 16.52 13.61 L 18.37 12.84 L 18.36 15.14 L 15.81 18.06 L 15.57 19.04 L 14.27 21.75 L 16.59 21.69 L 18.00 20.70 L 19.11 19.65 L 21.43 21.99 L 23.00 19.16" />
      {children}
    </svg>
  );
});

export default GamaLace;
