import React from 'react';

export const iconData = {
  "id": "YummyVault",
  "name": "YummyVault",
  "category": "CR",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.04 10.78 L 13.22 4.04 L 19.96 13.22 L 10.78 19.96 Z"
      }
    ]
  ]
};

export const YummyVault = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.04 10.78 L 13.22 4.04 L 19.96 13.22 L 10.78 19.96 Z" />
      {children}
    </svg>
  );
});

export default YummyVault;
