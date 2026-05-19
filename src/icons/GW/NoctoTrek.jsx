import React from 'react';

export const iconData = {
  "id": "NoctoTrek",
  "name": "NoctoTrek",
  "category": "GW",
  "nodes": [
    [
      "path",
      {
        "d": "M 17.26 3.84 L 5.92 17.44 L 21.86 7.36 L 9.84 12.49 L 4.68 19.61 L 20.24 10.35"
      }
    ],
    [
      "circle",
      {
        "cx": "17.26",
        "cy": "3.84",
        "r": "1.48"
      }
    ],
    [
      "circle",
      {
        "cx": "5.92",
        "cy": "17.44",
        "r": "1.18"
      }
    ],
    [
      "circle",
      {
        "cx": "21.86",
        "cy": "7.36",
        "r": "1.42"
      }
    ],
    [
      "circle",
      {
        "cx": "9.84",
        "cy": "12.49",
        "r": "1.40"
      }
    ],
    [
      "circle",
      {
        "cx": "4.68",
        "cy": "19.61",
        "r": "0.70"
      }
    ],
    [
      "circle",
      {
        "cx": "20.24",
        "cy": "10.35",
        "r": "1.01"
      }
    ]
  ]
};

export const NoctoTrek = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 17.26 3.84 L 5.92 17.44 L 21.86 7.36 L 9.84 12.49 L 4.68 19.61 L 20.24 10.35" />
      <circle cx="17.26" cy="3.84" r="1.48" />
      <circle cx="5.92" cy="17.44" r="1.18" />
      <circle cx="21.86" cy="7.36" r="1.42" />
      <circle cx="9.84" cy="12.49" r="1.40" />
      <circle cx="4.68" cy="19.61" r="0.70" />
      <circle cx="20.24" cy="10.35" r="1.01" />
      {children}
    </svg>
  );
});

export default NoctoTrek;
