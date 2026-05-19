import React from 'react';

export const iconData = {
  "id": "PneumoTide",
  "name": "PneumoTide",
  "category": "AF",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.80 18.55 C 11.42 2.01, 15.58 5.23, 12.70 16.19"
      }
    ],
    [
      "path",
      {
        "d": "M 2.82 5.10 A 4.04 3.68 107 0 1 7.88 2.36"
      }
    ],
    [
      "path",
      {
        "d": "M 3.10 10.40 Q 4.15 17.93 4.40 12.68"
      }
    ],
    [
      "path",
      {
        "d": "M 9.44 21.84 A 5.98 2.69 104 0 0 21.27 7.91"
      }
    ]
  ]
};

export const PneumoTide = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.80 18.55 C 11.42 2.01, 15.58 5.23, 12.70 16.19" />
      <path d="M 2.82 5.10 A 4.04 3.68 107 0 1 7.88 2.36" />
      <path d="M 3.10 10.40 Q 4.15 17.93 4.40 12.68" />
      <path d="M 9.44 21.84 A 5.98 2.69 104 0 0 21.27 7.91" />
      {children}
    </svg>
  );
});

export default PneumoTide;
