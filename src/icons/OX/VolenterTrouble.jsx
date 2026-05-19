import React from 'react';

export const iconData = {
  "id": "VolenterTrouble",
  "name": "VolenterTrouble",
  "category": "OX",
  "nodes": [
    [
      "path",
      {
        "d": "M 11.84 2.43 L 12.99 2.72 L 8.64 7.37 L 16.11 15.69 L 6.47 16.62 L 17.94 21.81"
      }
    ],
    [
      "circle",
      {
        "cx": "11.84",
        "cy": "2.43",
        "r": "0.58"
      }
    ],
    [
      "circle",
      {
        "cx": "12.99",
        "cy": "2.72",
        "r": "0.62"
      }
    ],
    [
      "circle",
      {
        "cx": "8.64",
        "cy": "7.37",
        "r": "0.98"
      }
    ],
    [
      "circle",
      {
        "cx": "16.11",
        "cy": "15.69",
        "r": "0.73"
      }
    ],
    [
      "circle",
      {
        "cx": "6.47",
        "cy": "16.62",
        "r": "1.04"
      }
    ],
    [
      "circle",
      {
        "cx": "17.94",
        "cy": "21.81",
        "r": "0.84"
      }
    ]
  ]
};

export const VolenterTrouble = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 11.84 2.43 L 12.99 2.72 L 8.64 7.37 L 16.11 15.69 L 6.47 16.62 L 17.94 21.81" />
      <circle cx="11.84" cy="2.43" r="0.58" />
      <circle cx="12.99" cy="2.72" r="0.62" />
      <circle cx="8.64" cy="7.37" r="0.98" />
      <circle cx="16.11" cy="15.69" r="0.73" />
      <circle cx="6.47" cy="16.62" r="1.04" />
      <circle cx="17.94" cy="21.81" r="0.84" />
      {children}
    </svg>
  );
});

export default VolenterTrouble;
