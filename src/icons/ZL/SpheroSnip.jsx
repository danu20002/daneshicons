import React from 'react';

export const iconData = {
  "id": "SpheroSnip",
  "name": "SpheroSnip",
  "category": "ZL",
  "nodes": [
    [
      "path",
      {
        "d": "M 12.77 2.33 L 14.07 9.58 L 21.44 9.74 L 14.94 13.22 L 17.07 20.28 L 11.75 15.17 L 5.69 19.38 L 8.90 12.74 L 3.04 8.28 L 10.34 9.29 Z"
      }
    ]
  ]
};

export const SpheroSnip = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 12.77 2.33 L 14.07 9.58 L 21.44 9.74 L 14.94 13.22 L 17.07 20.28 L 11.75 15.17 L 5.69 19.38 L 8.90 12.74 L 3.04 8.28 L 10.34 9.29 Z" />
      {children}
    </svg>
  );
});

export default SpheroSnip;
