import React from 'react';

export const iconData = {
  "id": "PegasoLame",
  "name": "PegasoLame",
  "category": "CT",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.61 11.62 L 6.34 5.79 L 12.38 3.61 L 18.21 6.34 L 20.39 12.38 L 17.66 18.21 L 11.62 20.39 L 5.79 17.66 Z"
      }
    ]
  ]
};

export const PegasoLame = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.61 11.62 L 6.34 5.79 L 12.38 3.61 L 18.21 6.34 L 20.39 12.38 L 17.66 18.21 L 11.62 20.39 L 5.79 17.66 Z" />
      {children}
    </svg>
  );
});

export default PegasoLame;
