import React from 'react';

export const iconData = {
  "id": "ZinzinoSolar",
  "name": "ZinzinoSolar",
  "category": "GI",
  "nodes": [
    [
      "path",
      {
        "d": "M 17.65 20.05 L 6.09 19.86 L 2.70 8.80 L 12.17 2.17 L 21.40 9.12 Z"
      }
    ]
  ]
};

export const ZinzinoSolar = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 17.65 20.05 L 6.09 19.86 L 2.70 8.80 L 12.17 2.17 L 21.40 9.12 Z" />
      {children}
    </svg>
  );
});

export default ZinzinoSolar;
