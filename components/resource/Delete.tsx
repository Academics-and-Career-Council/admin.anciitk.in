import React, { Children, useEffect, useState } from "react";
import Tree from "antd/lib/tree";
import {
  getDataEdit,
  getDataEdit_getResourcesByWing,
} from "../../container/resource/__generated__/getDataEdit";
import router from "next/router";
import { toTitleCase } from "../../pkg/helpers";
import { Button, Form, Modal, message, Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { getDeleteData } from "../../pkg/helpers";
import deleteResource from "../../actions/resource/delete";

const Delete: React.FC<{
  wing: string;
  data: getDataEdit_getResourcesByWing[];
}> = ({ wing, data }) => {
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
  const [loading, setLoading] = useState<boolean>(false);
  const confirm = Modal.confirm;

  const onExpand = (expandedKeysValue: React.Key[]) => {
    // if not set autoExpandParent to false, if children expanded, parent can not collapse.
    // or, you can remove all expanded children keys.
    setExpandedKeys(expandedKeysValue);
    setAutoExpandParent(false);
  };

  const onConfirmDelete = () => {};

  const onSelect = (selectedKeysValue: React.Key[], info: any) => {
    setSelectedKeys(selectedKeysValue);
    console.log(info.node.pos);
    if (info.node.pos.split("-").length === 4) {
      const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
      // router.push(
      //   `/resource?wing=${wing}&mode=edit&id=${info.node.key}`,
      //   undefined,
      //   { shallow: false }
      // );
      console.log(getDeleteData(
        info.node.pos,
        String(selectedKeysValue[0]),
        data
      ))
      confirm({
        title: loading ? (
          <Spin indicator={antIcon} />
        ) : (
          "Dou you want to delete?"
          ),
        onOk() {
          setLoading(true);
          return new Promise((resolve) => {
            setTimeout(() => {
              resolve(
                deleteResource(
                  getDeleteData(
                    info.node.pos,
                    String(selectedKeysValue[0]),
                    data
                  )
                )
                  .then((data) => {
                    message.success("Resource Deleted Successfully");
                    setLoading(false);
                    router.push(
                      `/resource?wing=${router.query.wing}&mode=delete`,
                      undefined,
                      { shallow: true }
                    );
                  })
                  .catch((err) => {
                    console.log(err);
                    message.error(err.message);
                    setLoading(false);
                  })
              );
            }, 300);
          });
        },
      });
    }
  };
  // const onCheck = (keys: any, info: any) => {
  //   getDeleteData(info, data);
  // };

  return (
    <Tree
      // checkable
      onExpand={onExpand}
      expandedKeys={expandedKeys}
      autoExpandParent={autoExpandParent}
      onSelect={onSelect}
      // onCheck={onCheck}
      selectedKeys={selectedKeys}
      treeData={treeData}
    />
  );
};

export default Delete;
