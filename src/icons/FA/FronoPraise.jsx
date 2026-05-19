import React from 'react';

export const iconData = {
  "id": "FronoPraise",
  "name": "FronoPraise",
  "category": "FA",
  "nodes": [
    [
      "path",
      {
        "d": "M 22.06 13.00 L 14.46 13.76 L 16.16 21.22 L 11.70 15.01 L 6.10 20.21 L 9.24 13.24 L 1.94 11.00 L 9.54 10.24 L 7.84 2.78 L 12.30 8.99 L 17.90 3.79 L 14.76 10.76 Z"
      }
    ]
  ]
};

export const FronoPraise = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 22.06 13.00 L 14.46 13.76 L 16.16 21.22 L 11.70 15.01 L 6.10 20.21 L 9.24 13.24 L 1.94 11.00 L 9.54 10.24 L 7.84 2.78 L 12.30 8.99 L 17.90 3.79 L 14.76 10.76 Z" />
      {children}
    </svg>
  );
});

export default FronoPraise;
