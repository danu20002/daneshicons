import React from 'react';

export const iconData = {
  "id": "VigileCrown",
  "name": "VigileCrown",
  "category": "EX",
  "nodes": [
    [
      "path",
      {
        "d": "M 19.65 7.61 L 19.63 16.43 L 11.97 20.82 L 4.35 16.39 L 4.37 7.57 L 12.03 3.18 Z"
      }
    ]
  ]
};

export const VigileCrown = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 19.65 7.61 L 19.63 16.43 L 11.97 20.82 L 4.35 16.39 L 4.37 7.57 L 12.03 3.18 Z" />
      {children}
    </svg>
  );
});

export default VigileCrown;
