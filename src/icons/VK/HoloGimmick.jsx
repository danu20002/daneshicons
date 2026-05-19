import React from 'react';

export const iconData = {
  "id": "HoloGimmick",
  "name": "HoloGimmick",
  "category": "VK",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.10 19.89 L 12.16 9.86 L 10.83 15.93 L 3.65 15.94 L 13.43 15.73 L 9.69 7.40"
      }
    ],
    [
      "path",
      {
        "d": "M 11.27 20.24 A 4.70 5.94 70 0 1 21.39 2.43"
      }
    ],
    [
      "path",
      {
        "d": "M 3.62 12.10 L 6.90 10.80"
      }
    ],
    [
      "path",
      {
        "d": "M 21.28 11.64 C 7.27 17.70, 8.22 14.95, 6.67 5.40"
      }
    ],
    [
      "path",
      {
        "d": "M 16.67 4.21 Q 21.48 9.86 20.91 20.78"
      }
    ],
    [
      "path",
      {
        "d": "M 15.71 18.51 A 4.52 2.03 169 0 1 6.55 5.47"
      }
    ]
  ]
};

export const HoloGimmick = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.10 19.89 L 12.16 9.86 L 10.83 15.93 L 3.65 15.94 L 13.43 15.73 L 9.69 7.40" />
      <path d="M 11.27 20.24 A 4.70 5.94 70 0 1 21.39 2.43" />
      <path d="M 3.62 12.10 L 6.90 10.80" />
      <path d="M 21.28 11.64 C 7.27 17.70, 8.22 14.95, 6.67 5.40" />
      <path d="M 16.67 4.21 Q 21.48 9.86 20.91 20.78" />
      <path d="M 15.71 18.51 A 4.52 2.03 169 0 1 6.55 5.47" />
      {children}
    </svg>
  );
});

export default HoloGimmick;
