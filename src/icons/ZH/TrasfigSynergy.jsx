import React from 'react';

export const iconData = {
  "id": "TrasfigSynergy",
  "name": "TrasfigSynergy",
  "category": "ZH",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.37 12.00 a 8.63 8.63 0 1 0 17.26 0 a 8.63 8.63 0 1 0 -17.26 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.02 12.00 a 5.98 5.98 0 1 1 11.95 0 a 5.98 5.98 0 1 1 -11.95 0"
      }
    ],
    [
      "path",
      {
        "d": "M 20.13 12.00 L 22.13 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 17.75 17.75 L 19.16 19.16"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 20.13 L 12.00 22.13"
      }
    ],
    [
      "path",
      {
        "d": "M 6.25 17.75 L 4.84 19.16"
      }
    ],
    [
      "path",
      {
        "d": "M 3.87 12.00 L 1.87 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 6.25 6.25 L 4.84 4.84"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.87 L 12.00 1.87"
      }
    ],
    [
      "path",
      {
        "d": "M 17.75 6.25 L 19.16 4.84"
      }
    ]
  ]
};

export const TrasfigSynergy = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.37 12.00 a 8.63 8.63 0 1 0 17.26 0 a 8.63 8.63 0 1 0 -17.26 0" />
      <path d="M 6.02 12.00 a 5.98 5.98 0 1 1 11.95 0 a 5.98 5.98 0 1 1 -11.95 0" />
      <path d="M 20.13 12.00 L 22.13 12.00" />
      <path d="M 17.75 17.75 L 19.16 19.16" />
      <path d="M 12.00 20.13 L 12.00 22.13" />
      <path d="M 6.25 17.75 L 4.84 19.16" />
      <path d="M 3.87 12.00 L 1.87 12.00" />
      <path d="M 6.25 6.25 L 4.84 4.84" />
      <path d="M 12.00 3.87 L 12.00 1.87" />
      <path d="M 17.75 6.25 L 19.16 4.84" />
      {children}
    </svg>
  );
});

export default TrasfigSynergy;
