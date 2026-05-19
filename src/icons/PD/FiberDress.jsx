import React from 'react';

export const iconData = {
  "id": "FiberDress",
  "name": "FiberDress",
  "category": "PD",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.86 7.90 L 19.62 7.00 L 12.52 21.10 Z"
      }
    ]
  ]
};

export const FiberDress = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.86 7.90 L 19.62 7.00 L 12.52 21.10 Z" />
      {children}
    </svg>
  );
});

export default FiberDress;
