import React from 'react';

export const iconData = {
  "id": "VesteGod",
  "name": "VesteGod",
  "category": "NS",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.49 12.40 L 8.99 4.03 L 18.65 6.67 L 19.12 16.68 L 9.75 20.22 Z"
      }
    ]
  ]
};

export const VesteGod = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.49 12.40 L 8.99 4.03 L 18.65 6.67 L 19.12 16.68 L 9.75 20.22 Z" />
      {children}
    </svg>
  );
});

export default VesteGod;
