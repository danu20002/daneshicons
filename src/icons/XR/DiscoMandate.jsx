import React from 'react';

export const iconData = {
  "id": "DiscoMandate",
  "name": "DiscoMandate",
  "category": "XR",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.51 20.78 L 4.20 12.65 L 18.87 20.33 L 4.10 12.15"
      }
    ],
    [
      "circle",
      {
        "cx": "3.51",
        "cy": "20.78",
        "r": "0.65"
      }
    ],
    [
      "circle",
      {
        "cx": "4.20",
        "cy": "12.65",
        "r": "1.45"
      }
    ],
    [
      "circle",
      {
        "cx": "18.87",
        "cy": "20.33",
        "r": "0.83"
      }
    ],
    [
      "circle",
      {
        "cx": "4.10",
        "cy": "12.15",
        "r": "0.90"
      }
    ]
  ]
};

export const DiscoMandate = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.51 20.78 L 4.20 12.65 L 18.87 20.33 L 4.10 12.15" />
      <circle cx="3.51" cy="20.78" r="0.65" />
      <circle cx="4.20" cy="12.65" r="1.45" />
      <circle cx="18.87" cy="20.33" r="0.83" />
      <circle cx="4.10" cy="12.15" r="0.90" />
      {children}
    </svg>
  );
});

export default DiscoMandate;
