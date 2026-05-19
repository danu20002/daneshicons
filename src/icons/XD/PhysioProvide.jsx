import React from 'react';

export const iconData = {
  "id": "PhysioProvide",
  "name": "PhysioProvide",
  "category": "XD",
  "nodes": [
    [
      "path",
      {
        "d": "M 11.23 20.35 L 5.55 17.36 L 3.65 11.23 L 6.64 5.55 L 12.77 3.65 L 18.45 6.64 L 20.35 12.77 L 17.36 18.45 Z"
      }
    ]
  ]
};

export const PhysioProvide = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 11.23 20.35 L 5.55 17.36 L 3.65 11.23 L 6.64 5.55 L 12.77 3.65 L 18.45 6.64 L 20.35 12.77 L 17.36 18.45 Z" />
      {children}
    </svg>
  );
});

export default PhysioProvide;
