import React from 'react';

export const iconData = {
  "id": "ZoccoloTeeth",
  "name": "ZoccoloTeeth",
  "category": "BI",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.11 9.96 L 16.58 14.91 L 14.04 21.11 L 9.09 16.58 L 2.89 14.04 L 7.42 9.09 L 9.96 2.89 L 14.91 7.42 Z"
      }
    ]
  ]
};

export const ZoccoloTeeth = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.11 9.96 L 16.58 14.91 L 14.04 21.11 L 9.09 16.58 L 2.89 14.04 L 7.42 9.09 L 9.96 2.89 L 14.91 7.42 Z" />
      {children}
    </svg>
  );
});

export default ZoccoloTeeth;
