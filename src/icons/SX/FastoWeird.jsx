import React from 'react';

export const iconData = {
  "id": "FastoWeird",
  "name": "FastoWeird",
  "category": "SX",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.78 19.23 L 7.54 13.56 L 2.63 10.23 L 8.41 8.92 L 8.85 3.00 L 12.88 7.35 L 18.22 4.77 L 16.46 10.44 L 21.37 13.77 L 15.59 15.08 L 15.15 21.00 L 11.12 16.65 Z"
      }
    ]
  ]
};

export const FastoWeird = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.78 19.23 L 7.54 13.56 L 2.63 10.23 L 8.41 8.92 L 8.85 3.00 L 12.88 7.35 L 18.22 4.77 L 16.46 10.44 L 21.37 13.77 L 15.59 15.08 L 15.15 21.00 L 11.12 16.65 Z" />
      {children}
    </svg>
  );
});

export default FastoWeird;
