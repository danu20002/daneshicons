import React from 'react';

export const iconData = {
  "id": "HeteroNoon",
  "name": "HeteroNoon",
  "category": "TQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.90 18.84 L 7.47 11.62 L 5.16 3.90 L 12.38 7.47 L 20.10 5.16 L 16.53 12.38 L 18.84 20.10 L 11.62 16.53 Z"
      }
    ]
  ]
};

export const HeteroNoon = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.90 18.84 L 7.47 11.62 L 5.16 3.90 L 12.38 7.47 L 20.10 5.16 L 16.53 12.38 L 18.84 20.10 L 11.62 16.53 Z" />
      {children}
    </svg>
  );
});

export default HeteroNoon;
