import React from 'react';

export const iconData = {
  "id": "MarmoMix",
  "name": "MarmoMix",
  "category": "OE",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.06 17.99 L 19.79 12.93 L 12.87 7.79 L 7.63 21.72"
      }
    ],
    [
      "circle",
      {
        "cx": "20.06",
        "cy": "17.99",
        "r": "1.10"
      }
    ],
    [
      "circle",
      {
        "cx": "19.79",
        "cy": "12.93",
        "r": "0.99"
      }
    ],
    [
      "circle",
      {
        "cx": "12.87",
        "cy": "7.79",
        "r": "1.30"
      }
    ],
    [
      "circle",
      {
        "cx": "7.63",
        "cy": "21.72",
        "r": "1.03"
      }
    ]
  ]
};

export const MarmoMix = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.06 17.99 L 19.79 12.93 L 12.87 7.79 L 7.63 21.72" />
      <circle cx="20.06" cy="17.99" r="1.10" />
      <circle cx="19.79" cy="12.93" r="0.99" />
      <circle cx="12.87" cy="7.79" r="1.30" />
      <circle cx="7.63" cy="21.72" r="1.03" />
      {children}
    </svg>
  );
});

export default MarmoMix;
