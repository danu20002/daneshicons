import React from 'react';

export const iconData = {
  "id": "StrettoGrowth",
  "name": "StrettoGrowth",
  "category": "BT",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.23 8.63 L 16.84 4.47 L 4.66 16.87 L 20.39 6.14 L 13.03 20.82 L 3.92 10.03 L 12.02 9.06 L 2.25 2.54"
      }
    ],
    [
      "circle",
      {
        "cx": "4.23",
        "cy": "8.63",
        "r": "0.79"
      }
    ],
    [
      "circle",
      {
        "cx": "16.84",
        "cy": "4.47",
        "r": "1.17"
      }
    ],
    [
      "circle",
      {
        "cx": "4.66",
        "cy": "16.87",
        "r": "1.04"
      }
    ],
    [
      "circle",
      {
        "cx": "20.39",
        "cy": "6.14",
        "r": "1.17"
      }
    ],
    [
      "circle",
      {
        "cx": "13.03",
        "cy": "20.82",
        "r": "1.33"
      }
    ],
    [
      "circle",
      {
        "cx": "3.92",
        "cy": "10.03",
        "r": "0.91"
      }
    ],
    [
      "circle",
      {
        "cx": "12.02",
        "cy": "9.06",
        "r": "0.86"
      }
    ],
    [
      "circle",
      {
        "cx": "2.25",
        "cy": "2.54",
        "r": "0.59"
      }
    ]
  ]
};

export const StrettoGrowth = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.23 8.63 L 16.84 4.47 L 4.66 16.87 L 20.39 6.14 L 13.03 20.82 L 3.92 10.03 L 12.02 9.06 L 2.25 2.54" />
      <circle cx="4.23" cy="8.63" r="0.79" />
      <circle cx="16.84" cy="4.47" r="1.17" />
      <circle cx="4.66" cy="16.87" r="1.04" />
      <circle cx="20.39" cy="6.14" r="1.17" />
      <circle cx="13.03" cy="20.82" r="1.33" />
      <circle cx="3.92" cy="10.03" r="0.91" />
      <circle cx="12.02" cy="9.06" r="0.86" />
      <circle cx="2.25" cy="2.54" r="0.59" />
      {children}
    </svg>
  );
});

export default StrettoGrowth;
