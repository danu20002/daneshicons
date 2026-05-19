import React from 'react';

export const iconData = {
  "id": "TorreLava",
  "name": "TorreLava",
  "category": "KR",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.54 12.00 a 8.46 8.46 0 1 0 16.92 0 a 8.46 8.46 0 1 0 -16.92 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.29 12.00 a 5.71 5.71 0 1 1 11.43 0 a 5.71 5.71 0 1 1 -11.43 0"
      }
    ],
    [
      "path",
      {
        "d": "M 19.96 12.00 L 21.96 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 18.89 15.98 L 20.62 16.98"
      }
    ],
    [
      "path",
      {
        "d": "M 15.98 18.89 L 16.98 20.62"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 19.96 L 12.00 21.96"
      }
    ],
    [
      "path",
      {
        "d": "M 8.02 18.89 L 7.02 20.62"
      }
    ],
    [
      "path",
      {
        "d": "M 5.11 15.98 L 3.38 16.98"
      }
    ],
    [
      "path",
      {
        "d": "M 4.04 12.00 L 2.04 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 5.11 8.02 L 3.38 7.02"
      }
    ],
    [
      "path",
      {
        "d": "M 8.02 5.11 L 7.02 3.38"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 4.04 L 12.00 2.04"
      }
    ],
    [
      "path",
      {
        "d": "M 15.98 5.11 L 16.98 3.38"
      }
    ],
    [
      "path",
      {
        "d": "M 18.89 8.02 L 20.62 7.02"
      }
    ]
  ]
};

export const TorreLava = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.54 12.00 a 8.46 8.46 0 1 0 16.92 0 a 8.46 8.46 0 1 0 -16.92 0" />
      <path d="M 6.29 12.00 a 5.71 5.71 0 1 1 11.43 0 a 5.71 5.71 0 1 1 -11.43 0" />
      <path d="M 19.96 12.00 L 21.96 12.00" />
      <path d="M 18.89 15.98 L 20.62 16.98" />
      <path d="M 15.98 18.89 L 16.98 20.62" />
      <path d="M 12.00 19.96 L 12.00 21.96" />
      <path d="M 8.02 18.89 L 7.02 20.62" />
      <path d="M 5.11 15.98 L 3.38 16.98" />
      <path d="M 4.04 12.00 L 2.04 12.00" />
      <path d="M 5.11 8.02 L 3.38 7.02" />
      <path d="M 8.02 5.11 L 7.02 3.38" />
      <path d="M 12.00 4.04 L 12.00 2.04" />
      <path d="M 15.98 5.11 L 16.98 3.38" />
      <path d="M 18.89 8.02 L 20.62 7.02" />
      {children}
    </svg>
  );
});

export default TorreLava;
