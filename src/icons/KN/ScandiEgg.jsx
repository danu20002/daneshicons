import React from 'react';

export const iconData = {
  "id": "ScandiEgg",
  "name": "ScandiEgg",
  "category": "KN",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.17 2.27 L 11.91 2.91 L 7.81 12.27 L 19.82 10.19 L 4.22 3.12 L 7.97 10.15"
      }
    ],
    [
      "circle",
      {
        "cx": "2.17",
        "cy": "2.27",
        "r": "1.16"
      }
    ],
    [
      "circle",
      {
        "cx": "11.91",
        "cy": "2.91",
        "r": "1.16"
      }
    ],
    [
      "circle",
      {
        "cx": "7.81",
        "cy": "12.27",
        "r": "1.07"
      }
    ],
    [
      "circle",
      {
        "cx": "19.82",
        "cy": "10.19",
        "r": "0.69"
      }
    ],
    [
      "circle",
      {
        "cx": "4.22",
        "cy": "3.12",
        "r": "0.56"
      }
    ],
    [
      "circle",
      {
        "cx": "7.97",
        "cy": "10.15",
        "r": "1.08"
      }
    ]
  ]
};

export const ScandiEgg = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.17 2.27 L 11.91 2.91 L 7.81 12.27 L 19.82 10.19 L 4.22 3.12 L 7.97 10.15" />
      <circle cx="2.17" cy="2.27" r="1.16" />
      <circle cx="11.91" cy="2.91" r="1.16" />
      <circle cx="7.81" cy="12.27" r="1.07" />
      <circle cx="19.82" cy="10.19" r="0.69" />
      <circle cx="4.22" cy="3.12" r="0.56" />
      <circle cx="7.97" cy="10.15" r="1.08" />
      {children}
    </svg>
  );
});

export default ScandiEgg;
