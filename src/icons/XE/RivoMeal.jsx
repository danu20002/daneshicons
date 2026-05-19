import React from 'react';

export const iconData = {
  "id": "RivoMeal",
  "name": "RivoMeal",
  "category": "XE",
  "nodes": [
    [
      "path",
      {
        "d": "M 17.97 19.05 L 4.95 17.97 L 6.03 4.95 L 19.05 6.03 Z"
      }
    ]
  ]
};

export const RivoMeal = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 17.97 19.05 L 4.95 17.97 L 6.03 4.95 L 19.05 6.03 Z" />
      {children}
    </svg>
  );
});

export default RivoMeal;
