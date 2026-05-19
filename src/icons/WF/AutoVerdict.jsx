import React from 'react';

export const iconData = {
  "id": "AutoVerdict",
  "name": "AutoVerdict",
  "category": "WF",
  "nodes": [
    [
      "path",
      {
        "d": "M 15.56 18.01 L 21.11 12.60 L 9.37 20.61 L 17.90 17.66 L 21.75 10.55"
      }
    ],
    [
      "circle",
      {
        "cx": "15.56",
        "cy": "18.01",
        "r": "1.07"
      }
    ],
    [
      "circle",
      {
        "cx": "21.11",
        "cy": "12.60",
        "r": "0.73"
      }
    ],
    [
      "circle",
      {
        "cx": "9.37",
        "cy": "20.61",
        "r": "0.62"
      }
    ],
    [
      "circle",
      {
        "cx": "17.90",
        "cy": "17.66",
        "r": "1.09"
      }
    ],
    [
      "circle",
      {
        "cx": "21.75",
        "cy": "10.55",
        "r": "0.85"
      }
    ]
  ]
};

export const AutoVerdict = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 15.56 18.01 L 21.11 12.60 L 9.37 20.61 L 17.90 17.66 L 21.75 10.55" />
      <circle cx="15.56" cy="18.01" r="1.07" />
      <circle cx="21.11" cy="12.60" r="0.73" />
      <circle cx="9.37" cy="20.61" r="0.62" />
      <circle cx="17.90" cy="17.66" r="1.09" />
      <circle cx="21.75" cy="10.55" r="0.85" />
      {children}
    </svg>
  );
});

export default AutoVerdict;
