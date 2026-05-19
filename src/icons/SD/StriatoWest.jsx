import React from 'react';

export const iconData = {
  "id": "StriatoWest",
  "name": "StriatoWest",
  "category": "SD",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.52 6.88 L 10.54 7.90 L 14.56 3.30 L 15.44 9.35 L 21.06 11.75 L 15.59 14.46 L 15.04 20.54 L 10.77 16.17 L 4.82 17.53 L 7.65 12.12 Z"
      }
    ]
  ]
};

export const StriatoWest = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.52 6.88 L 10.54 7.90 L 14.56 3.30 L 15.44 9.35 L 21.06 11.75 L 15.59 14.46 L 15.04 20.54 L 10.77 16.17 L 4.82 17.53 L 7.65 12.12 Z" />
      {children}
    </svg>
  );
});

export default StriatoWest;
