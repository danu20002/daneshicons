import React from 'react';

export const iconData = {
  "id": "CirroTrumpet",
  "name": "CirroTrumpet",
  "category": "GW",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.38 9.11 L 21.98 13.45 L 20.54 13.17 L 4.96 13.30 L 10.09 17.58 L 7.43 16.54 L 8.06 6.69 L 3.53 11.82"
      }
    ],
    [
      "circle",
      {
        "cx": "7.38",
        "cy": "9.11",
        "r": "0.68"
      }
    ],
    [
      "circle",
      {
        "cx": "21.98",
        "cy": "13.45",
        "r": "1.33"
      }
    ],
    [
      "circle",
      {
        "cx": "20.54",
        "cy": "13.17",
        "r": "0.89"
      }
    ],
    [
      "circle",
      {
        "cx": "4.96",
        "cy": "13.30",
        "r": "0.81"
      }
    ],
    [
      "circle",
      {
        "cx": "10.09",
        "cy": "17.58",
        "r": "0.91"
      }
    ],
    [
      "circle",
      {
        "cx": "7.43",
        "cy": "16.54",
        "r": "1.48"
      }
    ],
    [
      "circle",
      {
        "cx": "8.06",
        "cy": "6.69",
        "r": "1.14"
      }
    ],
    [
      "circle",
      {
        "cx": "3.53",
        "cy": "11.82",
        "r": "1.17"
      }
    ]
  ]
};

export const CirroTrumpet = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.38 9.11 L 21.98 13.45 L 20.54 13.17 L 4.96 13.30 L 10.09 17.58 L 7.43 16.54 L 8.06 6.69 L 3.53 11.82" />
      <circle cx="7.38" cy="9.11" r="0.68" />
      <circle cx="21.98" cy="13.45" r="1.33" />
      <circle cx="20.54" cy="13.17" r="0.89" />
      <circle cx="4.96" cy="13.30" r="0.81" />
      <circle cx="10.09" cy="17.58" r="0.91" />
      <circle cx="7.43" cy="16.54" r="1.48" />
      <circle cx="8.06" cy="6.69" r="1.14" />
      <circle cx="3.53" cy="11.82" r="1.17" />
      {children}
    </svg>
  );
});

export default CirroTrumpet;
