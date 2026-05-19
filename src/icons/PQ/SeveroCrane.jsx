import React from 'react';

export const iconData = {
  "id": "SeveroCrane",
  "name": "SeveroCrane",
  "category": "PQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 18.03 19.51 L 8.38 6.51 L 13.43 21.83 L 11.06 9.94 L 15.96 18.05 L 6.28 6.76 L 13.56 9.56 L 15.67 12.36"
      }
    ],
    [
      "circle",
      {
        "cx": "18.03",
        "cy": "19.51",
        "r": "0.94"
      }
    ],
    [
      "circle",
      {
        "cx": "8.38",
        "cy": "6.51",
        "r": "0.56"
      }
    ],
    [
      "circle",
      {
        "cx": "13.43",
        "cy": "21.83",
        "r": "0.53"
      }
    ],
    [
      "circle",
      {
        "cx": "11.06",
        "cy": "9.94",
        "r": "0.88"
      }
    ],
    [
      "circle",
      {
        "cx": "15.96",
        "cy": "18.05",
        "r": "0.82"
      }
    ],
    [
      "circle",
      {
        "cx": "6.28",
        "cy": "6.76",
        "r": "0.75"
      }
    ],
    [
      "circle",
      {
        "cx": "13.56",
        "cy": "9.56",
        "r": "0.54"
      }
    ],
    [
      "circle",
      {
        "cx": "15.67",
        "cy": "12.36",
        "r": "1.34"
      }
    ]
  ]
};

export const SeveroCrane = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 18.03 19.51 L 8.38 6.51 L 13.43 21.83 L 11.06 9.94 L 15.96 18.05 L 6.28 6.76 L 13.56 9.56 L 15.67 12.36" />
      <circle cx="18.03" cy="19.51" r="0.94" />
      <circle cx="8.38" cy="6.51" r="0.56" />
      <circle cx="13.43" cy="21.83" r="0.53" />
      <circle cx="11.06" cy="9.94" r="0.88" />
      <circle cx="15.96" cy="18.05" r="0.82" />
      <circle cx="6.28" cy="6.76" r="0.75" />
      <circle cx="13.56" cy="9.56" r="0.54" />
      <circle cx="15.67" cy="12.36" r="1.34" />
      {children}
    </svg>
  );
});

export default SeveroCrane;
