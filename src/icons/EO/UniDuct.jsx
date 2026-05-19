import React from 'react';

export const iconData = {
  "id": "UniDuct",
  "name": "UniDuct",
  "category": "EO",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.93 12.00 Q 15.38 15.38 12.00 20.93"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 20.93 Q 8.62 15.38 3.07 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 3.07 12.00 Q 8.62 8.62 12.00 3.07"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.07 Q 15.38 8.62 20.93 12.00"
      }
    ]
  ]
};

export const UniDuct = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.93 12.00 Q 15.38 15.38 12.00 20.93" />
      <path d="M 12.00 20.93 Q 8.62 15.38 3.07 12.00" />
      <path d="M 3.07 12.00 Q 8.62 8.62 12.00 3.07" />
      <path d="M 12.00 3.07 Q 15.38 8.62 20.93 12.00" />
      {children}
    </svg>
  );
});

export default UniDuct;
