import React from 'react';

export const iconData = {
  "id": "VaporBrim",
  "name": "VaporBrim",
  "category": "ZD",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.61 8.73 L 8.44 7.32 L 16.88 14.77 L 21.97 20.81 L 7.45 21.86 L 7.63 6.61 L 8.55 8.31"
      }
    ],
    [
      "circle",
      {
        "cx": "8.61",
        "cy": "8.73",
        "r": "0.50"
      }
    ],
    [
      "circle",
      {
        "cx": "8.44",
        "cy": "7.32",
        "r": "1.40"
      }
    ],
    [
      "circle",
      {
        "cx": "16.88",
        "cy": "14.77",
        "r": "0.66"
      }
    ],
    [
      "circle",
      {
        "cx": "21.97",
        "cy": "20.81",
        "r": "0.73"
      }
    ],
    [
      "circle",
      {
        "cx": "7.45",
        "cy": "21.86",
        "r": "0.57"
      }
    ],
    [
      "circle",
      {
        "cx": "7.63",
        "cy": "6.61",
        "r": "1.22"
      }
    ],
    [
      "circle",
      {
        "cx": "8.55",
        "cy": "8.31",
        "r": "1.26"
      }
    ]
  ]
};

export const VaporBrim = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.61 8.73 L 8.44 7.32 L 16.88 14.77 L 21.97 20.81 L 7.45 21.86 L 7.63 6.61 L 8.55 8.31" />
      <circle cx="8.61" cy="8.73" r="0.50" />
      <circle cx="8.44" cy="7.32" r="1.40" />
      <circle cx="16.88" cy="14.77" r="0.66" />
      <circle cx="21.97" cy="20.81" r="0.73" />
      <circle cx="7.45" cy="21.86" r="0.57" />
      <circle cx="7.63" cy="6.61" r="1.22" />
      <circle cx="8.55" cy="8.31" r="1.26" />
      {children}
    </svg>
  );
});

export default VaporBrim;
