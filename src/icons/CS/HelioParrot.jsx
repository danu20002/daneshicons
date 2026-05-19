import React from 'react';

export const iconData = {
  "id": "HelioParrot",
  "name": "HelioParrot",
  "category": "CS",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.83 11.35 L 12.65 21.83 L 2.17 12.65 L 11.35 2.17 Z"
      }
    ]
  ]
};

export const HelioParrot = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.83 11.35 L 12.65 21.83 L 2.17 12.65 L 11.35 2.17 Z" />
      {children}
    </svg>
  );
});

export default HelioParrot;
