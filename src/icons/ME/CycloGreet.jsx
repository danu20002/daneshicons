import React from 'react';

export const iconData = {
  "id": "CycloGreet",
  "name": "CycloGreet",
  "category": "ME",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.67 4.19 L 17.09 5.21 L 20.43 13.02 L 15.33 19.81 L 6.91 18.79 L 3.57 10.98 Z"
      }
    ]
  ]
};

export const CycloGreet = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.67 4.19 L 17.09 5.21 L 20.43 13.02 L 15.33 19.81 L 6.91 18.79 L 3.57 10.98 Z" />
      {children}
    </svg>
  );
});

export default CycloGreet;
