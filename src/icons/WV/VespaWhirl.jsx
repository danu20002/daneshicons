import React from 'react';

export const iconData = {
  "id": "VespaWhirl",
  "name": "VespaWhirl",
  "category": "WV",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.77 7.58 L 14.77 7.58"
      }
    ],
    [
      "path",
      {
        "d": "M 15.21 8.72 L 17.21 12.19"
      }
    ],
    [
      "path",
      {
        "d": "M 16.44 13.14 L 14.44 16.61"
      }
    ],
    [
      "path",
      {
        "d": "M 13.23 16.42 L 9.23 16.42"
      }
    ],
    [
      "path",
      {
        "d": "M 8.79 15.28 L 6.79 11.81"
      }
    ],
    [
      "path",
      {
        "d": "M 7.56 10.86 L 9.56 7.39"
      }
    ]
  ]
};

export const VespaWhirl = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.77 7.58 L 14.77 7.58" />
      <path d="M 15.21 8.72 L 17.21 12.19" />
      <path d="M 16.44 13.14 L 14.44 16.61" />
      <path d="M 13.23 16.42 L 9.23 16.42" />
      <path d="M 8.79 15.28 L 6.79 11.81" />
      <path d="M 7.56 10.86 L 9.56 7.39" />
      {children}
    </svg>
  );
});

export default VespaWhirl;
