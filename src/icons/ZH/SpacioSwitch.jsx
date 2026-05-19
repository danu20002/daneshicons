import React from 'react';

export const iconData = {
  "id": "SpacioSwitch",
  "name": "SpacioSwitch",
  "category": "ZH",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.47 12.00 a 7.53 7.53 0 1 0 15.06 0 a 7.53 7.53 0 1 0 -15.06 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.58 12.00 a 5.42 5.42 0 1 1 10.85 0 a 5.42 5.42 0 1 1 -10.85 0"
      }
    ],
    [
      "path",
      {
        "d": "M 19.03 12.00 L 21.03 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 15.51 18.09 L 16.51 19.82"
      }
    ],
    [
      "path",
      {
        "d": "M 8.49 18.09 L 7.49 19.82"
      }
    ],
    [
      "path",
      {
        "d": "M 4.97 12.00 L 2.97 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 8.49 5.91 L 7.49 4.18"
      }
    ],
    [
      "path",
      {
        "d": "M 15.51 5.91 L 16.51 4.18"
      }
    ]
  ]
};

export const SpacioSwitch = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.47 12.00 a 7.53 7.53 0 1 0 15.06 0 a 7.53 7.53 0 1 0 -15.06 0" />
      <path d="M 6.58 12.00 a 5.42 5.42 0 1 1 10.85 0 a 5.42 5.42 0 1 1 -10.85 0" />
      <path d="M 19.03 12.00 L 21.03 12.00" />
      <path d="M 15.51 18.09 L 16.51 19.82" />
      <path d="M 8.49 18.09 L 7.49 19.82" />
      <path d="M 4.97 12.00 L 2.97 12.00" />
      <path d="M 8.49 5.91 L 7.49 4.18" />
      <path d="M 15.51 5.91 L 16.51 4.18" />
      {children}
    </svg>
  );
});

export default SpacioSwitch;
