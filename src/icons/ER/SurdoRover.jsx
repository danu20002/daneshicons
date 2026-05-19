import React from 'react';

export const iconData = {
  "id": "SurdoRover",
  "name": "SurdoRover",
  "category": "ER",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.98 2.96 L 17.80 4.55 L 21.10 10.79 L 10.10 7.82 L 21.75 4.81 L 20.69 2.61"
      }
    ],
    [
      "circle",
      {
        "cx": "21.98",
        "cy": "2.96",
        "r": "0.81"
      }
    ],
    [
      "circle",
      {
        "cx": "17.80",
        "cy": "4.55",
        "r": "1.07"
      }
    ],
    [
      "circle",
      {
        "cx": "21.10",
        "cy": "10.79",
        "r": "0.65"
      }
    ],
    [
      "circle",
      {
        "cx": "10.10",
        "cy": "7.82",
        "r": "1.30"
      }
    ],
    [
      "circle",
      {
        "cx": "21.75",
        "cy": "4.81",
        "r": "0.92"
      }
    ],
    [
      "circle",
      {
        "cx": "20.69",
        "cy": "2.61",
        "r": "1.38"
      }
    ]
  ]
};

export const SurdoRover = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.98 2.96 L 17.80 4.55 L 21.10 10.79 L 10.10 7.82 L 21.75 4.81 L 20.69 2.61" />
      <circle cx="21.98" cy="2.96" r="0.81" />
      <circle cx="17.80" cy="4.55" r="1.07" />
      <circle cx="21.10" cy="10.79" r="0.65" />
      <circle cx="10.10" cy="7.82" r="1.30" />
      <circle cx="21.75" cy="4.81" r="0.92" />
      <circle cx="20.69" cy="2.61" r="1.38" />
      {children}
    </svg>
  );
});

export default SurdoRover;
