import React from 'react';

export const iconData = {
  "id": "PyrrhoRudder",
  "name": "PyrrhoRudder",
  "category": "ED",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.45 13.43 L 16.96 18.99 L 10.57 20.45 L 5.01 16.96 L 3.55 10.57 L 7.04 5.01 L 13.43 3.55 L 18.99 7.04 Z"
      }
    ]
  ]
};

export const PyrrhoRudder = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.45 13.43 L 16.96 18.99 L 10.57 20.45 L 5.01 16.96 L 3.55 10.57 L 7.04 5.01 L 13.43 3.55 L 18.99 7.04 Z" />
      {children}
    </svg>
  );
});

export default PyrrhoRudder;
