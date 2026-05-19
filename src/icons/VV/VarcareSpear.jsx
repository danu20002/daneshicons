import React from 'react';

export const iconData = {
  "id": "VarcareSpear",
  "name": "VarcareSpear",
  "category": "VV",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.60 7.67 L 11.45 6.06 L 20.45 6.03 L 17.42 14.50 L 12.95 22.31 L 7.13 15.44 Z"
      }
    ]
  ]
};

export const VarcareSpear = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.60 7.67 L 11.45 6.06 L 20.45 6.03 L 17.42 14.50 L 12.95 22.31 L 7.13 15.44 Z" />
      {children}
    </svg>
  );
});

export default VarcareSpear;
