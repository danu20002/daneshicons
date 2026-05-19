import React from 'react';

export const iconData = {
  "id": "LongiShell",
  "name": "LongiShell",
  "category": "TH",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.97 7.44 L 12.36 5.77 L 2.37 4.37 L 9.27 18.22 L 15.52 8.13 L 7.37 17.12 L 15.90 8.09"
      }
    ],
    [
      "circle",
      {
        "cx": "21.97",
        "cy": "7.44",
        "r": "0.92"
      }
    ],
    [
      "circle",
      {
        "cx": "12.36",
        "cy": "5.77",
        "r": "0.99"
      }
    ],
    [
      "circle",
      {
        "cx": "2.37",
        "cy": "4.37",
        "r": "0.93"
      }
    ],
    [
      "circle",
      {
        "cx": "9.27",
        "cy": "18.22",
        "r": "0.90"
      }
    ],
    [
      "circle",
      {
        "cx": "15.52",
        "cy": "8.13",
        "r": "1.32"
      }
    ],
    [
      "circle",
      {
        "cx": "7.37",
        "cy": "17.12",
        "r": "1.11"
      }
    ],
    [
      "circle",
      {
        "cx": "15.90",
        "cy": "8.09",
        "r": "0.67"
      }
    ]
  ]
};

export const LongiShell = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.97 7.44 L 12.36 5.77 L 2.37 4.37 L 9.27 18.22 L 15.52 8.13 L 7.37 17.12 L 15.90 8.09" />
      <circle cx="21.97" cy="7.44" r="0.92" />
      <circle cx="12.36" cy="5.77" r="0.99" />
      <circle cx="2.37" cy="4.37" r="0.93" />
      <circle cx="9.27" cy="18.22" r="0.90" />
      <circle cx="15.52" cy="8.13" r="1.32" />
      <circle cx="7.37" cy="17.12" r="1.11" />
      <circle cx="15.90" cy="8.09" r="0.67" />
      {children}
    </svg>
  );
});

export default LongiShell;
