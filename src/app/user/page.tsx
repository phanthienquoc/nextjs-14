import UserTable from "@/components/users/users.table";

const User = async (props: any) => {
  const LIMIT = props?.searchParams?.limit ?? 2;
  const page = props?.searchParams?.page ?? 1;
  const fetch_page = page - 1;

  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users?_start=${fetch_page}&_limit=${LIMIT}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const totalCount = res?.headers?.get("x-total-count")?.toString() ?? 0;
  const data = await res.json();

  return (
    <div>
      <h1>User</h1>
      <p>User content goes here</p>
      <div>
        <UserTable
          users={data}
          meta={{
            current: page,
            pageSize: LIMIT,
            total: totalCount,
          }}
        />
      </div>
    </div>
  );
};

export default User;
