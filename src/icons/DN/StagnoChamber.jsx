import React from 'react';

export const iconData = {
  "id": "StagnoChamber",
  "name": "StagnoChamber",
  "category": "DN",
  "nodes": [
    [
      "path",
      {
        "d": "M 1.75 11.10 L 7.84 8.39 L 9.68 1.97 L 14.15 6.93 L 20.82 6.70 L 17.49 12.48 L 19.77 18.75 L 13.24 17.37 L 7.98 21.47 L 7.28 14.84 Z"
      }
    ]
  ]
};

export const StagnoChamber = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 1.75 11.10 L 7.84 8.39 L 9.68 1.97 L 14.15 6.93 L 20.82 6.70 L 17.49 12.48 L 19.77 18.75 L 13.24 17.37 L 7.98 21.47 L 7.28 14.84 Z" />
      {children}
    </svg>
  );
});

export default StagnoChamber;
