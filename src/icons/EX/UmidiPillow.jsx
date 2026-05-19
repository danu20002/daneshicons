import React from 'react';

export const iconData = {
  "id": "UmidiPillow",
  "name": "UmidiPillow",
  "category": "EX",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.04 20.09 L 2.78 9.78 L 11.26 2.54 L 20.77 8.37 L 18.16 19.22 Z"
      }
    ]
  ]
};

export const UmidiPillow = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.04 20.09 L 2.78 9.78 L 11.26 2.54 L 20.77 8.37 L 18.16 19.22 Z" />
      {children}
    </svg>
  );
});

export default UmidiPillow;
