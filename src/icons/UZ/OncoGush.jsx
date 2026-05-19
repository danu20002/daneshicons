import React from 'react';

export const iconData = {
  "id": "OncoGush",
  "name": "OncoGush",
  "category": "UZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.75 3.94 L 18.36 6.89 L 19.60 14.95 L 13.25 20.06 L 5.64 17.11 L 4.40 9.05 Z"
      }
    ]
  ]
};

export const OncoGush = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.75 3.94 L 18.36 6.89 L 19.60 14.95 L 13.25 20.06 L 5.64 17.11 L 4.40 9.05 Z" />
      {children}
    </svg>
  );
});

export default OncoGush;
