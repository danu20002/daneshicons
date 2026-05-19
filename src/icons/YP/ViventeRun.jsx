import React from 'react';

export const iconData = {
  "id": "ViventeRun",
  "name": "ViventeRun",
  "category": "YP",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.59 18.26 L 3.37 9.58 L 9.78 3.31 L 18.41 5.74 L 20.63 14.42 L 14.22 20.69 Z"
      }
    ]
  ]
};

export const ViventeRun = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.59 18.26 L 3.37 9.58 L 9.78 3.31 L 18.41 5.74 L 20.63 14.42 L 14.22 20.69 Z" />
      {children}
    </svg>
  );
});

export default ViventeRun;
