import React from 'react';

export const iconData = {
  "id": "XenotimWard",
  "name": "XenotimWard",
  "category": "KN",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.70 18.78 L 18.73 20.47 L 9.51 14.38 L 18.87 18.12 L 18.17 16.82"
      }
    ],
    [
      "circle",
      {
        "cx": "10.70",
        "cy": "18.78",
        "r": "1.46"
      }
    ],
    [
      "circle",
      {
        "cx": "18.73",
        "cy": "20.47",
        "r": "0.72"
      }
    ],
    [
      "circle",
      {
        "cx": "9.51",
        "cy": "14.38",
        "r": "1.41"
      }
    ],
    [
      "circle",
      {
        "cx": "18.87",
        "cy": "18.12",
        "r": "0.94"
      }
    ],
    [
      "circle",
      {
        "cx": "18.17",
        "cy": "16.82",
        "r": "1.05"
      }
    ]
  ]
};

export const XenotimWard = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.70 18.78 L 18.73 20.47 L 9.51 14.38 L 18.87 18.12 L 18.17 16.82" />
      <circle cx="10.70" cy="18.78" r="1.46" />
      <circle cx="18.73" cy="20.47" r="0.72" />
      <circle cx="9.51" cy="14.38" r="1.41" />
      <circle cx="18.87" cy="18.12" r="0.94" />
      <circle cx="18.17" cy="16.82" r="1.05" />
      {children}
    </svg>
  );
});

export default XenotimWard;
