import React from 'react';

export const iconData = {
  "id": "TomboInvest",
  "name": "TomboInvest",
  "category": "OJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 19.43 8.82 L 17.32 18.08 L 7.86 18.94 L 4.12 10.20 L 11.28 3.95 Z"
      }
    ]
  ]
};

export const TomboInvest = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 19.43 8.82 L 17.32 18.08 L 7.86 18.94 L 4.12 10.20 L 11.28 3.95 Z" />
      {children}
    </svg>
  );
});

export default TomboInvest;
