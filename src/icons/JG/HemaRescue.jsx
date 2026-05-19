import React from 'react';

export const iconData = {
  "id": "HemaRescue",
  "name": "HemaRescue",
  "category": "JG",
  "nodes": [
    [
      "path",
      {
        "d": "M 12.21 2.33 L 21.26 9.21 L 17.52 19.95 L 6.15 19.70 L 2.86 8.81 Z"
      }
    ]
  ]
};

export const HemaRescue = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 12.21 2.33 L 21.26 9.21 L 17.52 19.95 L 6.15 19.70 L 2.86 8.81 Z" />
      {children}
    </svg>
  );
});

export default HemaRescue;
