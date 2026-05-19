import React from 'react';

export const iconData = {
  "id": "SaphoWade",
  "name": "SaphoWade",
  "category": "YK",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.68 19.91 L 19.51 16.92 L 2.30 18.70 L 6.51 10.64 L 7.08 13.89 L 12.80 5.42"
      }
    ],
    [
      "circle",
      {
        "cx": "2.68",
        "cy": "19.91",
        "r": "0.62"
      }
    ],
    [
      "circle",
      {
        "cx": "19.51",
        "cy": "16.92",
        "r": "1.44"
      }
    ],
    [
      "circle",
      {
        "cx": "2.30",
        "cy": "18.70",
        "r": "0.93"
      }
    ],
    [
      "circle",
      {
        "cx": "6.51",
        "cy": "10.64",
        "r": "0.69"
      }
    ],
    [
      "circle",
      {
        "cx": "7.08",
        "cy": "13.89",
        "r": "0.92"
      }
    ],
    [
      "circle",
      {
        "cx": "12.80",
        "cy": "5.42",
        "r": "1.15"
      }
    ]
  ]
};

export const SaphoWade = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.68 19.91 L 19.51 16.92 L 2.30 18.70 L 6.51 10.64 L 7.08 13.89 L 12.80 5.42" />
      <circle cx="2.68" cy="19.91" r="0.62" />
      <circle cx="19.51" cy="16.92" r="1.44" />
      <circle cx="2.30" cy="18.70" r="0.93" />
      <circle cx="6.51" cy="10.64" r="0.69" />
      <circle cx="7.08" cy="13.89" r="0.92" />
      <circle cx="12.80" cy="5.42" r="1.15" />
      {children}
    </svg>
  );
});

export default SaphoWade;
