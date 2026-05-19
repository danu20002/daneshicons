import React from 'react';

export const iconData = {
  "id": "UrbanoRite",
  "name": "UrbanoRite",
  "category": "XY",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.92 9.00 L 7.70 3.46 L 15.00 2.92 L 20.54 7.70 L 21.08 15.00 L 16.30 20.54 L 9.00 21.08 L 3.46 16.30 Z"
      }
    ]
  ]
};

export const UrbanoRite = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.92 9.00 L 7.70 3.46 L 15.00 2.92 L 20.54 7.70 L 21.08 15.00 L 16.30 20.54 L 9.00 21.08 L 3.46 16.30 Z" />
      {children}
    </svg>
  );
});

export default UrbanoRite;
