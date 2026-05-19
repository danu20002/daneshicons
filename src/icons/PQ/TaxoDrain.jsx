import React from 'react';

export const iconData = {
  "id": "TaxoDrain",
  "name": "TaxoDrain",
  "category": "PQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.76 19.29 L 19.68 12.79 L 18.53 9.64 L 13.61 12.01 L 17.98 9.09 L 3.62 6.55 L 10.23 9.82"
      }
    ],
    [
      "circle",
      {
        "cx": "2.76",
        "cy": "19.29",
        "r": "1.39"
      }
    ],
    [
      "circle",
      {
        "cx": "19.68",
        "cy": "12.79",
        "r": "0.76"
      }
    ],
    [
      "circle",
      {
        "cx": "18.53",
        "cy": "9.64",
        "r": "0.64"
      }
    ],
    [
      "circle",
      {
        "cx": "13.61",
        "cy": "12.01",
        "r": "1.44"
      }
    ],
    [
      "circle",
      {
        "cx": "17.98",
        "cy": "9.09",
        "r": "0.92"
      }
    ],
    [
      "circle",
      {
        "cx": "3.62",
        "cy": "6.55",
        "r": "0.75"
      }
    ],
    [
      "circle",
      {
        "cx": "10.23",
        "cy": "9.82",
        "r": "0.58"
      }
    ]
  ]
};

export const TaxoDrain = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.76 19.29 L 19.68 12.79 L 18.53 9.64 L 13.61 12.01 L 17.98 9.09 L 3.62 6.55 L 10.23 9.82" />
      <circle cx="2.76" cy="19.29" r="1.39" />
      <circle cx="19.68" cy="12.79" r="0.76" />
      <circle cx="18.53" cy="9.64" r="0.64" />
      <circle cx="13.61" cy="12.01" r="1.44" />
      <circle cx="17.98" cy="9.09" r="0.92" />
      <circle cx="3.62" cy="6.55" r="0.75" />
      <circle cx="10.23" cy="9.82" r="0.58" />
      {children}
    </svg>
  );
});

export default TaxoDrain;
