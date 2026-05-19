import React from 'react';

export const iconData = {
  "id": "VedovoMutt",
  "name": "VedovoMutt",
  "category": "WY",
  "nodes": [
    [
      "path",
      {
        "d": "M 12.79 5.60 L 19.57 6.19 L 7.18 2.67 L 4.73 12.90 L 20.26 16.60"
      }
    ],
    [
      "circle",
      {
        "cx": "12.79",
        "cy": "5.60",
        "r": "1.31"
      }
    ],
    [
      "circle",
      {
        "cx": "19.57",
        "cy": "6.19",
        "r": "0.95"
      }
    ],
    [
      "circle",
      {
        "cx": "7.18",
        "cy": "2.67",
        "r": "1.45"
      }
    ],
    [
      "circle",
      {
        "cx": "4.73",
        "cy": "12.90",
        "r": "1.27"
      }
    ],
    [
      "circle",
      {
        "cx": "20.26",
        "cy": "16.60",
        "r": "0.85"
      }
    ]
  ]
};

export const VedovoMutt = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 12.79 5.60 L 19.57 6.19 L 7.18 2.67 L 4.73 12.90 L 20.26 16.60" />
      <circle cx="12.79" cy="5.60" r="1.31" />
      <circle cx="19.57" cy="6.19" r="0.95" />
      <circle cx="7.18" cy="2.67" r="1.45" />
      <circle cx="4.73" cy="12.90" r="1.27" />
      <circle cx="20.26" cy="16.60" r="0.85" />
      {children}
    </svg>
  );
});

export default VedovoMutt;
