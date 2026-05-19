import React from 'react';

export const iconData = {
  "id": "JatoTenant",
  "name": "JatoTenant",
  "category": "HP",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.85 4.86 L 8.09 2.35 L 5.18 15.45 L 3.73 3.09 L 19.31 15.08 L 20.42 18.91"
      }
    ],
    [
      "circle",
      {
        "cx": "3.85",
        "cy": "4.86",
        "r": "0.81"
      }
    ],
    [
      "circle",
      {
        "cx": "8.09",
        "cy": "2.35",
        "r": "0.88"
      }
    ],
    [
      "circle",
      {
        "cx": "5.18",
        "cy": "15.45",
        "r": "1.34"
      }
    ],
    [
      "circle",
      {
        "cx": "3.73",
        "cy": "3.09",
        "r": "1.23"
      }
    ],
    [
      "circle",
      {
        "cx": "19.31",
        "cy": "15.08",
        "r": "0.54"
      }
    ],
    [
      "circle",
      {
        "cx": "20.42",
        "cy": "18.91",
        "r": "0.91"
      }
    ]
  ]
};

export const JatoTenant = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.85 4.86 L 8.09 2.35 L 5.18 15.45 L 3.73 3.09 L 19.31 15.08 L 20.42 18.91" />
      <circle cx="3.85" cy="4.86" r="0.81" />
      <circle cx="8.09" cy="2.35" r="0.88" />
      <circle cx="5.18" cy="15.45" r="1.34" />
      <circle cx="3.73" cy="3.09" r="1.23" />
      <circle cx="19.31" cy="15.08" r="0.54" />
      <circle cx="20.42" cy="18.91" r="0.91" />
      {children}
    </svg>
  );
});

export default JatoTenant;
