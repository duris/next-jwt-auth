import React from "react";

type Props = {
  firstName: string;
  lastName: string;
  age: number;
  numbers: Array<number>;
  children: React.ReactNode;
};

const Propscomp = ({ firstName, lastName, age, children }: Props) => {
  return (
    <>
      <h1>
        Hello {firstName} {lastName} and my age is {age}
        and I staying {children}
      </h1>
    </>
  );
};

export default Propscomp;
