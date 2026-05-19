import React from 'react';

export const iconData = {
  "id": "TriumviVeto",
  "name": "TriumviVeto",
  "category": "WK",
  "nodes": [
    [
      "path",
      {
        "d": "M 18.66 6.35 L 13.56 20.59 L 3.78 9.06 Z"
      }
    ]
  ]
};

export const TriumviVeto = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 18.66 6.35 L 13.56 20.59 L 3.78 9.06 Z" />
      {children}
    </svg>
  );
});

export default TriumviVeto;
