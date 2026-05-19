import React from 'react';

export const iconData = {
  "id": "UretereDesert",
  "name": "UretereDesert",
  "category": "SP",
  "nodes": [
    [
      "path",
      {
        "d": "M 13.06 17.33 L 14.16 15.50 L 11.32 13.46 L 10.82 15.26 L 11.52 16.82 L 12.29 16.89 L 14.03 19.70 L 12.15 19.40 L 10.10 18.59 L 12.42 18.65 L 11.35 18.30 L 11.75 20.85 L 9.38 20.21 L 10.83 18.12 L 8.18 15.47 L 9.52 14.00 L 10.39 12.99"
      }
    ],
    [
      "path",
      {
        "d": "M 17.74 5.80 L 19.27 5.56 L 19.58 4.54 L 17.52 6.07 L 15.75 4.72 L 14.88 2.58 L 12.29 1.40 L 10.69 1.00 L 12.91 1.00 L 14.82 1.29 L 12.73 1.00 L 12.81 1.38 L 14.84 1.00 L 16.26 1.00 L 18.60 1.28 L 16.56 1.00 L 18.15 2.85 L 16.54 1.00 L 16.83 1.50 L 14.47 1.68 L 14.98 1.00 L 17.61 2.74"
      }
    ]
  ]
};

export const UretereDesert = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 13.06 17.33 L 14.16 15.50 L 11.32 13.46 L 10.82 15.26 L 11.52 16.82 L 12.29 16.89 L 14.03 19.70 L 12.15 19.40 L 10.10 18.59 L 12.42 18.65 L 11.35 18.30 L 11.75 20.85 L 9.38 20.21 L 10.83 18.12 L 8.18 15.47 L 9.52 14.00 L 10.39 12.99" />
      <path d="M 17.74 5.80 L 19.27 5.56 L 19.58 4.54 L 17.52 6.07 L 15.75 4.72 L 14.88 2.58 L 12.29 1.40 L 10.69 1.00 L 12.91 1.00 L 14.82 1.29 L 12.73 1.00 L 12.81 1.38 L 14.84 1.00 L 16.26 1.00 L 18.60 1.28 L 16.56 1.00 L 18.15 2.85 L 16.54 1.00 L 16.83 1.50 L 14.47 1.68 L 14.98 1.00 L 17.61 2.74" />
      {children}
    </svg>
  );
});

export default UretereDesert;
