import React from 'react';

export const iconData = {
  "id": "TracheoMidst",
  "name": "TracheoMidst",
  "category": "TH",
  "nodes": [
    [
      "path",
      {
        "d": "M 14.40 7.42 L 11.30 7.82 L 9.66 16.68 L 17.52 7.48 L 13.19 6.70 L 20.72 11.69 L 4.61 9.97"
      }
    ],
    [
      "circle",
      {
        "cx": "14.40",
        "cy": "7.42",
        "r": "0.93"
      }
    ],
    [
      "circle",
      {
        "cx": "11.30",
        "cy": "7.82",
        "r": "0.63"
      }
    ],
    [
      "circle",
      {
        "cx": "9.66",
        "cy": "16.68",
        "r": "0.78"
      }
    ],
    [
      "circle",
      {
        "cx": "17.52",
        "cy": "7.48",
        "r": "0.59"
      }
    ],
    [
      "circle",
      {
        "cx": "13.19",
        "cy": "6.70",
        "r": "1.08"
      }
    ],
    [
      "circle",
      {
        "cx": "20.72",
        "cy": "11.69",
        "r": "0.93"
      }
    ],
    [
      "circle",
      {
        "cx": "4.61",
        "cy": "9.97",
        "r": "0.86"
      }
    ]
  ]
};

export const TracheoMidst = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 14.40 7.42 L 11.30 7.82 L 9.66 16.68 L 17.52 7.48 L 13.19 6.70 L 20.72 11.69 L 4.61 9.97" />
      <circle cx="14.40" cy="7.42" r="0.93" />
      <circle cx="11.30" cy="7.82" r="0.63" />
      <circle cx="9.66" cy="16.68" r="0.78" />
      <circle cx="17.52" cy="7.48" r="0.59" />
      <circle cx="13.19" cy="6.70" r="1.08" />
      <circle cx="20.72" cy="11.69" r="0.93" />
      <circle cx="4.61" cy="9.97" r="0.86" />
      {children}
    </svg>
  );
});

export default TracheoMidst;
