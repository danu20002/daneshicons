import React from 'react';

export const iconData = {
  "id": "ViceThorn",
  "name": "ViceThorn",
  "category": "CE",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.72 12.00 a 2.28 2.28 0 1 0 4.56 0 a 2.28 2.28 0 1 0 -4.56 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.78 12.00 a 6.22 6.22 0 1 0 12.43 0 a 6.22 6.22 0 1 0 -12.43 0"
      }
    ]
  ]
};

export const ViceThorn = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.72 12.00 a 2.28 2.28 0 1 0 4.56 0 a 2.28 2.28 0 1 0 -4.56 0" />
      <path d="M 5.78 12.00 a 6.22 6.22 0 1 0 12.43 0 a 6.22 6.22 0 1 0 -12.43 0" />
      {children}
    </svg>
  );
});

export default ViceThorn;
