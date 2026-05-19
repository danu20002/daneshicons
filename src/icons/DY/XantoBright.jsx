import React from 'react';

export const iconData = {
  "id": "XantoBright",
  "name": "XantoBright",
  "category": "DY",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.33 12.15 L 21.10 13.12 L 9.30 20.33 L 16.37 14.48 L 19.76 18.83 L 3.83 15.56 L 8.82 21.78 L 17.27 16.25"
      }
    ],
    [
      "circle",
      {
        "cx": "8.33",
        "cy": "12.15",
        "r": "1.32"
      }
    ],
    [
      "circle",
      {
        "cx": "21.10",
        "cy": "13.12",
        "r": "0.63"
      }
    ],
    [
      "circle",
      {
        "cx": "9.30",
        "cy": "20.33",
        "r": "0.67"
      }
    ],
    [
      "circle",
      {
        "cx": "16.37",
        "cy": "14.48",
        "r": "1.03"
      }
    ],
    [
      "circle",
      {
        "cx": "19.76",
        "cy": "18.83",
        "r": "0.90"
      }
    ],
    [
      "circle",
      {
        "cx": "3.83",
        "cy": "15.56",
        "r": "0.69"
      }
    ],
    [
      "circle",
      {
        "cx": "8.82",
        "cy": "21.78",
        "r": "1.20"
      }
    ],
    [
      "circle",
      {
        "cx": "17.27",
        "cy": "16.25",
        "r": "1.16"
      }
    ]
  ]
};

export const XantoBright = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.33 12.15 L 21.10 13.12 L 9.30 20.33 L 16.37 14.48 L 19.76 18.83 L 3.83 15.56 L 8.82 21.78 L 17.27 16.25" />
      <circle cx="8.33" cy="12.15" r="1.32" />
      <circle cx="21.10" cy="13.12" r="0.63" />
      <circle cx="9.30" cy="20.33" r="0.67" />
      <circle cx="16.37" cy="14.48" r="1.03" />
      <circle cx="19.76" cy="18.83" r="0.90" />
      <circle cx="3.83" cy="15.56" r="0.69" />
      <circle cx="8.82" cy="21.78" r="1.20" />
      <circle cx="17.27" cy="16.25" r="1.16" />
      {children}
    </svg>
  );
});

export default XantoBright;
