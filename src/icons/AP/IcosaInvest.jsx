import React from 'react';

export const iconData = {
  "id": "IcosaInvest",
  "name": "IcosaInvest",
  "category": "AP",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.14 13.85 L 9.26 10.13 L 10.15 2.14 L 13.87 9.26 L 21.86 10.15 L 14.74 13.87 L 13.85 21.86 L 10.13 14.74 Z"
      }
    ]
  ]
};

export const IcosaInvest = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.14 13.85 L 9.26 10.13 L 10.15 2.14 L 13.87 9.26 L 21.86 10.15 L 14.74 13.87 L 13.85 21.86 L 10.13 14.74 Z" />
      {children}
    </svg>
  );
});

export default IcosaInvest;
