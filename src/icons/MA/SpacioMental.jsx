import React from 'react';

export const iconData = {
  "id": "SpacioMental",
  "name": "SpacioMental",
  "category": "MA",
  "nodes": [
    [
      "path",
      {
        "d": "M 17.25 4.12 L 19.35 4.75 L 19.84 4.77 L 17.03 4.48 L 19.28 7.33 L 19.15 9.87 L 16.22 10.16 L 18.93 8.51 L 21.21 6.85 L 23.00 6.52 L 23.00 8.81 L 23.00 8.43 L 23.00 9.55 L 23.00 7.74 L 23.00 6.74 L 23.00 8.09 L 23.00 6.66 L 22.57 4.60 L 20.36 7.31 L 18.13 5.51"
      }
    ],
    [
      "path",
      {
        "d": "M 13.16 13.10 L 12.68 13.76 L 10.86 14.85 L 12.08 12.43 L 12.08 12.33 L 12.04 12.73 L 13.15 15.63 L 15.37 16.62 L 13.16 19.57 L 12.18 21.03 L 15.04 23.00 L 14.25 21.49 L 15.02 20.61 L 13.78 22.69 L 14.37 22.68 L 11.81 22.55 L 14.72 23.00 L 13.42 21.93 L 13.64 19.77 L 14.85 21.33 L 16.81 21.46 L 14.80 22.77 L 15.08 23.00 L 12.58 21.06 L 14.01 18.08 L 13.08 20.43"
      }
    ]
  ]
};

export const SpacioMental = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 17.25 4.12 L 19.35 4.75 L 19.84 4.77 L 17.03 4.48 L 19.28 7.33 L 19.15 9.87 L 16.22 10.16 L 18.93 8.51 L 21.21 6.85 L 23.00 6.52 L 23.00 8.81 L 23.00 8.43 L 23.00 9.55 L 23.00 7.74 L 23.00 6.74 L 23.00 8.09 L 23.00 6.66 L 22.57 4.60 L 20.36 7.31 L 18.13 5.51" />
      <path d="M 13.16 13.10 L 12.68 13.76 L 10.86 14.85 L 12.08 12.43 L 12.08 12.33 L 12.04 12.73 L 13.15 15.63 L 15.37 16.62 L 13.16 19.57 L 12.18 21.03 L 15.04 23.00 L 14.25 21.49 L 15.02 20.61 L 13.78 22.69 L 14.37 22.68 L 11.81 22.55 L 14.72 23.00 L 13.42 21.93 L 13.64 19.77 L 14.85 21.33 L 16.81 21.46 L 14.80 22.77 L 15.08 23.00 L 12.58 21.06 L 14.01 18.08 L 13.08 20.43" />
      {children}
    </svg>
  );
});

export default SpacioMental;
