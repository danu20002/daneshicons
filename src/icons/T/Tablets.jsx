import React from 'react';

export const iconData = {
  id: "Tablets",
  name: "Tablets",
  category: "T",
  nodes: [["circle",{"cx":"7","cy":"7","r":"5"}],["circle",{"cx":"17","cy":"17","r":"5"}],["path",{"d":"M12 17h10"}],["path",{"d":"m3.46 10.54 7.08-7.08"}]]
};

export const Tablets = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <circle cx="7" cy="7" r="5" />
      <circle cx="17" cy="17" r="5" />
      <path d="M12 17h10" />
      <path d="m3.46 10.54 7.08-7.08" />
      {children}
    </svg>
  );
});

export default Tablets;
