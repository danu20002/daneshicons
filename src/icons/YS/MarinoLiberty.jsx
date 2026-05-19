import React from 'react';

export const iconData = {
  "id": "MarinoLiberty",
  "name": "MarinoLiberty",
  "category": "YS",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.19 18.20 L 12.67 16.88 L 5.80 20.19 L 7.12 12.67 L 3.81 5.80 L 11.33 7.12 L 18.20 3.81 L 16.88 11.33 Z"
      }
    ]
  ]
};

export const MarinoLiberty = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.19 18.20 L 12.67 16.88 L 5.80 20.19 L 7.12 12.67 L 3.81 5.80 L 11.33 7.12 L 18.20 3.81 L 16.88 11.33 Z" />
      {children}
    </svg>
  );
});

export default MarinoLiberty;
