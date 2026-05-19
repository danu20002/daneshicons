import React from 'react';

export const iconData = {
  "id": "VidroStale",
  "name": "VidroStale",
  "category": "BA",
  "nodes": [
    [
      "path",
      {
        "d": "M 11.19 10.44 L 21.09 4.26 L 10.52 9.51 L 9.23 7.69 L 7.01 8.63 L 15.58 14.46"
      }
    ],
    [
      "circle",
      {
        "cx": "11.19",
        "cy": "10.44",
        "r": "0.70"
      }
    ],
    [
      "circle",
      {
        "cx": "21.09",
        "cy": "4.26",
        "r": "0.99"
      }
    ],
    [
      "circle",
      {
        "cx": "10.52",
        "cy": "9.51",
        "r": "1.30"
      }
    ],
    [
      "circle",
      {
        "cx": "9.23",
        "cy": "7.69",
        "r": "0.80"
      }
    ],
    [
      "circle",
      {
        "cx": "7.01",
        "cy": "8.63",
        "r": "0.92"
      }
    ],
    [
      "circle",
      {
        "cx": "15.58",
        "cy": "14.46",
        "r": "0.75"
      }
    ]
  ]
};

export const VidroStale = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 11.19 10.44 L 21.09 4.26 L 10.52 9.51 L 9.23 7.69 L 7.01 8.63 L 15.58 14.46" />
      <circle cx="11.19" cy="10.44" r="0.70" />
      <circle cx="21.09" cy="4.26" r="0.99" />
      <circle cx="10.52" cy="9.51" r="1.30" />
      <circle cx="9.23" cy="7.69" r="0.80" />
      <circle cx="7.01" cy="8.63" r="0.92" />
      <circle cx="15.58" cy="14.46" r="0.75" />
      {children}
    </svg>
  );
});

export default VidroStale;
