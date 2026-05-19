import React from 'react';

export const iconData = {
  "id": "TattooGuide",
  "name": "TattooGuide",
  "category": "FO",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.84 12.00 a 7.16 7.16 0 1 0 14.32 0 a 7.16 7.16 0 1 0 -14.32 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.85 12.00 a 5.15 5.15 0 1 1 10.29 0 a 5.15 5.15 0 1 1 -10.29 0"
      }
    ],
    [
      "path",
      {
        "d": "M 18.66 12.00 L 20.66 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 15.33 17.77 L 16.33 19.50"
      }
    ],
    [
      "path",
      {
        "d": "M 8.67 17.77 L 7.67 19.50"
      }
    ],
    [
      "path",
      {
        "d": "M 5.34 12.00 L 3.34 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 8.67 6.23 L 7.67 4.50"
      }
    ],
    [
      "path",
      {
        "d": "M 15.33 6.23 L 16.33 4.50"
      }
    ]
  ]
};

export const TattooGuide = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.84 12.00 a 7.16 7.16 0 1 0 14.32 0 a 7.16 7.16 0 1 0 -14.32 0" />
      <path d="M 6.85 12.00 a 5.15 5.15 0 1 1 10.29 0 a 5.15 5.15 0 1 1 -10.29 0" />
      <path d="M 18.66 12.00 L 20.66 12.00" />
      <path d="M 15.33 17.77 L 16.33 19.50" />
      <path d="M 8.67 17.77 L 7.67 19.50" />
      <path d="M 5.34 12.00 L 3.34 12.00" />
      <path d="M 8.67 6.23 L 7.67 4.50" />
      <path d="M 15.33 6.23 L 16.33 4.50" />
      {children}
    </svg>
  );
});

export default TattooGuide;
