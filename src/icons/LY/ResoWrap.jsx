import React from 'react';

export const iconData = {
  "id": "ResoWrap",
  "name": "ResoWrap",
  "category": "LY",
  "nodes": [
    [
      "path",
      {
        "d": "M 12.00 3.51 L 18.41 12.00 L 12.00 20.49 L 5.59 12.00 Z"
      }
    ]
  ]
};

export const ResoWrap = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 12.00 3.51 L 18.41 12.00 L 12.00 20.49 L 5.59 12.00 Z" />
      {children}
    </svg>
  );
});

export default ResoWrap;
