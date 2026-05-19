import React from 'react';

export const iconData = {
  "id": "SonoScare",
  "name": "SonoScare",
  "category": "WF",
  "nodes": [
    [
      "path",
      {
        "d": "M 11.21 8.79 L 7.86 13.04 L 8.48 5.28 L 3.90 18.29 L 8.84 16.35"
      }
    ],
    [
      "circle",
      {
        "cx": "11.21",
        "cy": "8.79",
        "r": "0.99"
      }
    ],
    [
      "circle",
      {
        "cx": "7.86",
        "cy": "13.04",
        "r": "0.53"
      }
    ],
    [
      "circle",
      {
        "cx": "8.48",
        "cy": "5.28",
        "r": "0.99"
      }
    ],
    [
      "circle",
      {
        "cx": "3.90",
        "cy": "18.29",
        "r": "1.06"
      }
    ],
    [
      "circle",
      {
        "cx": "8.84",
        "cy": "16.35",
        "r": "0.86"
      }
    ]
  ]
};

export const SonoScare = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 11.21 8.79 L 7.86 13.04 L 8.48 5.28 L 3.90 18.29 L 8.84 16.35" />
      <circle cx="11.21" cy="8.79" r="0.99" />
      <circle cx="7.86" cy="13.04" r="0.53" />
      <circle cx="8.48" cy="5.28" r="0.99" />
      <circle cx="3.90" cy="18.29" r="1.06" />
      <circle cx="8.84" cy="16.35" r="0.86" />
      {children}
    </svg>
  );
});

export default SonoScare;
