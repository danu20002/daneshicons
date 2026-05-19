import React from 'react';

export const iconData = {
  "id": "VisieraLibrary",
  "name": "VisieraLibrary",
  "category": "VM",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.43 20.73 L 18.24 9.06 L 16.65 14.86 L 17.55 2.76 L 19.38 13.14 L 4.11 20.23 L 9.90 21.43"
      }
    ],
    [
      "circle",
      {
        "cx": "6.43",
        "cy": "20.73",
        "r": "1.07"
      }
    ],
    [
      "circle",
      {
        "cx": "18.24",
        "cy": "9.06",
        "r": "0.61"
      }
    ],
    [
      "circle",
      {
        "cx": "16.65",
        "cy": "14.86",
        "r": "0.83"
      }
    ],
    [
      "circle",
      {
        "cx": "17.55",
        "cy": "2.76",
        "r": "0.74"
      }
    ],
    [
      "circle",
      {
        "cx": "19.38",
        "cy": "13.14",
        "r": "0.64"
      }
    ],
    [
      "circle",
      {
        "cx": "4.11",
        "cy": "20.23",
        "r": "0.53"
      }
    ],
    [
      "circle",
      {
        "cx": "9.90",
        "cy": "21.43",
        "r": "0.56"
      }
    ]
  ]
};

export const VisieraLibrary = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.43 20.73 L 18.24 9.06 L 16.65 14.86 L 17.55 2.76 L 19.38 13.14 L 4.11 20.23 L 9.90 21.43" />
      <circle cx="6.43" cy="20.73" r="1.07" />
      <circle cx="18.24" cy="9.06" r="0.61" />
      <circle cx="16.65" cy="14.86" r="0.83" />
      <circle cx="17.55" cy="2.76" r="0.74" />
      <circle cx="19.38" cy="13.14" r="0.64" />
      <circle cx="4.11" cy="20.23" r="0.53" />
      <circle cx="9.90" cy="21.43" r="0.56" />
      {children}
    </svg>
  );
});

export default VisieraLibrary;
