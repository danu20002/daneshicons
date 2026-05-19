import React from 'react';

export const iconData = {
  "id": "VenustoStir",
  "name": "VenustoStir",
  "category": "CF",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.35 7.81 C 8.42 8.75, 19.66 5.73, 16.27 19.67"
      }
    ],
    [
      "path",
      {
        "d": "M 5.07 2.38 C 8.97 9.44, 11.63 4.95, 19.46 14.50"
      }
    ],
    [
      "path",
      {
        "d": "M 5.24 4.07 C 14.60 10.91, 8.36 7.33, 16.96 16.55"
      }
    ],
    [
      "path",
      {
        "d": "M 9.97 5.55 C 10.60 6.74, 17.60 17.98, 21.36 15.85"
      }
    ],
    [
      "path",
      {
        "d": "M 3.38 8.23 C 15.91 16.39, 16.81 5.33, 20.65 16.66"
      }
    ]
  ]
};

export const VenustoStir = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.35 7.81 C 8.42 8.75, 19.66 5.73, 16.27 19.67" />
      <path d="M 5.07 2.38 C 8.97 9.44, 11.63 4.95, 19.46 14.50" />
      <path d="M 5.24 4.07 C 14.60 10.91, 8.36 7.33, 16.96 16.55" />
      <path d="M 9.97 5.55 C 10.60 6.74, 17.60 17.98, 21.36 15.85" />
      <path d="M 3.38 8.23 C 15.91 16.39, 16.81 5.33, 20.65 16.66" />
      {children}
    </svg>
  );
});

export default VenustoStir;
