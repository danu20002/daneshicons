import React from 'react';

export const iconData = {
  "id": "PulsoLustre",
  "name": "PulsoLustre",
  "category": "MG",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.75 5.94 L 11.87 3.29 L 18.06 5.75 L 20.71 11.87 L 18.25 18.06 L 12.13 20.71 L 5.94 18.25 L 3.29 12.13 Z"
      }
    ]
  ]
};

export const PulsoLustre = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.75 5.94 L 11.87 3.29 L 18.06 5.75 L 20.71 11.87 L 18.25 18.06 L 12.13 20.71 L 5.94 18.25 L 3.29 12.13 Z" />
      {children}
    </svg>
  );
});

export default PulsoLustre;
