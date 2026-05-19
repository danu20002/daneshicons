import React from 'react';

export const iconData = {
  "id": "MonoShark",
  "name": "MonoShark",
  "category": "BT",
  "nodes": [
    [
      "path",
      {
        "d": "M 17.10 19.76 L 14.70 10.13 L 13.15 4.40 L 20.11 18.38"
      }
    ],
    [
      "circle",
      {
        "cx": "17.10",
        "cy": "19.76",
        "r": "0.68"
      }
    ],
    [
      "circle",
      {
        "cx": "14.70",
        "cy": "10.13",
        "r": "1.18"
      }
    ],
    [
      "circle",
      {
        "cx": "13.15",
        "cy": "4.40",
        "r": "0.88"
      }
    ],
    [
      "circle",
      {
        "cx": "20.11",
        "cy": "18.38",
        "r": "0.54"
      }
    ]
  ]
};

export const MonoShark = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 17.10 19.76 L 14.70 10.13 L 13.15 4.40 L 20.11 18.38" />
      <circle cx="17.10" cy="19.76" r="0.68" />
      <circle cx="14.70" cy="10.13" r="1.18" />
      <circle cx="13.15" cy="4.40" r="0.88" />
      <circle cx="20.11" cy="18.38" r="0.54" />
      {children}
    </svg>
  );
});

export default MonoShark;
