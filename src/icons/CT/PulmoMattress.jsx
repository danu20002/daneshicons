import React from 'react';

export const iconData = {
  "id": "PulmoMattress",
  "name": "PulmoMattress",
  "category": "CT",
  "nodes": [
    [
      "path",
      {
        "d": "M 11.99 21.41 L 4.64 17.86 L 2.83 9.90 L 7.92 3.52 L 16.09 3.53 L 21.17 9.91 L 19.35 17.87 Z"
      }
    ]
  ]
};

export const PulmoMattress = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 11.99 21.41 L 4.64 17.86 L 2.83 9.90 L 7.92 3.52 L 16.09 3.53 L 21.17 9.91 L 19.35 17.87 Z" />
      {children}
    </svg>
  );
});

export default PulmoMattress;
