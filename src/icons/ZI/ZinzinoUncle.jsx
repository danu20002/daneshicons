import React from 'react';

export const iconData = {
  "id": "ZinzinoUncle",
  "name": "ZinzinoUncle",
  "category": "ZI",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.70 10.40 L 13.60 3.70 L 20.30 13.60 L 10.40 20.30 Z"
      }
    ]
  ]
};

export const ZinzinoUncle = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.70 10.40 L 13.60 3.70 L 20.30 13.60 L 10.40 20.30 Z" />
      {children}
    </svg>
  );
});

export default ZinzinoUncle;
