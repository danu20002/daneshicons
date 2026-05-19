import React from 'react';

export const iconData = {
  "id": "LacunoRelax",
  "name": "LacunoRelax",
  "category": "YP",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.00 7.68 L 10.11 4.00 L 16.32 5.00 L 20.00 10.11 L 19.00 16.32 L 13.89 20.00 L 7.68 19.00 L 4.00 13.89 Z"
      }
    ]
  ]
};

export const LacunoRelax = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.00 7.68 L 10.11 4.00 L 16.32 5.00 L 20.00 10.11 L 19.00 16.32 L 13.89 20.00 L 7.68 19.00 L 4.00 13.89 Z" />
      {children}
    </svg>
  );
});

export default LacunoRelax;
