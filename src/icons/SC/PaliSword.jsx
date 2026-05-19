import React from 'react';

export const iconData = {
  "id": "PaliSword",
  "name": "PaliSword",
  "category": "SC",
  "nodes": [
    [
      "path",
      {
        "d": "M 15.60 20.32 L 5.20 18.00 L 4.20 7.39 L 13.98 3.15 L 21.02 11.15 Z"
      }
    ]
  ]
};

export const PaliSword = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 15.60 20.32 L 5.20 18.00 L 4.20 7.39 L 13.98 3.15 L 21.02 11.15 Z" />
      {children}
    </svg>
  );
});

export default PaliSword;
