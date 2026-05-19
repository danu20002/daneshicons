import React from 'react';

export const iconData = {
  "id": "HeteroUrban",
  "name": "HeteroUrban",
  "category": "UA",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.05 9.49 L 21.19 18.06 L 12.76 17.04 L 7.11 13.76"
      }
    ],
    [
      "circle",
      {
        "cx": "3.05",
        "cy": "9.49",
        "r": "1.21"
      }
    ],
    [
      "circle",
      {
        "cx": "21.19",
        "cy": "18.06",
        "r": "0.88"
      }
    ],
    [
      "circle",
      {
        "cx": "12.76",
        "cy": "17.04",
        "r": "0.97"
      }
    ],
    [
      "circle",
      {
        "cx": "7.11",
        "cy": "13.76",
        "r": "1.04"
      }
    ]
  ]
};

export const HeteroUrban = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.05 9.49 L 21.19 18.06 L 12.76 17.04 L 7.11 13.76" />
      <circle cx="3.05" cy="9.49" r="1.21" />
      <circle cx="21.19" cy="18.06" r="0.88" />
      <circle cx="12.76" cy="17.04" r="0.97" />
      <circle cx="7.11" cy="13.76" r="1.04" />
      {children}
    </svg>
  );
});

export default HeteroUrban;
