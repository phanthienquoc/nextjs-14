"use client";
import type { TableProps } from "antd";
import { Table, Tag, Space } from "antd";
import { IUser, IUserTable } from "./users.type";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

const columns: TableProps<IUser>["columns"] = [
  {
    title: "id",
    dataIndex: "id",
  },
  {
    title: "name",
    dataIndex: "name",
  },
  {
    title: "Username",
    dataIndex: "username",
  },
  {
    title: "address",
    key: "address",
    dataIndex: "address",
    render: (_, { address }: any) => (
      <>
        {address.street}, {address.suite}, {address.city}, {address.zipcode}
      </>
    ),
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];

const UserTable = (props: IUserTable) => {
  const { users, meta } = props;

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const _handleChange = (pagination: any) => {
    console.log(">> check page", pagination);
    if (pagination && pagination.current) {
      const params = new URLSearchParams(searchParams);
      params.set("page", pagination.current);
      replace(`${pathname}?${params.toString()}`);
    }
  };

  return (
    <Table
      bordered
      columns={columns}
      rowKey={"id"}
      dataSource={users}
      onChange={_handleChange}
      pagination={{
        current: meta?.current,
        pageSize: meta?.pageSize,
        total: meta?.total,
        showTotal: (total, range) => (
          <div>{`${range[0]}- ${range[1]} of ${total}`}</div>
        ),
      }}
    />
  );
};

export default UserTable;
