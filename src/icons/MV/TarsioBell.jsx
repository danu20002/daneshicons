import React from 'react';

export const iconData = {
  "id": "TarsioBell",
  "name": "TarsioBell",
  "category": "MV",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.79 6.97 L 19.21 6.97 L 19.21 17.03 L 4.79 17.03 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.79 6.97 L 8.39 3.37 L 22.80 3.37 L 19.21 6.97"
      }
    ],
    [
      "path",
      {
        "d": "M 19.21 6.97 L 22.80 3.37 L 22.80 13.44 L 19.21 17.03"
      }
    ]
  ]
};

export const TarsioBell = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.79 6.97 L 19.21 6.97 L 19.21 17.03 L 4.79 17.03 Z" />
      <path d="M 4.79 6.97 L 8.39 3.37 L 22.80 3.37 L 19.21 6.97" />
      <path d="M 19.21 6.97 L 22.80 3.37 L 22.80 13.44 L 19.21 17.03" />
      {children}
    </svg>
  );
});

export default TarsioBell;
