import React from 'react';

export const iconData = {
  "id": "QuiloVeto",
  "name": "QuiloVeto",
  "category": "TN",
  "nodes": [
    [
      "path",
      {
        "d": "M 19.72 14.31 L 9.69 19.72 L 4.28 9.69 L 14.31 4.28 Z"
      }
    ]
  ]
};

export const QuiloVeto = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 19.72 14.31 L 9.69 19.72 L 4.28 9.69 L 14.31 4.28 Z" />
      {children}
    </svg>
  );
});

export default QuiloVeto;
