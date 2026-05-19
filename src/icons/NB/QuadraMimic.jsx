import React from 'react';

export const iconData = {
  "id": "QuadraMimic",
  "name": "QuadraMimic",
  "category": "NB",
  "nodes": [
    [
      "path",
      {
        "d": "M 16.81 3.44 L 15.04 10.60 L 21.62 13.93 L 14.27 14.46 L 13.14 21.75 L 10.36 14.92 L 3.08 16.10 L 8.72 11.34 L 5.35 4.78 L 11.61 8.68 Z"
      }
    ]
  ]
};

export const QuadraMimic = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 16.81 3.44 L 15.04 10.60 L 21.62 13.93 L 14.27 14.46 L 13.14 21.75 L 10.36 14.92 L 3.08 16.10 L 8.72 11.34 L 5.35 4.78 L 11.61 8.68 Z" />
      {children}
    </svg>
  );
});

export default QuadraMimic;
