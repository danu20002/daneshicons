import React from 'react';

export const iconData = {
  "id": "VelociSpine",
  "name": "VelociSpine",
  "category": "OX",
  "nodes": [
    [
      "path",
      {
        "d": "M 11.06 17.06 L 7.83 4.85 L 20.74 18.03 L 8.77 6.72 L 11.74 17.53 L 13.61 4.81 L 3.53 2.72"
      }
    ],
    [
      "circle",
      {
        "cx": "11.06",
        "cy": "17.06",
        "r": "0.60"
      }
    ],
    [
      "circle",
      {
        "cx": "7.83",
        "cy": "4.85",
        "r": "0.80"
      }
    ],
    [
      "circle",
      {
        "cx": "20.74",
        "cy": "18.03",
        "r": "0.87"
      }
    ],
    [
      "circle",
      {
        "cx": "8.77",
        "cy": "6.72",
        "r": "1.43"
      }
    ],
    [
      "circle",
      {
        "cx": "11.74",
        "cy": "17.53",
        "r": "1.16"
      }
    ],
    [
      "circle",
      {
        "cx": "13.61",
        "cy": "4.81",
        "r": "0.55"
      }
    ],
    [
      "circle",
      {
        "cx": "3.53",
        "cy": "2.72",
        "r": "0.73"
      }
    ]
  ]
};

export const VelociSpine = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 11.06 17.06 L 7.83 4.85 L 20.74 18.03 L 8.77 6.72 L 11.74 17.53 L 13.61 4.81 L 3.53 2.72" />
      <circle cx="11.06" cy="17.06" r="0.60" />
      <circle cx="7.83" cy="4.85" r="0.80" />
      <circle cx="20.74" cy="18.03" r="0.87" />
      <circle cx="8.77" cy="6.72" r="1.43" />
      <circle cx="11.74" cy="17.53" r="1.16" />
      <circle cx="13.61" cy="4.81" r="0.55" />
      <circle cx="3.53" cy="2.72" r="0.73" />
      {children}
    </svg>
  );
});

export default VelociSpine;
