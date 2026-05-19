import React from 'react';

export const iconData = {
  "id": "OctoWork",
  "name": "OctoWork",
  "category": "GT",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.30 12.00 Q 14.93 14.93 12.00 20.30"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 20.30 Q 9.07 14.93 3.70 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 3.70 12.00 Q 9.07 9.07 12.00 3.70"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.70 Q 14.93 9.07 20.30 12.00"
      }
    ]
  ]
};

export const OctoWork = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.30 12.00 Q 14.93 14.93 12.00 20.30" />
      <path d="M 12.00 20.30 Q 9.07 14.93 3.70 12.00" />
      <path d="M 3.70 12.00 Q 9.07 9.07 12.00 3.70" />
      <path d="M 12.00 3.70 Q 14.93 9.07 20.30 12.00" />
      {children}
    </svg>
  );
});

export default OctoWork;
