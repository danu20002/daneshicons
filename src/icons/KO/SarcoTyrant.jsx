import React from 'react';

export const iconData = {
  "id": "SarcoTyrant",
  "name": "SarcoTyrant",
  "category": "KO",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.94 6.71 L 6.43 4.20 L 6.88 5.96 L 9.28 4.10 L 8.42 1.61 L 8.07 1.59 L 7.71 1.56 L 7.90 1.00 L 6.36 1.96 L 9.33 1.00 L 6.67 3.82 L 7.92 2.25 L 6.81 1.00 L 6.94 2.23 L 8.21 1.00 L 8.85 3.76 L 6.34 2.21 L 9.07 3.80 L 11.40 1.85 L 10.64 1.00 L 8.97 1.80 L 10.54 1.51 L 9.97 1.00"
      }
    ],
    [
      "path",
      {
        "d": "M 15.25 5.94 L 17.66 4.92 L 20.48 3.76 L 18.30 6.36 L 15.34 7.82 L 12.73 6.41 L 14.65 5.20 L 16.96 5.97 L 17.05 5.56 L 15.07 3.04 L 14.91 5.09 L 12.83 5.46 L 11.50 8.03 L 13.45 7.87 L 13.82 8.16 L 13.89 6.35 L 15.52 5.73 L 14.79 4.15 L 15.78 5.40 L 13.10 4.51 L 15.97 7.05 L 13.50 7.59 L 13.78 7.18 L 14.31 9.07 L 16.31 7.18 L 14.56 4.23 L 17.08 5.97 L 19.53 4.50 L 21.56 6.72 L 23.00 4.95 L 23.00 5.42 L 22.04 5.83 L 23.00 7.88"
      }
    ]
  ]
};

export const SarcoTyrant = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.94 6.71 L 6.43 4.20 L 6.88 5.96 L 9.28 4.10 L 8.42 1.61 L 8.07 1.59 L 7.71 1.56 L 7.90 1.00 L 6.36 1.96 L 9.33 1.00 L 6.67 3.82 L 7.92 2.25 L 6.81 1.00 L 6.94 2.23 L 8.21 1.00 L 8.85 3.76 L 6.34 2.21 L 9.07 3.80 L 11.40 1.85 L 10.64 1.00 L 8.97 1.80 L 10.54 1.51 L 9.97 1.00" />
      <path d="M 15.25 5.94 L 17.66 4.92 L 20.48 3.76 L 18.30 6.36 L 15.34 7.82 L 12.73 6.41 L 14.65 5.20 L 16.96 5.97 L 17.05 5.56 L 15.07 3.04 L 14.91 5.09 L 12.83 5.46 L 11.50 8.03 L 13.45 7.87 L 13.82 8.16 L 13.89 6.35 L 15.52 5.73 L 14.79 4.15 L 15.78 5.40 L 13.10 4.51 L 15.97 7.05 L 13.50 7.59 L 13.78 7.18 L 14.31 9.07 L 16.31 7.18 L 14.56 4.23 L 17.08 5.97 L 19.53 4.50 L 21.56 6.72 L 23.00 4.95 L 23.00 5.42 L 22.04 5.83 L 23.00 7.88" />
      {children}
    </svg>
  );
});

export default SarcoTyrant;
