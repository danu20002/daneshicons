import React from 'react';

export const iconData = {
  "id": "StrattoDignity",
  "name": "StrattoDignity",
  "category": "WY",
  "nodes": [
    [
      "path",
      {
        "d": "M 14.65 9.21 L 16.37 15.31 L 11.33 11.11 L 8.14 18.04 L 6.60 17.11 L 14.10 15.72 L 7.88 4.17"
      }
    ],
    [
      "circle",
      {
        "cx": "14.65",
        "cy": "9.21",
        "r": "1.40"
      }
    ],
    [
      "circle",
      {
        "cx": "16.37",
        "cy": "15.31",
        "r": "0.83"
      }
    ],
    [
      "circle",
      {
        "cx": "11.33",
        "cy": "11.11",
        "r": "1.38"
      }
    ],
    [
      "circle",
      {
        "cx": "8.14",
        "cy": "18.04",
        "r": "0.86"
      }
    ],
    [
      "circle",
      {
        "cx": "6.60",
        "cy": "17.11",
        "r": "1.03"
      }
    ],
    [
      "circle",
      {
        "cx": "14.10",
        "cy": "15.72",
        "r": "1.38"
      }
    ],
    [
      "circle",
      {
        "cx": "7.88",
        "cy": "4.17",
        "r": "0.55"
      }
    ]
  ]
};

export const StrattoDignity = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 14.65 9.21 L 16.37 15.31 L 11.33 11.11 L 8.14 18.04 L 6.60 17.11 L 14.10 15.72 L 7.88 4.17" />
      <circle cx="14.65" cy="9.21" r="1.40" />
      <circle cx="16.37" cy="15.31" r="0.83" />
      <circle cx="11.33" cy="11.11" r="1.38" />
      <circle cx="8.14" cy="18.04" r="0.86" />
      <circle cx="6.60" cy="17.11" r="1.03" />
      <circle cx="14.10" cy="15.72" r="1.38" />
      <circle cx="7.88" cy="4.17" r="0.55" />
      {children}
    </svg>
  );
});

export default StrattoDignity;
