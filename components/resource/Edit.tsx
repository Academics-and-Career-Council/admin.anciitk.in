import React, { useState } from "react";
import Tree from "antd/lib/tree";
import {
  getDataEdit,
  getDataEdit_getResourcesByWing,
} from "../../container/resource/__generated__/getDataEdit";
import router from "next/router";
import { toTitleCase } from "../../pkg/helpers";

const Edit: React.FC<{ wing: string; data: getDataEdit_getResourcesByWing[] }> =
  ({ wing, data }) => {
    const treeData = [
      {
        title: toTitleCase(wing),
        key: "0",
        // icon: <CarryOutOutlined />,
        children: data.map((heading) => {
          return {
            title: heading.title,
            key: heading.id,
            // icon: <CarryOutOutlined />,
            children: heading.objects.map((item) => {
              return { title: item.name, key: item.id };
            }),
          };
        }),
      },
    ];

    const [expandedKeys, setExpandedKeys] = useState<React.Key[]>(["0"]);
    const [selectedKeys, setSelectedKeys] = useState<React.Key[]>([]);
    const [autoExpandParent, setAutoExpandParent] = useState<boolean>(true);

    const onExpand = (expandedKeysValue: React.Key[]) => {
      // if not set autoExpandParent to false, if children expanded, parent can not collapse.
      // or, you can remove all expanded children keys.
      setExpandedKeys(expandedKeysValue);
      setAutoExpandParent(false);
    };

    const onSelect = (selectedKeysValue: React.Key[], info: any) => {
      if (info.node.pos.split("-").length === 4) {
        router.push(
          `/resource?wing=${wing}&mode=edit&id=${info.node.key}`,
          undefined,
          { shallow: true }
        );
      }
      setSelectedKeys(selectedKeysValue);
    };

    return (
      <Tree
        onExpand={onExpand}
        expandedKeys={expandedKeys}
        autoExpandParent={autoExpandParent}
        onSelect={onSelect}
        selectedKeys={selectedKeys}
        treeData={treeData}
      />
    );
  };

export default Edit;
