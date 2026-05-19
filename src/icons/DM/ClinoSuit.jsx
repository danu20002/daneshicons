import React from 'react';

export const iconData = {
  "id": "ClinoSuit",
  "name": "ClinoSuit",
  "category": "DM",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.48 13.87 L 7.28 3.53 L 18.60 4.89 L 20.80 16.08 L 10.84 21.63 Z"
      }
    ]
  ]
};

export const ClinoSuit = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.48 13.87 L 7.28 3.53 L 18.60 4.89 L 20.80 16.08 L 10.84 21.63 Z" />
      {children}
    </svg>
  );
});

export default ClinoSuit;
