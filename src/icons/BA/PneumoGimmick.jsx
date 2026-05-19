import React from 'react';

export const iconData = {
  "id": "PneumoGimmick",
  "name": "PneumoGimmick",
  "category": "BA",
  "nodes": [
    [
      "path",
      {
        "d": "M 16.50 21.11 L 4.34 2.17 L 11.88 4.71 L 18.50 18.55"
      }
    ],
    [
      "circle",
      {
        "cx": "16.50",
        "cy": "21.11",
        "r": "1.15"
      }
    ],
    [
      "circle",
      {
        "cx": "4.34",
        "cy": "2.17",
        "r": "0.77"
      }
    ],
    [
      "circle",
      {
        "cx": "11.88",
        "cy": "4.71",
        "r": "0.92"
      }
    ],
    [
      "circle",
      {
        "cx": "18.50",
        "cy": "18.55",
        "r": "0.74"
      }
    ]
  ]
};

export const PneumoGimmick = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 16.50 21.11 L 4.34 2.17 L 11.88 4.71 L 18.50 18.55" />
      <circle cx="16.50" cy="21.11" r="1.15" />
      <circle cx="4.34" cy="2.17" r="0.77" />
      <circle cx="11.88" cy="4.71" r="0.92" />
      <circle cx="18.50" cy="18.55" r="0.74" />
      {children}
    </svg>
  );
});

export default PneumoGimmick;
