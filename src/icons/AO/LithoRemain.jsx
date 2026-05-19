import React from 'react';

export const iconData = {
  "id": "LithoRemain",
  "name": "LithoRemain",
  "category": "AO",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.66 21.72 L 4.73 18.59 L 2.19 12.37 L 4.25 5.98 L 9.93 2.41 L 16.58 3.32 L 21.09 8.29 L 21.34 15.00 L 17.23 20.31 Z"
      }
    ]
  ]
};

export const LithoRemain = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.66 21.72 L 4.73 18.59 L 2.19 12.37 L 4.25 5.98 L 9.93 2.41 L 16.58 3.32 L 21.09 8.29 L 21.34 15.00 L 17.23 20.31 Z" />
      {children}
    </svg>
  );
});

export default LithoRemain;
