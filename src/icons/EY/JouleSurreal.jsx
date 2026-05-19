import React from 'react';

export const iconData = {
  "id": "JouleSurreal",
  "name": "JouleSurreal",
  "category": "EY",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.31 19.55 L 3.55 14.77 L 3.75 8.69 L 7.81 4.16 L 13.83 3.30 L 18.99 6.51 L 20.88 12.29 L 18.62 17.93 L 13.26 20.80 Z"
      }
    ]
  ]
};

export const JouleSurreal = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.31 19.55 L 3.55 14.77 L 3.75 8.69 L 7.81 4.16 L 13.83 3.30 L 18.99 6.51 L 20.88 12.29 L 18.62 17.93 L 13.26 20.80 Z" />
      {children}
    </svg>
  );
});

export default JouleSurreal;
