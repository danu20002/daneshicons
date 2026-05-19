import React from 'react';

export const iconData = {
  "id": "VegliaGush",
  "name": "VegliaGush",
  "category": "XF",
  "nodes": [
    [
      "path",
      {
        "d": "M 16.91 3.49 L 21.82 12.00 L 16.91 20.50 L 7.09 20.51 L 2.18 12.00 L 7.09 3.50 Z"
      }
    ]
  ]
};

export const VegliaGush = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 16.91 3.49 L 21.82 12.00 L 16.91 20.50 L 7.09 20.51 L 2.18 12.00 L 7.09 3.50 Z" />
      {children}
    </svg>
  );
});

export default VegliaGush;
