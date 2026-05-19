import React from 'react';

export const iconData = {
  "id": "TrinitroReplace",
  "name": "TrinitroReplace",
  "category": "UA",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.95 11.85 L 10.03 18.77 L 10.26 17.12 L 7.63 9.61 L 14.16 12.93 L 17.41 15.04"
      }
    ],
    [
      "circle",
      {
        "cx": "6.95",
        "cy": "11.85",
        "r": "1.26"
      }
    ],
    [
      "circle",
      {
        "cx": "10.03",
        "cy": "18.77",
        "r": "0.71"
      }
    ],
    [
      "circle",
      {
        "cx": "10.26",
        "cy": "17.12",
        "r": "1.03"
      }
    ],
    [
      "circle",
      {
        "cx": "7.63",
        "cy": "9.61",
        "r": "0.62"
      }
    ],
    [
      "circle",
      {
        "cx": "14.16",
        "cy": "12.93",
        "r": "1.48"
      }
    ],
    [
      "circle",
      {
        "cx": "17.41",
        "cy": "15.04",
        "r": "1.46"
      }
    ]
  ]
};

export const TrinitroReplace = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.95 11.85 L 10.03 18.77 L 10.26 17.12 L 7.63 9.61 L 14.16 12.93 L 17.41 15.04" />
      <circle cx="6.95" cy="11.85" r="1.26" />
      <circle cx="10.03" cy="18.77" r="0.71" />
      <circle cx="10.26" cy="17.12" r="1.03" />
      <circle cx="7.63" cy="9.61" r="0.62" />
      <circle cx="14.16" cy="12.93" r="1.48" />
      <circle cx="17.41" cy="15.04" r="1.46" />
      {children}
    </svg>
  );
});

export default TrinitroReplace;
