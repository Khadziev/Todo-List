import React, { useState } from "react";

import MySelect from "./MySelect";

function PostFilter() {
  const [filter, setFilter] = useState([]);
  return (
    <div>
      <MySelect
        value={filter.sort}
        onChange={(selectedSort) =>
          setFilter({ ...filter, sort: selectedSort })
        }
        defaultValue="сортировка"
        options={[
          { value: "title", name: "По возрастанию" },
          { value: "body", name: "По убыванию" },
        ]}
      />
    </div>
  );
}

export default PostFilter;
