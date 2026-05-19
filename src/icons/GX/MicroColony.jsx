import React from 'react';

export const iconData = {
  "id": "MicroColony",
  "name": "MicroColony",
  "category": "GX",
  "nodes": [
    [
      "path",
      {
        "d": "M 12.37 20.95 L 14.44 21.21 L 15.39 22.68 L 15.53 20.50 L 15.77 20.41 L 18.14 20.77 L 20.42 21.47 L 18.69 22.36 L 21.58 23.00 L 23.00 21.71 L 23.00 21.54 L 23.00 23.00 L 22.87 23.00 L 23.00 23.00 L 21.08 23.00 L 22.91 22.41 L 23.00 23.00 L 22.21 23.00 L 22.51 21.19 L 23.00 22.92 L 21.15 23.00 L 19.71 23.00"
      }
    ]
  ]
};

export const MicroColony = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 12.37 20.95 L 14.44 21.21 L 15.39 22.68 L 15.53 20.50 L 15.77 20.41 L 18.14 20.77 L 20.42 21.47 L 18.69 22.36 L 21.58 23.00 L 23.00 21.71 L 23.00 21.54 L 23.00 23.00 L 22.87 23.00 L 23.00 23.00 L 21.08 23.00 L 22.91 22.41 L 23.00 23.00 L 22.21 23.00 L 22.51 21.19 L 23.00 22.92 L 21.15 23.00 L 19.71 23.00" />
      {children}
    </svg>
  );
});

export default MicroColony;
