import React from "react";
import Select from "@/components/sermons/FilterForm/Select";

const BookFilterForm = () => {
  return (
    <div className="grid grid-cols-2 gap-16 my-4">
      <Select name={"book"} label="Book:" options={[]} onChange={undefined} />
      <Select
        name={"chapter"}
        label="Chapter:"
        options={[]}
        onChange={undefined}
      />
    </div>
  );
};

export default BookFilterForm;
