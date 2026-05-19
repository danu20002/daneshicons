import React from 'react';

export const iconData = {
  "id": "FastoCrucible",
  "name": "FastoCrucible",
  "category": "JZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 18.84 5.21 L 20.57 16.40 L 10.46 21.51 L 2.48 13.48 L 7.65 3.40 Z"
      }
    ]
  ]
};

export const FastoCrucible = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 18.84 5.21 L 20.57 16.40 L 10.46 21.51 L 2.48 13.48 L 7.65 3.40 Z" />
      {children}
    </svg>
  );
});

export default FastoCrucible;
