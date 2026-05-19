import React from 'react';

export const iconData = {
  "id": "TrigonOsmosis",
  "name": "TrigonOsmosis",
  "category": "RC",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.57 3.09 L 19.61 4.25 L 20.73 12.75 L 10.52 21.37 L 3.34 3.50 L 5.45 3.47 L 13.53 21.23"
      }
    ],
    [
      "circle",
      {
        "cx": "7.57",
        "cy": "3.09",
        "r": "1.12"
      }
    ],
    [
      "circle",
      {
        "cx": "19.61",
        "cy": "4.25",
        "r": "1.08"
      }
    ],
    [
      "circle",
      {
        "cx": "20.73",
        "cy": "12.75",
        "r": "1.09"
      }
    ],
    [
      "circle",
      {
        "cx": "10.52",
        "cy": "21.37",
        "r": "1.34"
      }
    ],
    [
      "circle",
      {
        "cx": "3.34",
        "cy": "3.50",
        "r": "0.51"
      }
    ],
    [
      "circle",
      {
        "cx": "5.45",
        "cy": "3.47",
        "r": "1.31"
      }
    ],
    [
      "circle",
      {
        "cx": "13.53",
        "cy": "21.23",
        "r": "0.93"
      }
    ]
  ]
};

export const TrigonOsmosis = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.57 3.09 L 19.61 4.25 L 20.73 12.75 L 10.52 21.37 L 3.34 3.50 L 5.45 3.47 L 13.53 21.23" />
      <circle cx="7.57" cy="3.09" r="1.12" />
      <circle cx="19.61" cy="4.25" r="1.08" />
      <circle cx="20.73" cy="12.75" r="1.09" />
      <circle cx="10.52" cy="21.37" r="1.34" />
      <circle cx="3.34" cy="3.50" r="0.51" />
      <circle cx="5.45" cy="3.47" r="1.31" />
      <circle cx="13.53" cy="21.23" r="0.93" />
      {children}
    </svg>
  );
});

export default TrigonOsmosis;
