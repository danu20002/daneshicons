import React from 'react';

export const iconData = {
  "id": "JugoUnknown",
  "name": "JugoUnknown",
  "category": "DD",
  "nodes": [
    [
      "path",
      {
        "d": "M 11.20 16.84 A 4.76 2.38 158 0 1 6.65 9.29"
      }
    ],
    [
      "path",
      {
        "d": "M 5.82 19.72 Q 4.84 6.07 20.06 19.78"
      }
    ]
  ]
};

export const JugoUnknown = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 11.20 16.84 A 4.76 2.38 158 0 1 6.65 9.29" />
      <path d="M 5.82 19.72 Q 4.84 6.07 20.06 19.78" />
      {children}
    </svg>
  );
});

export default JugoUnknown;
