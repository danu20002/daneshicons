import React from 'react';

export const iconData = {
  "id": "UmbelMonster",
  "name": "UmbelMonster",
  "category": "MG",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.01 12.98 L 16.86 19.66 L 9.04 20.57 L 3.46 15.03 L 4.30 7.21 L 10.95 2.99 L 18.38 5.56 Z"
      }
    ]
  ]
};

export const UmbelMonster = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.01 12.98 L 16.86 19.66 L 9.04 20.57 L 3.46 15.03 L 4.30 7.21 L 10.95 2.99 L 18.38 5.56 Z" />
      {children}
    </svg>
  );
});

export default UmbelMonster;
