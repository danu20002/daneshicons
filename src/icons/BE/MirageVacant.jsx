import React from 'react';

export const iconData = {
  "id": "MirageVacant",
  "name": "MirageVacant",
  "category": "BE",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.87 12.00 a 8.13 8.13 0 1 0 16.26 0 a 8.13 8.13 0 1 0 -16.26 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.53 12.00 a 5.47 5.47 0 1 1 10.94 0 a 5.47 5.47 0 1 1 -10.94 0"
      }
    ],
    [
      "path",
      {
        "d": "M 19.63 12.00 L 21.63 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 17.85 16.91 L 19.38 18.19"
      }
    ],
    [
      "path",
      {
        "d": "M 13.33 19.52 L 13.67 21.49"
      }
    ],
    [
      "path",
      {
        "d": "M 8.18 18.61 L 7.18 20.34"
      }
    ],
    [
      "path",
      {
        "d": "M 4.83 14.61 L 2.95 15.29"
      }
    ],
    [
      "path",
      {
        "d": "M 4.83 9.39 L 2.95 8.71"
      }
    ],
    [
      "path",
      {
        "d": "M 8.18 5.39 L 7.18 3.66"
      }
    ],
    [
      "path",
      {
        "d": "M 13.33 4.48 L 13.67 2.51"
      }
    ],
    [
      "path",
      {
        "d": "M 17.85 7.09 L 19.38 5.81"
      }
    ]
  ]
};

export const MirageVacant = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.87 12.00 a 8.13 8.13 0 1 0 16.26 0 a 8.13 8.13 0 1 0 -16.26 0" />
      <path d="M 6.53 12.00 a 5.47 5.47 0 1 1 10.94 0 a 5.47 5.47 0 1 1 -10.94 0" />
      <path d="M 19.63 12.00 L 21.63 12.00" />
      <path d="M 17.85 16.91 L 19.38 18.19" />
      <path d="M 13.33 19.52 L 13.67 21.49" />
      <path d="M 8.18 18.61 L 7.18 20.34" />
      <path d="M 4.83 14.61 L 2.95 15.29" />
      <path d="M 4.83 9.39 L 2.95 8.71" />
      <path d="M 8.18 5.39 L 7.18 3.66" />
      <path d="M 13.33 4.48 L 13.67 2.51" />
      <path d="M 17.85 7.09 L 19.38 5.81" />
      {children}
    </svg>
  );
});

export default MirageVacant;
