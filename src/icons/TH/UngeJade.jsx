import React from 'react';

export const iconData = {
  "id": "UngeJade",
  "name": "UngeJade",
  "category": "TH",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.82 21.13 L 6.47 14.32 L 11.79 16.27 L 15.60 21.74 L 7.72 9.00 L 20.11 2.30 L 10.76 11.54"
      }
    ],
    [
      "circle",
      {
        "cx": "21.82",
        "cy": "21.13",
        "r": "0.66"
      }
    ],
    [
      "circle",
      {
        "cx": "6.47",
        "cy": "14.32",
        "r": "1.46"
      }
    ],
    [
      "circle",
      {
        "cx": "11.79",
        "cy": "16.27",
        "r": "1.19"
      }
    ],
    [
      "circle",
      {
        "cx": "15.60",
        "cy": "21.74",
        "r": "0.62"
      }
    ],
    [
      "circle",
      {
        "cx": "7.72",
        "cy": "9.00",
        "r": "0.69"
      }
    ],
    [
      "circle",
      {
        "cx": "20.11",
        "cy": "2.30",
        "r": "1.38"
      }
    ],
    [
      "circle",
      {
        "cx": "10.76",
        "cy": "11.54",
        "r": "1.28"
      }
    ]
  ]
};

export const UngeJade = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.82 21.13 L 6.47 14.32 L 11.79 16.27 L 15.60 21.74 L 7.72 9.00 L 20.11 2.30 L 10.76 11.54" />
      <circle cx="21.82" cy="21.13" r="0.66" />
      <circle cx="6.47" cy="14.32" r="1.46" />
      <circle cx="11.79" cy="16.27" r="1.19" />
      <circle cx="15.60" cy="21.74" r="0.62" />
      <circle cx="7.72" cy="9.00" r="0.69" />
      <circle cx="20.11" cy="2.30" r="1.38" />
      <circle cx="10.76" cy="11.54" r="1.28" />
      {children}
    </svg>
  );
});

export default UngeJade;
