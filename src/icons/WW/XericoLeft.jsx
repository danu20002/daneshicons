import React from 'react';

export const iconData = {
  "id": "XericoLeft",
  "name": "XericoLeft",
  "category": "WW",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.52 12.62 L 14.70 7.73"
      }
    ],
    [
      "path",
      {
        "d": "M 14.67 20.02 L 16.64 13.93"
      }
    ],
    [
      "path",
      {
        "d": "M 8.98 9.79 Q 19.12 3.39 19.86 11.76"
      }
    ],
    [
      "path",
      {
        "d": "M 9.77 10.75 A 3.73 5.25 96 0 0 10.81 10.61"
      }
    ],
    [
      "path",
      {
        "d": "M 13.76 11.74 L 18.52 5.83 L 12.47 20.90 L 3.50 9.40 L 16.64 8.53"
      }
    ]
  ]
};

export const XericoLeft = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.52 12.62 L 14.70 7.73" />
      <path d="M 14.67 20.02 L 16.64 13.93" />
      <path d="M 8.98 9.79 Q 19.12 3.39 19.86 11.76" />
      <path d="M 9.77 10.75 A 3.73 5.25 96 0 0 10.81 10.61" />
      <path d="M 13.76 11.74 L 18.52 5.83 L 12.47 20.90 L 3.50 9.40 L 16.64 8.53" />
      {children}
    </svg>
  );
});

export default XericoLeft;
