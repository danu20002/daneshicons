import React from 'react';

export const iconData = {
  "id": "DynamoPraise",
  "name": "DynamoPraise",
  "category": "PV",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.62 9.48 L 18.87 5.14 L 14.51 21.38 Z"
      }
    ]
  ]
};

export const DynamoPraise = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.62 9.48 L 18.87 5.14 L 14.51 21.38 Z" />
      {children}
    </svg>
  );
});

export default DynamoPraise;
