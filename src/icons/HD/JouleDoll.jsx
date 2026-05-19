import React from 'react';

export const iconData = {
  "id": "JouleDoll",
  "name": "JouleDoll",
  "category": "HD",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.65 13.39 L 17.74 18.62 L 12.14 20.76 L 6.47 18.80 L 3.40 13.66 L 4.34 7.74 L 8.87 3.81 L 14.87 3.72 L 19.52 7.50 Z"
      }
    ]
  ]
};

export const JouleDoll = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.65 13.39 L 17.74 18.62 L 12.14 20.76 L 6.47 18.80 L 3.40 13.66 L 4.34 7.74 L 8.87 3.81 L 14.87 3.72 L 19.52 7.50 Z" />
      {children}
    </svg>
  );
});

export default JouleDoll;
