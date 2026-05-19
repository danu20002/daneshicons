import React from 'react';

export const iconData = {
  "id": "SummoSequence",
  "name": "SummoSequence",
  "category": "JC",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.54 3.87 L 8.53 5.65 L 9.68 6.89 L 7.76 9.44 L 8.26 11.33 L 10.14 11.75 L 7.23 14.02 L 4.77 15.07 L 1.91 17.07 L 3.98 17.52 L 2.60 15.41 L 4.95 12.61 L 6.63 11.55 L 8.45 11.96 L 6.98 9.22 L 9.50 6.29 L 10.65 3.88 L 10.39 3.85 L 13.10 4.20 L 10.35 1.46 L 13.33 4.15 L 12.73 4.73 L 12.66 4.35 L 12.80 7.33 L 13.79 4.83"
      }
    ],
    [
      "path",
      {
        "d": "M 8.49 15.87 L 8.52 16.82 L 11.10 14.69 L 10.72 16.18 L 9.10 13.29 L 7.19 15.88 L 9.45 14.07 L 6.73 16.07 L 5.66 18.84 L 8.62 19.75 L 10.60 17.12 L 12.48 18.75 L 11.77 19.62 L 9.43 18.01 L 11.11 20.84 L 11.61 23.00 L 14.02 20.44 L 14.38 17.84 L 15.88 20.30 L 18.24 19.00 L 20.98 19.36 L 20.32 18.13 L 22.71 19.07 L 23.00 21.19 L 20.34 21.74"
      }
    ]
  ]
};

export const SummoSequence = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.54 3.87 L 8.53 5.65 L 9.68 6.89 L 7.76 9.44 L 8.26 11.33 L 10.14 11.75 L 7.23 14.02 L 4.77 15.07 L 1.91 17.07 L 3.98 17.52 L 2.60 15.41 L 4.95 12.61 L 6.63 11.55 L 8.45 11.96 L 6.98 9.22 L 9.50 6.29 L 10.65 3.88 L 10.39 3.85 L 13.10 4.20 L 10.35 1.46 L 13.33 4.15 L 12.73 4.73 L 12.66 4.35 L 12.80 7.33 L 13.79 4.83" />
      <path d="M 8.49 15.87 L 8.52 16.82 L 11.10 14.69 L 10.72 16.18 L 9.10 13.29 L 7.19 15.88 L 9.45 14.07 L 6.73 16.07 L 5.66 18.84 L 8.62 19.75 L 10.60 17.12 L 12.48 18.75 L 11.77 19.62 L 9.43 18.01 L 11.11 20.84 L 11.61 23.00 L 14.02 20.44 L 14.38 17.84 L 15.88 20.30 L 18.24 19.00 L 20.98 19.36 L 20.32 18.13 L 22.71 19.07 L 23.00 21.19 L 20.34 21.74" />
      {children}
    </svg>
  );
});

export default SummoSequence;
