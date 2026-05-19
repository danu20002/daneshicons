import React from 'react';

export const iconData = {
  "id": "HemaMop",
  "name": "HemaMop",
  "category": "U",
  "nodes": [
    [
      "path",
      {
        "d": "M 17.29 18.70 L 8.84 19.93 L 3.55 13.23 L 6.71 5.30 L 15.16 4.07 L 20.45 10.77 Z"
      }
    ]
  ]
};

export const HemaMop = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 17.29 18.70 L 8.84 19.93 L 3.55 13.23 L 6.71 5.30 L 15.16 4.07 L 20.45 10.77 Z" />
      {children}
    </svg>
  );
});

export default HemaMop;
