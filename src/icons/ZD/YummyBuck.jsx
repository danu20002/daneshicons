import React from 'react';

export const iconData = {
  "id": "YummyBuck",
  "name": "YummyBuck",
  "category": "ZD",
  "nodes": [
    [
      "path",
      {
        "d": "M 19.17 2.50 L 15.63 12.15 L 8.71 15.03 L 6.43 15.25 L 9.63 3.03 L 14.67 20.89"
      }
    ],
    [
      "circle",
      {
        "cx": "19.17",
        "cy": "2.50",
        "r": "1.49"
      }
    ],
    [
      "circle",
      {
        "cx": "15.63",
        "cy": "12.15",
        "r": "0.68"
      }
    ],
    [
      "circle",
      {
        "cx": "8.71",
        "cy": "15.03",
        "r": "1.15"
      }
    ],
    [
      "circle",
      {
        "cx": "6.43",
        "cy": "15.25",
        "r": "1.07"
      }
    ],
    [
      "circle",
      {
        "cx": "9.63",
        "cy": "3.03",
        "r": "1.42"
      }
    ],
    [
      "circle",
      {
        "cx": "14.67",
        "cy": "20.89",
        "r": "1.14"
      }
    ]
  ]
};

export const YummyBuck = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 19.17 2.50 L 15.63 12.15 L 8.71 15.03 L 6.43 15.25 L 9.63 3.03 L 14.67 20.89" />
      <circle cx="19.17" cy="2.50" r="1.49" />
      <circle cx="15.63" cy="12.15" r="0.68" />
      <circle cx="8.71" cy="15.03" r="1.15" />
      <circle cx="6.43" cy="15.25" r="1.07" />
      <circle cx="9.63" cy="3.03" r="1.42" />
      <circle cx="14.67" cy="20.89" r="1.14" />
      {children}
    </svg>
  );
});

export default YummyBuck;
