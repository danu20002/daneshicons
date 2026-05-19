import React from 'react';

export const iconData = {
  "id": "ValicoProgram",
  "name": "ValicoProgram",
  "category": "ZD",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.01 21.80 L 13.91 8.18 L 4.61 8.46 L 18.01 19.09"
      }
    ],
    [
      "circle",
      {
        "cx": "3.01",
        "cy": "21.80",
        "r": "0.66"
      }
    ],
    [
      "circle",
      {
        "cx": "13.91",
        "cy": "8.18",
        "r": "1.27"
      }
    ],
    [
      "circle",
      {
        "cx": "4.61",
        "cy": "8.46",
        "r": "0.66"
      }
    ],
    [
      "circle",
      {
        "cx": "18.01",
        "cy": "19.09",
        "r": "0.52"
      }
    ]
  ]
};

export const ValicoProgram = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.01 21.80 L 13.91 8.18 L 4.61 8.46 L 18.01 19.09" />
      <circle cx="3.01" cy="21.80" r="0.66" />
      <circle cx="13.91" cy="8.18" r="1.27" />
      <circle cx="4.61" cy="8.46" r="0.66" />
      <circle cx="18.01" cy="19.09" r="0.52" />
      {children}
    </svg>
  );
});

export default ValicoProgram;
