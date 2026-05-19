import React from 'react';

export const iconData = {
  "id": "JugoJade",
  "name": "JugoJade",
  "category": "PO",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.74 15.63 A 3.68 4.35 53 0 0 6.85 15.11"
      }
    ],
    [
      "path",
      {
        "d": "M 17.82 11.61 L 6.34 4.32"
      }
    ],
    [
      "path",
      {
        "d": "M 8.55 19.44 C 15.12 7.12, 3.11 14.47, 9.76 18.61"
      }
    ],
    [
      "path",
      {
        "d": "M 3.10 13.36 L 8.15 3.06"
      }
    ]
  ]
};

export const JugoJade = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.74 15.63 A 3.68 4.35 53 0 0 6.85 15.11" />
      <path d="M 17.82 11.61 L 6.34 4.32" />
      <path d="M 8.55 19.44 C 15.12 7.12, 3.11 14.47, 9.76 18.61" />
      <path d="M 3.10 13.36 L 8.15 3.06" />
      {children}
    </svg>
  );
});

export default JugoJade;
