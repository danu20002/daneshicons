import React from 'react';

export const iconData = {
  "id": "MycoClass",
  "name": "MycoClass",
  "category": "WF",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.84 3.99 L 6.72 19.12 L 10.18 20.42 L 16.01 10.29 L 11.95 20.49 L 19.98 5.49"
      }
    ],
    [
      "circle",
      {
        "cx": "7.84",
        "cy": "3.99",
        "r": "1.16"
      }
    ],
    [
      "circle",
      {
        "cx": "6.72",
        "cy": "19.12",
        "r": "1.45"
      }
    ],
    [
      "circle",
      {
        "cx": "10.18",
        "cy": "20.42",
        "r": "1.43"
      }
    ],
    [
      "circle",
      {
        "cx": "16.01",
        "cy": "10.29",
        "r": "0.59"
      }
    ],
    [
      "circle",
      {
        "cx": "11.95",
        "cy": "20.49",
        "r": "0.67"
      }
    ],
    [
      "circle",
      {
        "cx": "19.98",
        "cy": "5.49",
        "r": "0.80"
      }
    ]
  ]
};

export const MycoClass = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.84 3.99 L 6.72 19.12 L 10.18 20.42 L 16.01 10.29 L 11.95 20.49 L 19.98 5.49" />
      <circle cx="7.84" cy="3.99" r="1.16" />
      <circle cx="6.72" cy="19.12" r="1.45" />
      <circle cx="10.18" cy="20.42" r="1.43" />
      <circle cx="16.01" cy="10.29" r="0.59" />
      <circle cx="11.95" cy="20.49" r="0.67" />
      <circle cx="19.98" cy="5.49" r="0.80" />
      {children}
    </svg>
  );
});

export default MycoClass;
