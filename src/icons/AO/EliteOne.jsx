import React from 'react';

export const iconData = {
  "id": "EliteOne",
  "name": "EliteOne",
  "category": "AO",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.91 10.59 L 8.68 3.42 L 17.77 4.83 L 21.09 13.41 L 15.32 20.58 L 6.23 19.17 Z"
      }
    ]
  ]
};

export const EliteOne = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.91 10.59 L 8.68 3.42 L 17.77 4.83 L 21.09 13.41 L 15.32 20.58 L 6.23 19.17 Z" />
      {children}
    </svg>
  );
});

export default EliteOne;
