import React from 'react';

export const iconData = {
  "id": "ZufoloPerfect",
  "name": "ZufoloPerfect",
  "category": "JY",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.95 12.00 a 8.05 8.05 0 1 0 16.10 0 a 8.05 8.05 0 1 0 -16.10 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.67 12.00 a 6.33 6.33 0 1 1 12.67 0 a 6.33 6.33 0 1 1 -12.67 0"
      }
    ],
    [
      "path",
      {
        "d": "M 19.55 12.00 L 21.55 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 18.54 15.77 L 20.27 16.77"
      }
    ],
    [
      "path",
      {
        "d": "M 15.77 18.54 L 16.77 20.27"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 19.55 L 12.00 21.55"
      }
    ],
    [
      "path",
      {
        "d": "M 8.23 18.54 L 7.23 20.27"
      }
    ],
    [
      "path",
      {
        "d": "M 5.46 15.77 L 3.73 16.77"
      }
    ],
    [
      "path",
      {
        "d": "M 4.45 12.00 L 2.45 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 5.46 8.23 L 3.73 7.23"
      }
    ],
    [
      "path",
      {
        "d": "M 8.23 5.46 L 7.23 3.73"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 4.45 L 12.00 2.45"
      }
    ],
    [
      "path",
      {
        "d": "M 15.77 5.46 L 16.77 3.73"
      }
    ],
    [
      "path",
      {
        "d": "M 18.54 8.23 L 20.27 7.23"
      }
    ]
  ]
};

export const ZufoloPerfect = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.95 12.00 a 8.05 8.05 0 1 0 16.10 0 a 8.05 8.05 0 1 0 -16.10 0" />
      <path d="M 5.67 12.00 a 6.33 6.33 0 1 1 12.67 0 a 6.33 6.33 0 1 1 -12.67 0" />
      <path d="M 19.55 12.00 L 21.55 12.00" />
      <path d="M 18.54 15.77 L 20.27 16.77" />
      <path d="M 15.77 18.54 L 16.77 20.27" />
      <path d="M 12.00 19.55 L 12.00 21.55" />
      <path d="M 8.23 18.54 L 7.23 20.27" />
      <path d="M 5.46 15.77 L 3.73 16.77" />
      <path d="M 4.45 12.00 L 2.45 12.00" />
      <path d="M 5.46 8.23 L 3.73 7.23" />
      <path d="M 8.23 5.46 L 7.23 3.73" />
      <path d="M 12.00 4.45 L 12.00 2.45" />
      <path d="M 15.77 5.46 L 16.77 3.73" />
      <path d="M 18.54 8.23 L 20.27 7.23" />
      {children}
    </svg>
  );
});

export default ZufoloPerfect;
