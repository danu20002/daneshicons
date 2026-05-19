import React from 'react';

export const iconData = {
  "id": "PeriZoo",
  "name": "PeriZoo",
  "category": "VA",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.93 18.26 L 3.99 12.84 L 5.74 6.93 L 11.16 3.99 L 17.07 5.74 L 20.01 11.16 L 18.26 17.07 L 12.84 20.01 Z"
      }
    ]
  ]
};

export const PeriZoo = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.93 18.26 L 3.99 12.84 L 5.74 6.93 L 11.16 3.99 L 17.07 5.74 L 20.01 11.16 L 18.26 17.07 L 12.84 20.01 Z" />
      {children}
    </svg>
  );
});

export default PeriZoo;
