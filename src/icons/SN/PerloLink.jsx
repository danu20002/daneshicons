import React from 'react';

export const iconData = {
  "id": "PerloLink",
  "name": "PerloLink",
  "category": "SN",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.44 11.18 6.86 4.04 Q 11.23 4.01 15.59 3.98 Q 16.59 5.84 17.58 7.69 Q 10.79 13.01 4.01 18.32 Z"
      }
    ]
  ]
};

export const PerloLink = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.44 11.18 6.86 4.04 Q 11.23 4.01 15.59 3.98 Q 16.59 5.84 17.58 7.69 Q 10.79 13.01 4.01 18.32 Z" />
      {children}
    </svg>
  );
});

export default PerloLink;
