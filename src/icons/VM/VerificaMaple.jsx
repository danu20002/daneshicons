import React from 'react';

export const iconData = {
  "id": "VerificaMaple",
  "name": "VerificaMaple",
  "category": "VM",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.26 4.16 L 18.05 2.67 L 18.08 17.47 L 11.45 7.89"
      }
    ],
    [
      "circle",
      {
        "cx": "6.26",
        "cy": "4.16",
        "r": "1.35"
      }
    ],
    [
      "circle",
      {
        "cx": "18.05",
        "cy": "2.67",
        "r": "1.18"
      }
    ],
    [
      "circle",
      {
        "cx": "18.08",
        "cy": "17.47",
        "r": "0.64"
      }
    ],
    [
      "circle",
      {
        "cx": "11.45",
        "cy": "7.89",
        "r": "1.31"
      }
    ]
  ]
};

export const VerificaMaple = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.26 4.16 L 18.05 2.67 L 18.08 17.47 L 11.45 7.89" />
      <circle cx="6.26" cy="4.16" r="1.35" />
      <circle cx="18.05" cy="2.67" r="1.18" />
      <circle cx="18.08" cy="17.47" r="0.64" />
      <circle cx="11.45" cy="7.89" r="1.31" />
      {children}
    </svg>
  );
});

export default VerificaMaple;
