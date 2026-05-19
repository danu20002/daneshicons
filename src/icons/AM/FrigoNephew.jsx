import React from 'react';

export const iconData = {
  "id": "FrigoNephew",
  "name": "FrigoNephew",
  "category": "AM",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.94 14.35 L 5.94 6.20 L 14.00 3.85 L 20.06 9.65 L 18.06 17.80 L 10.00 20.15 Z"
      }
    ]
  ]
};

export const FrigoNephew = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.94 14.35 L 5.94 6.20 L 14.00 3.85 L 20.06 9.65 L 18.06 17.80 L 10.00 20.15 Z" />
      {children}
    </svg>
  );
});

export default FrigoNephew;
