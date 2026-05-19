import React from 'react';

export const iconData = {
  "id": "XilinoThrottle",
  "name": "XilinoThrottle",
  "category": "VM",
  "nodes": [
    [
      "path",
      {
        "d": "M 11.83 2.90 L 17.12 6.55 L 7.03 14.48 L 10.49 21.53 L 20.65 21.77 L 17.21 14.38"
      }
    ],
    [
      "circle",
      {
        "cx": "11.83",
        "cy": "2.90",
        "r": "1.49"
      }
    ],
    [
      "circle",
      {
        "cx": "17.12",
        "cy": "6.55",
        "r": "0.92"
      }
    ],
    [
      "circle",
      {
        "cx": "7.03",
        "cy": "14.48",
        "r": "1.22"
      }
    ],
    [
      "circle",
      {
        "cx": "10.49",
        "cy": "21.53",
        "r": "1.13"
      }
    ],
    [
      "circle",
      {
        "cx": "20.65",
        "cy": "21.77",
        "r": "0.51"
      }
    ],
    [
      "circle",
      {
        "cx": "17.21",
        "cy": "14.38",
        "r": "0.87"
      }
    ]
  ]
};

export const XilinoThrottle = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 11.83 2.90 L 17.12 6.55 L 7.03 14.48 L 10.49 21.53 L 20.65 21.77 L 17.21 14.38" />
      <circle cx="11.83" cy="2.90" r="1.49" />
      <circle cx="17.12" cy="6.55" r="0.92" />
      <circle cx="7.03" cy="14.48" r="1.22" />
      <circle cx="10.49" cy="21.53" r="1.13" />
      <circle cx="20.65" cy="21.77" r="0.51" />
      <circle cx="17.21" cy="14.38" r="0.87" />
      {children}
    </svg>
  );
});

export default XilinoThrottle;
