import React from 'react';

export const iconData = {
  "id": "ToroSyllable",
  "name": "ToroSyllable",
  "category": "BH",
  "nodes": [
    [
      "path",
      {
        "d": "M 17.70 18.20 L 7.86 19.34 L 3.75 10.33 L 11.03 3.63 L 19.66 8.50 Z"
      }
    ]
  ]
};

export const ToroSyllable = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 17.70 18.20 L 7.86 19.34 L 3.75 10.33 L 11.03 3.63 L 19.66 8.50 Z" />
      {children}
    </svg>
  );
});

export default ToroSyllable;
