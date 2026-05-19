import React from 'react';

export const iconData = {
  "id": "ProprioRobe",
  "name": "ProprioRobe",
  "category": "ER",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.35 6.09 L 10.86 2.99 L 17.02 18.49 L 7.97 3.20"
      }
    ],
    [
      "circle",
      {
        "cx": "9.35",
        "cy": "6.09",
        "r": "1.19"
      }
    ],
    [
      "circle",
      {
        "cx": "10.86",
        "cy": "2.99",
        "r": "1.47"
      }
    ],
    [
      "circle",
      {
        "cx": "17.02",
        "cy": "18.49",
        "r": "0.76"
      }
    ],
    [
      "circle",
      {
        "cx": "7.97",
        "cy": "3.20",
        "r": "0.53"
      }
    ]
  ]
};

export const ProprioRobe = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.35 6.09 L 10.86 2.99 L 17.02 18.49 L 7.97 3.20" />
      <circle cx="9.35" cy="6.09" r="1.19" />
      <circle cx="10.86" cy="2.99" r="1.47" />
      <circle cx="17.02" cy="18.49" r="0.76" />
      <circle cx="7.97" cy="3.20" r="0.53" />
      {children}
    </svg>
  );
});

export default ProprioRobe;
