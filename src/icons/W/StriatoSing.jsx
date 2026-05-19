import React from 'react';

export const iconData = {
  "id": "StriatoSing",
  "name": "StriatoSing",
  "category": "W",
  "nodes": [
    [
      "path",
      {
        "d": "M 11.63 21.93 L 9.64 15.01 L 2.44 14.72 L 8.41 10.68 L 6.46 3.75 L 12.14 8.18 L 18.14 4.18 L 15.68 10.95 L 21.33 15.42 L 14.13 15.18 Z"
      }
    ]
  ]
};

export const StriatoSing = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 11.63 21.93 L 9.64 15.01 L 2.44 14.72 L 8.41 10.68 L 6.46 3.75 L 12.14 8.18 L 18.14 4.18 L 15.68 10.95 L 21.33 15.42 L 14.13 15.18 Z" />
      {children}
    </svg>
  );
});

export default StriatoSing;
