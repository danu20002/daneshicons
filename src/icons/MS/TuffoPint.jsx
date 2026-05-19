import React from 'react';

export const iconData = {
  "id": "TuffoPint",
  "name": "TuffoPint",
  "category": "MS",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.97 11.17 L 14.97 21.00 L 19.44 5.62 L 3.16 5.17 L 9.90 6.36 L 9.99 2.23 L 4.16 17.29 L 16.93 2.81"
      }
    ],
    [
      "circle",
      {
        "cx": "9.97",
        "cy": "11.17",
        "r": "0.89"
      }
    ],
    [
      "circle",
      {
        "cx": "14.97",
        "cy": "21.00",
        "r": "1.35"
      }
    ],
    [
      "circle",
      {
        "cx": "19.44",
        "cy": "5.62",
        "r": "0.90"
      }
    ],
    [
      "circle",
      {
        "cx": "3.16",
        "cy": "5.17",
        "r": "1.09"
      }
    ],
    [
      "circle",
      {
        "cx": "9.90",
        "cy": "6.36",
        "r": "1.47"
      }
    ],
    [
      "circle",
      {
        "cx": "9.99",
        "cy": "2.23",
        "r": "1.08"
      }
    ],
    [
      "circle",
      {
        "cx": "4.16",
        "cy": "17.29",
        "r": "1.28"
      }
    ],
    [
      "circle",
      {
        "cx": "16.93",
        "cy": "2.81",
        "r": "0.62"
      }
    ]
  ]
};

export const TuffoPint = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.97 11.17 L 14.97 21.00 L 19.44 5.62 L 3.16 5.17 L 9.90 6.36 L 9.99 2.23 L 4.16 17.29 L 16.93 2.81" />
      <circle cx="9.97" cy="11.17" r="0.89" />
      <circle cx="14.97" cy="21.00" r="1.35" />
      <circle cx="19.44" cy="5.62" r="0.90" />
      <circle cx="3.16" cy="5.17" r="1.09" />
      <circle cx="9.90" cy="6.36" r="1.47" />
      <circle cx="9.99" cy="2.23" r="1.08" />
      <circle cx="4.16" cy="17.29" r="1.28" />
      <circle cx="16.93" cy="2.81" r="0.62" />
      {children}
    </svg>
  );
});

export default TuffoPint;
