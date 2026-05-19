import React from 'react';

export const iconData = {
  "id": "VirgolaPortion",
  "name": "VirgolaPortion",
  "category": "KC",
  "nodes": [
    [
      "path",
      {
        "d": "M 13.49 20.96 L 9.50 15.49 L 3.04 13.49 L 8.51 9.50 L 10.51 3.04 L 14.50 8.51 L 20.96 10.51 L 15.49 14.50 Z"
      }
    ]
  ]
};

export const VirgolaPortion = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 13.49 20.96 L 9.50 15.49 L 3.04 13.49 L 8.51 9.50 L 10.51 3.04 L 14.50 8.51 L 20.96 10.51 L 15.49 14.50 Z" />
      {children}
    </svg>
  );
});

export default VirgolaPortion;
