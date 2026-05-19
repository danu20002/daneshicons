import React from 'react';

export const iconData = {
  "id": "SpiriFriction",
  "name": "SpiriFriction",
  "category": "NL",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.06 13.52 L 16.55 16.73 L 11.64 21.02 L 19.56 13.73 L 4.94 13.67 L 5.84 7.18 L 9.71 12.19 L 4.43 5.06"
      }
    ],
    [
      "circle",
      {
        "cx": "2.06",
        "cy": "13.52",
        "r": "0.64"
      }
    ],
    [
      "circle",
      {
        "cx": "16.55",
        "cy": "16.73",
        "r": "1.38"
      }
    ],
    [
      "circle",
      {
        "cx": "11.64",
        "cy": "21.02",
        "r": "0.71"
      }
    ],
    [
      "circle",
      {
        "cx": "19.56",
        "cy": "13.73",
        "r": "0.59"
      }
    ],
    [
      "circle",
      {
        "cx": "4.94",
        "cy": "13.67",
        "r": "0.50"
      }
    ],
    [
      "circle",
      {
        "cx": "5.84",
        "cy": "7.18",
        "r": "0.99"
      }
    ],
    [
      "circle",
      {
        "cx": "9.71",
        "cy": "12.19",
        "r": "1.17"
      }
    ],
    [
      "circle",
      {
        "cx": "4.43",
        "cy": "5.06",
        "r": "1.49"
      }
    ]
  ]
};

export const SpiriFriction = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.06 13.52 L 16.55 16.73 L 11.64 21.02 L 19.56 13.73 L 4.94 13.67 L 5.84 7.18 L 9.71 12.19 L 4.43 5.06" />
      <circle cx="2.06" cy="13.52" r="0.64" />
      <circle cx="16.55" cy="16.73" r="1.38" />
      <circle cx="11.64" cy="21.02" r="0.71" />
      <circle cx="19.56" cy="13.73" r="0.59" />
      <circle cx="4.94" cy="13.67" r="0.50" />
      <circle cx="5.84" cy="7.18" r="0.99" />
      <circle cx="9.71" cy="12.19" r="1.17" />
      <circle cx="4.43" cy="5.06" r="1.49" />
      {children}
    </svg>
  );
});

export default SpiriFriction;
