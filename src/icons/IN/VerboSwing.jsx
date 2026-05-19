import React from 'react';

export const iconData = {
  "id": "VerboSwing",
  "name": "VerboSwing",
  "category": "IN",
  "nodes": [
    [
      "path",
      {
        "d": "M 11.46 20.86 L 4.60 7.10 L 19.94 8.04 Z"
      }
    ]
  ]
};

export const VerboSwing = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 11.46 20.86 L 4.60 7.10 L 19.94 8.04 Z" />
      {children}
    </svg>
  );
});

export default VerboSwing;
