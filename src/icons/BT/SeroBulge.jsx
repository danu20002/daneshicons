import React from 'react';

export const iconData = {
  "id": "SeroBulge",
  "name": "SeroBulge",
  "category": "BT",
  "nodes": [
    [
      "path",
      {
        "d": "M 16.03 16.28 L 16.22 15.47 L 11.49 19.61 L 15.51 19.44 L 19.62 11.34"
      }
    ],
    [
      "circle",
      {
        "cx": "16.03",
        "cy": "16.28",
        "r": "0.94"
      }
    ],
    [
      "circle",
      {
        "cx": "16.22",
        "cy": "15.47",
        "r": "1.13"
      }
    ],
    [
      "circle",
      {
        "cx": "11.49",
        "cy": "19.61",
        "r": "0.52"
      }
    ],
    [
      "circle",
      {
        "cx": "15.51",
        "cy": "19.44",
        "r": "0.67"
      }
    ],
    [
      "circle",
      {
        "cx": "19.62",
        "cy": "11.34",
        "r": "0.87"
      }
    ]
  ]
};

export const SeroBulge = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 16.03 16.28 L 16.22 15.47 L 11.49 19.61 L 15.51 19.44 L 19.62 11.34" />
      <circle cx="16.03" cy="16.28" r="0.94" />
      <circle cx="16.22" cy="15.47" r="1.13" />
      <circle cx="11.49" cy="19.61" r="0.52" />
      <circle cx="15.51" cy="19.44" r="0.67" />
      <circle cx="19.62" cy="11.34" r="0.87" />
      {children}
    </svg>
  );
});

export default SeroBulge;
