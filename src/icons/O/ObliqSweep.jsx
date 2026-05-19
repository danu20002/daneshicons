import React from 'react';

export const iconData = {
  "id": "ObliqSweep",
  "name": "ObliqSweep",
  "category": "O",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.10 4.43 L 17.43 17.20 L 3.52 21.37 L 8.08 6.67 L 4.51 8.71 L 19.25 14.27"
      }
    ],
    [
      "circle",
      {
        "cx": "2.10",
        "cy": "4.43",
        "r": "1.20"
      }
    ],
    [
      "circle",
      {
        "cx": "17.43",
        "cy": "17.20",
        "r": "1.19"
      }
    ],
    [
      "circle",
      {
        "cx": "3.52",
        "cy": "21.37",
        "r": "0.78"
      }
    ],
    [
      "circle",
      {
        "cx": "8.08",
        "cy": "6.67",
        "r": "0.57"
      }
    ],
    [
      "circle",
      {
        "cx": "4.51",
        "cy": "8.71",
        "r": "1.40"
      }
    ],
    [
      "circle",
      {
        "cx": "19.25",
        "cy": "14.27",
        "r": "1.37"
      }
    ]
  ]
};

export const ObliqSweep = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.10 4.43 L 17.43 17.20 L 3.52 21.37 L 8.08 6.67 L 4.51 8.71 L 19.25 14.27" />
      <circle cx="2.10" cy="4.43" r="1.20" />
      <circle cx="17.43" cy="17.20" r="1.19" />
      <circle cx="3.52" cy="21.37" r="0.78" />
      <circle cx="8.08" cy="6.67" r="0.57" />
      <circle cx="4.51" cy="8.71" r="1.40" />
      <circle cx="19.25" cy="14.27" r="1.37" />
      {children}
    </svg>
  );
});

export default ObliqSweep;
