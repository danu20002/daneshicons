import React from 'react';

export const iconData = {
  "id": "ViceSyndrome",
  "name": "ViceSyndrome",
  "category": "DL",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.64 15.09 L 3.90 8.27 L 8.91 3.64 L 15.73 3.90 L 20.36 8.91 L 20.10 15.73 L 15.09 20.36 L 8.27 20.10 Z"
      }
    ]
  ]
};

export const ViceSyndrome = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.64 15.09 L 3.90 8.27 L 8.91 3.64 L 15.73 3.90 L 20.36 8.91 L 20.10 15.73 L 15.09 20.36 L 8.27 20.10 Z" />
      {children}
    </svg>
  );
});

export default ViceSyndrome;
