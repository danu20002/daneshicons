import React from 'react';

export const iconData = {
  "id": "StiloHip",
  "name": "StiloHip",
  "category": "GW",
  "nodes": [
    [
      "path",
      {
        "d": "M 14.52 17.11 L 18.34 9.72 L 19.22 7.86 L 13.64 16.66 L 6.96 20.53 L 19.21 13.83 L 2.34 20.70 L 4.95 7.61"
      }
    ],
    [
      "circle",
      {
        "cx": "14.52",
        "cy": "17.11",
        "r": "0.66"
      }
    ],
    [
      "circle",
      {
        "cx": "18.34",
        "cy": "9.72",
        "r": "1.14"
      }
    ],
    [
      "circle",
      {
        "cx": "19.22",
        "cy": "7.86",
        "r": "1.04"
      }
    ],
    [
      "circle",
      {
        "cx": "13.64",
        "cy": "16.66",
        "r": "1.19"
      }
    ],
    [
      "circle",
      {
        "cx": "6.96",
        "cy": "20.53",
        "r": "1.49"
      }
    ],
    [
      "circle",
      {
        "cx": "19.21",
        "cy": "13.83",
        "r": "0.80"
      }
    ],
    [
      "circle",
      {
        "cx": "2.34",
        "cy": "20.70",
        "r": "0.93"
      }
    ],
    [
      "circle",
      {
        "cx": "4.95",
        "cy": "7.61",
        "r": "0.99"
      }
    ]
  ]
};

export const StiloHip = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 14.52 17.11 L 18.34 9.72 L 19.22 7.86 L 13.64 16.66 L 6.96 20.53 L 19.21 13.83 L 2.34 20.70 L 4.95 7.61" />
      <circle cx="14.52" cy="17.11" r="0.66" />
      <circle cx="18.34" cy="9.72" r="1.14" />
      <circle cx="19.22" cy="7.86" r="1.04" />
      <circle cx="13.64" cy="16.66" r="1.19" />
      <circle cx="6.96" cy="20.53" r="1.49" />
      <circle cx="19.21" cy="13.83" r="0.80" />
      <circle cx="2.34" cy="20.70" r="0.93" />
      <circle cx="4.95" cy="7.61" r="0.99" />
      {children}
    </svg>
  );
});

export default StiloHip;
