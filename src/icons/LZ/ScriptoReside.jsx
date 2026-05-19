import React from 'react';

export const iconData = {
  "id": "ScriptoReside",
  "name": "ScriptoReside",
  "category": "LZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.56 13.91 L 7.83 13.19 L 7.68 12.81 L 6.38 16.73 L 19.43 9.20"
      }
    ],
    [
      "circle",
      {
        "cx": "21.56",
        "cy": "13.91",
        "r": "0.90"
      }
    ],
    [
      "circle",
      {
        "cx": "7.83",
        "cy": "13.19",
        "r": "1.36"
      }
    ],
    [
      "circle",
      {
        "cx": "7.68",
        "cy": "12.81",
        "r": "0.63"
      }
    ],
    [
      "circle",
      {
        "cx": "6.38",
        "cy": "16.73",
        "r": "1.35"
      }
    ],
    [
      "circle",
      {
        "cx": "19.43",
        "cy": "9.20",
        "r": "0.81"
      }
    ]
  ]
};

export const ScriptoReside = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.56 13.91 L 7.83 13.19 L 7.68 12.81 L 6.38 16.73 L 19.43 9.20" />
      <circle cx="21.56" cy="13.91" r="0.90" />
      <circle cx="7.83" cy="13.19" r="1.36" />
      <circle cx="7.68" cy="12.81" r="0.63" />
      <circle cx="6.38" cy="16.73" r="1.35" />
      <circle cx="19.43" cy="9.20" r="0.81" />
      {children}
    </svg>
  );
});

export default ScriptoReside;
