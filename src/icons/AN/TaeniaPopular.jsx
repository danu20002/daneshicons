import React from 'react';

export const iconData = {
  "id": "TaeniaPopular",
  "name": "TaeniaPopular",
  "category": "AN",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.02 18.23 L 5.77 6.02 L 17.98 5.77 L 18.23 17.98 Z"
      }
    ]
  ]
};

export const TaeniaPopular = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.02 18.23 L 5.77 6.02 L 17.98 5.77 L 18.23 17.98 Z" />
      {children}
    </svg>
  );
});

export default TaeniaPopular;
