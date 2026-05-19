import React from 'react';

export const iconData = {
  "id": "SquamoSnack",
  "name": "SquamoSnack",
  "category": "RC",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.66 21.77 L 4.20 13.73 L 4.72 5.88 L 16.07 12.38 L 16.92 2.52 L 16.76 19.39 L 5.83 7.49 L 12.43 8.54"
      }
    ],
    [
      "circle",
      {
        "cx": "9.66",
        "cy": "21.77",
        "r": "1.17"
      }
    ],
    [
      "circle",
      {
        "cx": "4.20",
        "cy": "13.73",
        "r": "0.52"
      }
    ],
    [
      "circle",
      {
        "cx": "4.72",
        "cy": "5.88",
        "r": "0.67"
      }
    ],
    [
      "circle",
      {
        "cx": "16.07",
        "cy": "12.38",
        "r": "1.47"
      }
    ],
    [
      "circle",
      {
        "cx": "16.92",
        "cy": "2.52",
        "r": "0.75"
      }
    ],
    [
      "circle",
      {
        "cx": "16.76",
        "cy": "19.39",
        "r": "1.46"
      }
    ],
    [
      "circle",
      {
        "cx": "5.83",
        "cy": "7.49",
        "r": "1.00"
      }
    ],
    [
      "circle",
      {
        "cx": "12.43",
        "cy": "8.54",
        "r": "1.49"
      }
    ]
  ]
};

export const SquamoSnack = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.66 21.77 L 4.20 13.73 L 4.72 5.88 L 16.07 12.38 L 16.92 2.52 L 16.76 19.39 L 5.83 7.49 L 12.43 8.54" />
      <circle cx="9.66" cy="21.77" r="1.17" />
      <circle cx="4.20" cy="13.73" r="0.52" />
      <circle cx="4.72" cy="5.88" r="0.67" />
      <circle cx="16.07" cy="12.38" r="1.47" />
      <circle cx="16.92" cy="2.52" r="0.75" />
      <circle cx="16.76" cy="19.39" r="1.46" />
      <circle cx="5.83" cy="7.49" r="1.00" />
      <circle cx="12.43" cy="8.54" r="1.49" />
      {children}
    </svg>
  );
});

export default SquamoSnack;
