import React from 'react';

export const iconData = {
  "id": "SestoOpinion",
  "name": "SestoOpinion",
  "category": "NL",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.61 10.29 L 13.95 21.30 L 2.03 11.65 L 5.57 5.72 L 11.37 13.99 L 18.75 12.30 L 21.66 9.33 L 2.29 21.40"
      }
    ],
    [
      "circle",
      {
        "cx": "6.61",
        "cy": "10.29",
        "r": "1.38"
      }
    ],
    [
      "circle",
      {
        "cx": "13.95",
        "cy": "21.30",
        "r": "1.49"
      }
    ],
    [
      "circle",
      {
        "cx": "2.03",
        "cy": "11.65",
        "r": "0.59"
      }
    ],
    [
      "circle",
      {
        "cx": "5.57",
        "cy": "5.72",
        "r": "1.50"
      }
    ],
    [
      "circle",
      {
        "cx": "11.37",
        "cy": "13.99",
        "r": "0.75"
      }
    ],
    [
      "circle",
      {
        "cx": "18.75",
        "cy": "12.30",
        "r": "1.34"
      }
    ],
    [
      "circle",
      {
        "cx": "21.66",
        "cy": "9.33",
        "r": "1.26"
      }
    ],
    [
      "circle",
      {
        "cx": "2.29",
        "cy": "21.40",
        "r": "0.94"
      }
    ]
  ]
};

export const SestoOpinion = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.61 10.29 L 13.95 21.30 L 2.03 11.65 L 5.57 5.72 L 11.37 13.99 L 18.75 12.30 L 21.66 9.33 L 2.29 21.40" />
      <circle cx="6.61" cy="10.29" r="1.38" />
      <circle cx="13.95" cy="21.30" r="1.49" />
      <circle cx="2.03" cy="11.65" r="0.59" />
      <circle cx="5.57" cy="5.72" r="1.50" />
      <circle cx="11.37" cy="13.99" r="0.75" />
      <circle cx="18.75" cy="12.30" r="1.34" />
      <circle cx="21.66" cy="9.33" r="1.26" />
      <circle cx="2.29" cy="21.40" r="0.94" />
      {children}
    </svg>
  );
});

export default SestoOpinion;
