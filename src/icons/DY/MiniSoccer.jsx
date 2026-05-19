import React from 'react';

export const iconData = {
  "id": "MiniSoccer",
  "name": "MiniSoccer",
  "category": "DY",
  "nodes": [
    [
      "path",
      {
        "d": "M 14.17 3.50 L 6.01 5.25 L 12.92 2.56 L 16.26 13.98"
      }
    ],
    [
      "circle",
      {
        "cx": "14.17",
        "cy": "3.50",
        "r": "1.31"
      }
    ],
    [
      "circle",
      {
        "cx": "6.01",
        "cy": "5.25",
        "r": "0.89"
      }
    ],
    [
      "circle",
      {
        "cx": "12.92",
        "cy": "2.56",
        "r": "1.16"
      }
    ],
    [
      "circle",
      {
        "cx": "16.26",
        "cy": "13.98",
        "r": "0.61"
      }
    ]
  ]
};

export const MiniSoccer = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 14.17 3.50 L 6.01 5.25 L 12.92 2.56 L 16.26 13.98" />
      <circle cx="14.17" cy="3.50" r="1.31" />
      <circle cx="6.01" cy="5.25" r="0.89" />
      <circle cx="12.92" cy="2.56" r="1.16" />
      <circle cx="16.26" cy="13.98" r="0.61" />
      {children}
    </svg>
  );
});

export default MiniSoccer;
