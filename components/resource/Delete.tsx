import React, { Children, Key, useEffect, useState } from "react";
import { Tree, Switch } from "antd";
import { CarryOutOutlined, FormOutlined } from "@ant-design/icons";
import {
	getData,
	getData_getResourcesByWing,
} from "../../container/resource/__generated__/getData";

const toTitleCase = (str: string) => {
	return str.replace(/\w\S*/g, (txt: string) => {
		return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
	});
};

const Delete: React.FC<{ wing: string; data: getData_getResourcesByWing[] }> =
	({ wing, data }) => {
		const [selectedIds, setSelectedIds] = useState<Key[] | { checked: Key[]; halfChecked: Key[]; }>([]);

		const onSelectTitle = (event: Key[] | { checked: Key[]; halfChecked: Key[]; }) => {
			setSelectedIds(event);
		};

		const treeData = [
			{
				title: toTitleCase(wing),
				key: "0",
				icon: <CarryOutOutlined />,
				children: data.map((heading) => {
					return {
						title: heading.title,
						key: heading.id,
						icon: <CarryOutOutlined />,
						children: heading.objects.map((item) => {
							return { title: item.name, key: item.id };
						}),
					};
				}),
			},
		];

		// const Demo: React.FC<{}> = () => {
		const [showLine, setShowLine] = useState<
			boolean | { showLeafIcon: boolean }
		>(true);
		const [showIcon, setShowIcon] = useState<boolean>(false);
		const [showLeafIcon, setShowLeafIcon] = useState<boolean>(true);

		const onSelect = (selectedKeys: React.Key[], info: any) => {
			console.log("selected", selectedKeys, info);
		};

		const onSetLeafIcon = (checked: boolean) => {
			setShowLeafIcon(checked);
			setShowLine({ showLeafIcon: checked });
		};

		const onSetShowLine = (checked: boolean) => {
			setShowLine(checked ? { showLeafIcon } : false);
		};

		return (
			<div>
				<div style={{ marginBottom: 16 }}>
					showLine: <Switch checked={!!showLine} onChange={onSetShowLine} />
					<br />
					<br />
					showIcon: <Switch checked={showIcon} onChange={setShowIcon} />
					<br />
					<br />
					showLeafIcon:{" "}
					<Switch checked={showLeafIcon} onChange={onSetLeafIcon} />
				</div>
				<Tree
					onCheck={onSelectTitle}
					checkable={true}
					showLine={showLine}
					showIcon={showIcon}
					defaultExpandedKeys={["0-0-0"]}
					onSelect={onSelect}
					treeData={treeData}
				/>
			</div>
		);
		// };

		// return <>Edit from {wing}</>;
	};

export default Delete;
