import React from 'react';

export const iconData = {
  "id": "QuintScroll",
  "name": "QuintScroll",
  "category": "JB",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.80 5.07 L 7.68 17.00 L 8.79 16.01 L 17.52 14.89 L 21.15 11.36 L 17.25 20.37 L 2.09 2.49"
      }
    ],
    [
      "circle",
      {
        "cx": "20.80",
        "cy": "5.07",
        "r": "1.22"
      }
    ],
    [
      "circle",
      {
        "cx": "7.68",
        "cy": "17.00",
        "r": "1.14"
      }
    ],
    [
      "circle",
      {
        "cx": "8.79",
        "cy": "16.01",
        "r": "1.44"
      }
    ],
    [
      "circle",
      {
        "cx": "17.52",
        "cy": "14.89",
        "r": "0.71"
      }
    ],
    [
      "circle",
      {
        "cx": "21.15",
        "cy": "11.36",
        "r": "0.89"
      }
    ],
    [
      "circle",
      {
        "cx": "17.25",
        "cy": "20.37",
        "r": "0.70"
      }
    ],
    [
      "circle",
      {
        "cx": "2.09",
        "cy": "2.49",
        "r": "0.69"
      }
    ]
  ]
};

export const QuintScroll = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.80 5.07 L 7.68 17.00 L 8.79 16.01 L 17.52 14.89 L 21.15 11.36 L 17.25 20.37 L 2.09 2.49" />
      <circle cx="20.80" cy="5.07" r="1.22" />
      <circle cx="7.68" cy="17.00" r="1.14" />
      <circle cx="8.79" cy="16.01" r="1.44" />
      <circle cx="17.52" cy="14.89" r="0.71" />
      <circle cx="21.15" cy="11.36" r="0.89" />
      <circle cx="17.25" cy="20.37" r="0.70" />
      <circle cx="2.09" cy="2.49" r="0.69" />
      {children}
    </svg>
  );
});

export default QuintScroll;
