interface IUsersListProps {
  users: Array<{[key:string]: any}>;
}

export default function UsersList({users}: IUsersListProps) {
  return (
    <div>
      <p className="md"><span className="black">{ users.length }</span> users</p>
      <ul className="list is--bordered inline-block">
      { users.map((user) => {
        return (
          <li key={user.id}>
            <ul className="flex-baseline">
              <li>{ user.name }</li>
              <li> / </li>
              <li>{ user.email }</li>
            </ul>
          </li>
        )
      })}
      </ul>
    </div>
  );
};
