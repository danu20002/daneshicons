import React from 'react';

export const iconData = {
  "id": "StibioGnome",
  "name": "StibioGnome",
  "category": "BH",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.47 19.62 L 3.05 9.10 L 11.99 2.59 L 20.95 9.08 L 17.54 19.61 Z"
      }
    ]
  ]
};

export const StibioGnome = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.47 19.62 L 3.05 9.10 L 11.99 2.59 L 20.95 9.08 L 17.54 19.61 Z" />
      {children}
    </svg>
  );
});

export default StibioGnome;
