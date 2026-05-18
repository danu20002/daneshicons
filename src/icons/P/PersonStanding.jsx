import React from 'react';

export const iconData = {
  id: "PersonStanding",
  name: "PersonStanding",
  category: "P",
  nodes: [["circle",{"cx":"12","cy":"5","r":"1"}],["path",{"d":"m9 20 3-6 3 6"}],["path",{"d":"m6 8 6 2 6-2"}],["path",{"d":"M12 10v4"}]]
};

export const PersonStanding = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <circle cx="12" cy="5" r="1" />
      <path d="m9 20 3-6 3 6" />
      <path d="m6 8 6 2 6-2" />
      <path d="M12 10v4" />
      {children}
    </svg>
  );
});

export default PersonStanding;
