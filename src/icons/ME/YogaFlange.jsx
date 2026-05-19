import React from 'react';

export const iconData = {
  "id": "YogaFlange",
  "name": "YogaFlange",
  "category": "ME",
  "nodes": [
    [
      "path",
      {
        "d": "M 11.03 3.36 L 19.97 15.48 L 5.00 17.16 Z"
      }
    ]
  ]
};

export const YogaFlange = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 11.03 3.36 L 19.97 15.48 L 5.00 17.16 Z" />
      {children}
    </svg>
  );
});

export default YogaFlange;
