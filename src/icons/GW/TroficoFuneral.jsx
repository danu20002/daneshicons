import React from 'react';

export const iconData = {
  "id": "TroficoFuneral",
  "name": "TroficoFuneral",
  "category": "GW",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.77 6.39 L 17.84 8.27 L 3.17 3.06 L 12.16 4.40 L 12.87 11.00 L 5.17 3.55 L 9.85 19.52 L 15.69 12.93"
      }
    ],
    [
      "circle",
      {
        "cx": "4.77",
        "cy": "6.39",
        "r": "0.52"
      }
    ],
    [
      "circle",
      {
        "cx": "17.84",
        "cy": "8.27",
        "r": "0.74"
      }
    ],
    [
      "circle",
      {
        "cx": "3.17",
        "cy": "3.06",
        "r": "1.39"
      }
    ],
    [
      "circle",
      {
        "cx": "12.16",
        "cy": "4.40",
        "r": "0.50"
      }
    ],
    [
      "circle",
      {
        "cx": "12.87",
        "cy": "11.00",
        "r": "0.54"
      }
    ],
    [
      "circle",
      {
        "cx": "5.17",
        "cy": "3.55",
        "r": "0.84"
      }
    ],
    [
      "circle",
      {
        "cx": "9.85",
        "cy": "19.52",
        "r": "1.31"
      }
    ],
    [
      "circle",
      {
        "cx": "15.69",
        "cy": "12.93",
        "r": "1.03"
      }
    ]
  ]
};

export const TroficoFuneral = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.77 6.39 L 17.84 8.27 L 3.17 3.06 L 12.16 4.40 L 12.87 11.00 L 5.17 3.55 L 9.85 19.52 L 15.69 12.93" />
      <circle cx="4.77" cy="6.39" r="0.52" />
      <circle cx="17.84" cy="8.27" r="0.74" />
      <circle cx="3.17" cy="3.06" r="1.39" />
      <circle cx="12.16" cy="4.40" r="0.50" />
      <circle cx="12.87" cy="11.00" r="0.54" />
      <circle cx="5.17" cy="3.55" r="0.84" />
      <circle cx="9.85" cy="19.52" r="1.31" />
      <circle cx="15.69" cy="12.93" r="1.03" />
      {children}
    </svg>
  );
});

export default TroficoFuneral;
