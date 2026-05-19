import React from 'react';

export const iconData = {
  "id": "OlympoFabric",
  "name": "OlympoFabric",
  "category": "PE",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.18 11.88 L 5.32 6.24 L 10.59 3.29 L 16.51 4.42 L 20.33 9.10 L 20.25 15.13 L 16.30 19.70 L 10.35 20.66 L 5.17 17.58 Z"
      }
    ]
  ]
};

export const OlympoFabric = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.18 11.88 L 5.32 6.24 L 10.59 3.29 L 16.51 4.42 L 20.33 9.10 L 20.25 15.13 L 16.30 19.70 L 10.35 20.66 L 5.17 17.58 Z" />
      {children}
    </svg>
  );
});

export default OlympoFabric;
