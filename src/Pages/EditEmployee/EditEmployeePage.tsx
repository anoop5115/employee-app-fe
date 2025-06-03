import { FormSection } from "../../components/formsection/formsection";

import { LayoutHeading } from "../../components/LayoutHeading/LayoutHeading";

export const EditEmployeePage = () => {
  return (
    <>
      <LayoutHeading text="Edit Employee" iscreate={false}></LayoutHeading>
      <FormSection></FormSection>
    </>
  );
};
