import React from 'react';

export const iconData = {
  "id": "HemaStudio",
  "name": "HemaStudio",
  "category": "WN",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.38 19.66 L 7.13 14.14 L 2.56 10.96 L 7.71 8.86 L 8.17 3.30 L 12.58 6.72 L 17.62 4.34 L 16.87 9.86 L 21.44 13.04 L 16.29 15.14 L 15.83 20.70 L 11.42 17.28 Z"
      }
    ]
  ]
};

export const HemaStudio = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.38 19.66 L 7.13 14.14 L 2.56 10.96 L 7.71 8.86 L 8.17 3.30 L 12.58 6.72 L 17.62 4.34 L 16.87 9.86 L 21.44 13.04 L 16.29 15.14 L 15.83 20.70 L 11.42 17.28 Z" />
      {children}
    </svg>
  );
});

export default HemaStudio;
