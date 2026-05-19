import React from 'react';

export const iconData = {
  "id": "PiloWoven",
  "name": "PiloWoven",
  "category": "IG",
  "nodes": [
    [
      "path",
      {
        "d": "M 16.49 12.71 L 16.13 12.49"
      }
    ],
    [
      "path",
      {
        "d": "M 15.98 8.80 L 16.71 20.09 L 13.06 11.69 L 7.70 21.11"
      }
    ],
    [
      "path",
      {
        "d": "M 16.09 20.03 L 8.18 15.18 L 4.84 9.91"
      }
    ],
    [
      "path",
      {
        "d": "M 5.11 10.40 Q 2.88 18.64 21.04 14.92"
      }
    ],
    [
      "path",
      {
        "d": "M 7.10 20.05 C 11.28 10.45, 11.61 2.99, 17.33 6.50"
      }
    ],
    [
      "path",
      {
        "d": "M 2.68 14.51 A 5.37 6.35 144 0 0 13.87 19.49"
      }
    ]
  ]
};

export const PiloWoven = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 16.49 12.71 L 16.13 12.49" />
      <path d="M 15.98 8.80 L 16.71 20.09 L 13.06 11.69 L 7.70 21.11" />
      <path d="M 16.09 20.03 L 8.18 15.18 L 4.84 9.91" />
      <path d="M 5.11 10.40 Q 2.88 18.64 21.04 14.92" />
      <path d="M 7.10 20.05 C 11.28 10.45, 11.61 2.99, 17.33 6.50" />
      <path d="M 2.68 14.51 A 5.37 6.35 144 0 0 13.87 19.49" />
      {children}
    </svg>
  );
});

export default PiloWoven;
