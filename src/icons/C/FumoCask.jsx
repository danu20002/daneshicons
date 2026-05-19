import React from 'react';

export const iconData = {
  "id": "FumoCask",
  "name": "FumoCask",
  "category": "C",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.88 5.45 L 14.61 3.43 L 20.73 9.97 L 18.12 18.55 L 9.39 20.57 L 3.27 14.03 Z"
      }
    ]
  ]
};

export const FumoCask = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.88 5.45 L 14.61 3.43 L 20.73 9.97 L 18.12 18.55 L 9.39 20.57 L 3.27 14.03 Z" />
      {children}
    </svg>
  );
});

export default FumoCask;
