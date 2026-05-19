import React from 'react';

export const iconData = {
  "id": "PlenoQueue",
  "name": "PlenoQueue",
  "category": "GD",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.03 2.35 L 16.85 3.06 L 11.34 12.31 L 6.00 17.07 L 9.36 2.15"
      }
    ],
    [
      "circle",
      {
        "cx": "4.03",
        "cy": "2.35",
        "r": "0.56"
      }
    ],
    [
      "circle",
      {
        "cx": "16.85",
        "cy": "3.06",
        "r": "1.49"
      }
    ],
    [
      "circle",
      {
        "cx": "11.34",
        "cy": "12.31",
        "r": "1.01"
      }
    ],
    [
      "circle",
      {
        "cx": "6.00",
        "cy": "17.07",
        "r": "1.16"
      }
    ],
    [
      "circle",
      {
        "cx": "9.36",
        "cy": "2.15",
        "r": "0.69"
      }
    ]
  ]
};

export const PlenoQueue = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.03 2.35 L 16.85 3.06 L 11.34 12.31 L 6.00 17.07 L 9.36 2.15" />
      <circle cx="4.03" cy="2.35" r="0.56" />
      <circle cx="16.85" cy="3.06" r="1.49" />
      <circle cx="11.34" cy="12.31" r="1.01" />
      <circle cx="6.00" cy="17.07" r="1.16" />
      <circle cx="9.36" cy="2.15" r="0.69" />
      {children}
    </svg>
  );
});

export default PlenoQueue;
