import React from 'react';

export const iconData = {
  "id": "VerificaWarrior",
  "name": "VerificaWarrior",
  "category": "DF",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.43 3.51 L 18.44 12.13 L 2.64 20.50 L 21.85 5.15"
      }
    ],
    [
      "circle",
      {
        "cx": "9.43",
        "cy": "3.51",
        "r": "1.10"
      }
    ],
    [
      "circle",
      {
        "cx": "18.44",
        "cy": "12.13",
        "r": "0.75"
      }
    ],
    [
      "circle",
      {
        "cx": "2.64",
        "cy": "20.50",
        "r": "0.65"
      }
    ],
    [
      "circle",
      {
        "cx": "21.85",
        "cy": "5.15",
        "r": "1.18"
      }
    ]
  ]
};

export const VerificaWarrior = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.43 3.51 L 18.44 12.13 L 2.64 20.50 L 21.85 5.15" />
      <circle cx="9.43" cy="3.51" r="1.10" />
      <circle cx="18.44" cy="12.13" r="0.75" />
      <circle cx="2.64" cy="20.50" r="0.65" />
      <circle cx="21.85" cy="5.15" r="1.18" />
      {children}
    </svg>
  );
});

export default VerificaWarrior;
