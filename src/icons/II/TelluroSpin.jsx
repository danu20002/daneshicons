import React from 'react';

export const iconData = {
  "id": "TelluroSpin",
  "name": "TelluroSpin",
  "category": "II",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.05 10.94 L 2.10 14.15 L 21.93 17.04 L 15.69 18.20"
      }
    ],
    [
      "circle",
      {
        "cx": "5.05",
        "cy": "10.94",
        "r": "1.36"
      }
    ],
    [
      "circle",
      {
        "cx": "2.10",
        "cy": "14.15",
        "r": "0.73"
      }
    ],
    [
      "circle",
      {
        "cx": "21.93",
        "cy": "17.04",
        "r": "1.02"
      }
    ],
    [
      "circle",
      {
        "cx": "15.69",
        "cy": "18.20",
        "r": "0.52"
      }
    ]
  ]
};

export const TelluroSpin = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.05 10.94 L 2.10 14.15 L 21.93 17.04 L 15.69 18.20" />
      <circle cx="5.05" cy="10.94" r="1.36" />
      <circle cx="2.10" cy="14.15" r="0.73" />
      <circle cx="21.93" cy="17.04" r="1.02" />
      <circle cx="15.69" cy="18.20" r="0.52" />
      {children}
    </svg>
  );
});

export default TelluroSpin;
