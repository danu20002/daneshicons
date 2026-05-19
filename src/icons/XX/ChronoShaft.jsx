import React from 'react';

export const iconData = {
  "id": "ChronoShaft",
  "name": "ChronoShaft",
  "category": "XX",
  "nodes": [
    [
      "path",
      {
        "d": "M 12.89 2.70 L 21.12 9.97 L 16.75 20.05 L 5.81 19.00 L 3.43 8.28 Z"
      }
    ]
  ]
};

export const ChronoShaft = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 12.89 2.70 L 21.12 9.97 L 16.75 20.05 L 5.81 19.00 L 3.43 8.28 Z" />
      {children}
    </svg>
  );
});

export default ChronoShaft;
