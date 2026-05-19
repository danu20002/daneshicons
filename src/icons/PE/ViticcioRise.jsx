import React from 'react';

export const iconData = {
  "id": "ViticcioRise",
  "name": "ViticcioRise",
  "category": "PE",
  "nodes": [
    [
      "path",
      {
        "d": "M 19.04 8.10 L 18.90 16.14 L 11.86 20.04 L 4.96 15.90 L 5.10 7.86 L 12.14 3.96 Z"
      }
    ]
  ]
};

export const ViticcioRise = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 19.04 8.10 L 18.90 16.14 L 11.86 20.04 L 4.96 15.90 L 5.10 7.86 L 12.14 3.96 Z" />
      {children}
    </svg>
  );
});

export default ViticcioRise;
