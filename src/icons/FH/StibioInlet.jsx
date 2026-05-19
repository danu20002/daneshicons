import React from 'react';

export const iconData = {
  "id": "StibioInlet",
  "name": "StibioInlet",
  "category": "FH",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.15 12.00 Q 16.17 13.73 18.47 18.47"
      }
    ],
    [
      "path",
      {
        "d": "M 18.47 18.47 Q 13.73 16.17 12.00 21.15"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 21.15 Q 10.27 16.17 5.53 18.47"
      }
    ],
    [
      "path",
      {
        "d": "M 5.53 18.47 Q 7.83 13.73 2.85 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 2.85 12.00 Q 7.83 10.27 5.53 5.53"
      }
    ],
    [
      "path",
      {
        "d": "M 5.53 5.53 Q 10.27 7.83 12.00 2.85"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.85 Q 13.73 7.83 18.47 5.53"
      }
    ],
    [
      "path",
      {
        "d": "M 18.47 5.53 Q 16.17 10.27 21.15 12.00"
      }
    ]
  ]
};

export const StibioInlet = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.15 12.00 Q 16.17 13.73 18.47 18.47" />
      <path d="M 18.47 18.47 Q 13.73 16.17 12.00 21.15" />
      <path d="M 12.00 21.15 Q 10.27 16.17 5.53 18.47" />
      <path d="M 5.53 18.47 Q 7.83 13.73 2.85 12.00" />
      <path d="M 2.85 12.00 Q 7.83 10.27 5.53 5.53" />
      <path d="M 5.53 5.53 Q 10.27 7.83 12.00 2.85" />
      <path d="M 12.00 2.85 Q 13.73 7.83 18.47 5.53" />
      <path d="M 18.47 5.53 Q 16.17 10.27 21.15 12.00" />
      {children}
    </svg>
  );
});

export default StibioInlet;
