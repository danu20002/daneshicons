import React from 'react';

export const iconData = {
  "id": "SpectroSpill",
  "name": "SpectroSpill",
  "category": "QJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.77 17.42 L 20.38 12.88 L 4.12 9.66 L 15.81 7.05 L 6.44 14.12 L 13.45 18.10"
      }
    ],
    [
      "circle",
      {
        "cx": "5.77",
        "cy": "17.42",
        "r": "1.16"
      }
    ],
    [
      "circle",
      {
        "cx": "20.38",
        "cy": "12.88",
        "r": "0.78"
      }
    ],
    [
      "circle",
      {
        "cx": "4.12",
        "cy": "9.66",
        "r": "1.00"
      }
    ],
    [
      "circle",
      {
        "cx": "15.81",
        "cy": "7.05",
        "r": "1.03"
      }
    ],
    [
      "circle",
      {
        "cx": "6.44",
        "cy": "14.12",
        "r": "1.46"
      }
    ],
    [
      "circle",
      {
        "cx": "13.45",
        "cy": "18.10",
        "r": "0.97"
      }
    ]
  ]
};

export const SpectroSpill = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.77 17.42 L 20.38 12.88 L 4.12 9.66 L 15.81 7.05 L 6.44 14.12 L 13.45 18.10" />
      <circle cx="5.77" cy="17.42" r="1.16" />
      <circle cx="20.38" cy="12.88" r="0.78" />
      <circle cx="4.12" cy="9.66" r="1.00" />
      <circle cx="15.81" cy="7.05" r="1.03" />
      <circle cx="6.44" cy="14.12" r="1.46" />
      <circle cx="13.45" cy="18.10" r="0.97" />
      {children}
    </svg>
  );
});

export default SpectroSpill;
