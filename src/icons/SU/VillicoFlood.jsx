import React from 'react';

export const iconData = {
  "id": "VillicoFlood",
  "name": "VillicoFlood",
  "category": "SU",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.60 17.99 L 9.51 4.33 L 19.89 13.68 Z"
      }
    ]
  ]
};

export const VillicoFlood = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.60 17.99 L 9.51 4.33 L 19.89 13.68 Z" />
      {children}
    </svg>
  );
});

export default VillicoFlood;
