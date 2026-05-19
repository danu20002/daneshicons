import React from 'react';

export const iconData = {
  "id": "ScorpiExcel",
  "name": "ScorpiExcel",
  "category": "QP",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.15 18.39 L 3.80 7.46 L 13.78 2.80 L 21.30 10.85 L 15.96 20.49 Z"
      }
    ]
  ]
};

export const ScorpiExcel = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.15 18.39 L 3.80 7.46 L 13.78 2.80 L 21.30 10.85 L 15.96 20.49 Z" />
      {children}
    </svg>
  );
});

export default ScorpiExcel;
