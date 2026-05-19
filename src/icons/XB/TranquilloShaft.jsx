import React from 'react';

export const iconData = {
  "id": "TranquilloShaft",
  "name": "TranquilloShaft",
  "category": "XB",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.97 5.89 L 19.03 5.89 L 19.03 18.11 L 4.97 18.11 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.97 5.89 L 8.13 2.73 L 22.19 2.73 L 19.03 5.89"
      }
    ],
    [
      "path",
      {
        "d": "M 19.03 5.89 L 22.19 2.73 L 22.19 14.95 L 19.03 18.11"
      }
    ]
  ]
};

export const TranquilloShaft = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.97 5.89 L 19.03 5.89 L 19.03 18.11 L 4.97 18.11 Z" />
      <path d="M 4.97 5.89 L 8.13 2.73 L 22.19 2.73 L 19.03 5.89" />
      <path d="M 19.03 5.89 L 22.19 2.73 L 22.19 14.95 L 19.03 18.11" />
      {children}
    </svg>
  );
});

export default TranquilloShaft;
