import React from 'react';

export const iconData = {
  "id": "CentriDiet",
  "name": "CentriDiet",
  "category": "SB",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.44 6.59 L 17.41 5.44 L 18.56 17.41 L 6.59 18.56 Z"
      }
    ]
  ]
};

export const CentriDiet = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.44 6.59 L 17.41 5.44 L 18.56 17.41 L 6.59 18.56 Z" />
      {children}
    </svg>
  );
});

export default CentriDiet;
