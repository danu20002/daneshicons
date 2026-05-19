import React from 'react';

export const iconData = {
  "id": "StructoFact",
  "name": "StructoFact",
  "category": "RL",
  "nodes": [
    [
      "path",
      {
        "d": "M 11.26 21.77 L 8.71 16.81 L 3.16 16.24 L 6.19 11.56 L 3.91 6.47 L 9.48 6.74 L 12.74 2.23 L 15.29 7.19 L 20.84 7.76 L 17.81 12.44 L 20.09 17.53 L 14.52 17.26 Z"
      }
    ]
  ]
};

export const StructoFact = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 11.26 21.77 L 8.71 16.81 L 3.16 16.24 L 6.19 11.56 L 3.91 6.47 L 9.48 6.74 L 12.74 2.23 L 15.29 7.19 L 20.84 7.76 L 17.81 12.44 L 20.09 17.53 L 14.52 17.26 Z" />
      {children}
    </svg>
  );
});

export default StructoFact;
