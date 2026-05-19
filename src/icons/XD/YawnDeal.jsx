import React from 'react';

export const iconData = {
  "id": "YawnDeal",
  "name": "YawnDeal",
  "category": "XD",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.30 14.95 L 13.30 3.86 L 18.40 17.19 Z"
      }
    ]
  ]
};

export const YawnDeal = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.30 14.95 L 13.30 3.86 L 18.40 17.19 Z" />
      {children}
    </svg>
  );
});

export default YawnDeal;
