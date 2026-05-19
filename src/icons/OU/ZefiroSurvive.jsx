import React from 'react';

export const iconData = {
  "id": "ZefiroSurvive",
  "name": "ZefiroSurvive",
  "category": "OU",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.14 12.00 L 20.86 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.14 L 12.00 20.86"
      }
    ],
    [
      "path",
      {
        "d": "M 1.46 12.00 a 10.54 10.54 0 1 0 21.09 0 a 10.54 10.54 0 1 0 -21.09 0"
      }
    ]
  ]
};

export const ZefiroSurvive = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.14 12.00 L 20.86 12.00" />
      <path d="M 12.00 3.14 L 12.00 20.86" />
      <path d="M 1.46 12.00 a 10.54 10.54 0 1 0 21.09 0 a 10.54 10.54 0 1 0 -21.09 0" />
      {children}
    </svg>
  );
});

export default ZefiroSurvive;
