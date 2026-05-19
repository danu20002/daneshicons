import React from 'react';

export const iconData = {
  "id": "GigaSpeak",
  "name": "GigaSpeak",
  "category": "CJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.48 12.00 L 20.52 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.48 L 12.00 20.52"
      }
    ],
    [
      "path",
      {
        "d": "M 6.03 6.03 L 17.97 17.97"
      }
    ],
    [
      "path",
      {
        "d": "M 6.03 17.97 L 17.97 6.03"
      }
    ],
    [
      "path",
      {
        "d": "M 1.07 12.00 a 10.93 10.93 0 1 0 21.87 0 a 10.93 10.93 0 1 0 -21.87 0"
      }
    ]
  ]
};

export const GigaSpeak = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.48 12.00 L 20.52 12.00" />
      <path d="M 12.00 3.48 L 12.00 20.52" />
      <path d="M 6.03 6.03 L 17.97 17.97" />
      <path d="M 6.03 17.97 L 17.97 6.03" />
      <path d="M 1.07 12.00 a 10.93 10.93 0 1 0 21.87 0 a 10.93 10.93 0 1 0 -21.87 0" />
      {children}
    </svg>
  );
});

export default GigaSpeak;
