import React from 'react';

export const iconData = {
  "id": "XiphoidePure",
  "name": "XiphoidePure",
  "category": "GW",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.38 2.38 L 11.83 8.40 L 11.42 19.38 L 2.82 15.19 L 5.88 6.66 L 19.94 21.54"
      }
    ],
    [
      "circle",
      {
        "cx": "7.38",
        "cy": "2.38",
        "r": "1.37"
      }
    ],
    [
      "circle",
      {
        "cx": "11.83",
        "cy": "8.40",
        "r": "1.28"
      }
    ],
    [
      "circle",
      {
        "cx": "11.42",
        "cy": "19.38",
        "r": "1.36"
      }
    ],
    [
      "circle",
      {
        "cx": "2.82",
        "cy": "15.19",
        "r": "1.18"
      }
    ],
    [
      "circle",
      {
        "cx": "5.88",
        "cy": "6.66",
        "r": "1.39"
      }
    ],
    [
      "circle",
      {
        "cx": "19.94",
        "cy": "21.54",
        "r": "1.43"
      }
    ]
  ]
};

export const XiphoidePure = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.38 2.38 L 11.83 8.40 L 11.42 19.38 L 2.82 15.19 L 5.88 6.66 L 19.94 21.54" />
      <circle cx="7.38" cy="2.38" r="1.37" />
      <circle cx="11.83" cy="8.40" r="1.28" />
      <circle cx="11.42" cy="19.38" r="1.36" />
      <circle cx="2.82" cy="15.19" r="1.18" />
      <circle cx="5.88" cy="6.66" r="1.39" />
      <circle cx="19.94" cy="21.54" r="1.43" />
      {children}
    </svg>
  );
});

export default XiphoidePure;
