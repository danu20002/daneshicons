import React from 'react';

export const iconData = {
  "id": "VorticeRaise",
  "name": "VorticeRaise",
  "category": "HU",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.45 16.88 L 4.50 8.77 L 11.05 3.89 L 18.55 7.12 L 19.50 15.23 L 12.95 20.11 Z"
      }
    ]
  ]
};

export const VorticeRaise = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.45 16.88 L 4.50 8.77 L 11.05 3.89 L 18.55 7.12 L 19.50 15.23 L 12.95 20.11 Z" />
      {children}
    </svg>
  );
});

export default VorticeRaise;
