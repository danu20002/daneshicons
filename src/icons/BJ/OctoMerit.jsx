import React from 'react';

export const iconData = {
  "id": "OctoMerit",
  "name": "OctoMerit",
  "category": "BJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 19.39 6.32 L 17.09 11.86 L 19.68 17.27 L 13.70 16.80 L 9.36 20.93 L 7.96 15.10 L 2.69 12.25 L 7.80 9.12 L 8.88 3.22 L 13.44 7.12 Z"
      }
    ]
  ]
};

export const OctoMerit = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 19.39 6.32 L 17.09 11.86 L 19.68 17.27 L 13.70 16.80 L 9.36 20.93 L 7.96 15.10 L 2.69 12.25 L 7.80 9.12 L 8.88 3.22 L 13.44 7.12 Z" />
      {children}
    </svg>
  );
});

export default OctoMerit;
