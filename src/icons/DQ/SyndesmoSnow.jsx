import React from 'react';

export const iconData = {
  "id": "SyndesmoSnow",
  "name": "SyndesmoSnow",
  "category": "DQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.76 12.00 a 2.24 2.24 0 1 0 4.48 0 a 2.24 2.24 0 1 0 -4.48 0",
        "stroke-dasharray": "3 3"
      }
    ],
    [
      "path",
      {
        "d": "M 5.91 12.00 a 6.09 6.09 0 1 0 12.18 0 a 6.09 6.09 0 1 0 -12.18 0"
      }
    ]
  ]
};

export const SyndesmoSnow = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.76 12.00 a 2.24 2.24 0 1 0 4.48 0 a 2.24 2.24 0 1 0 -4.48 0" stroke-dasharray="3 3" />
      <path d="M 5.91 12.00 a 6.09 6.09 0 1 0 12.18 0 a 6.09 6.09 0 1 0 -12.18 0" />
      {children}
    </svg>
  );
});

export default SyndesmoSnow;
