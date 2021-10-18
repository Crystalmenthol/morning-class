const workingRecords = [
  {
    name: "Tadsika Khongkasawan",
    email: "Tadsika@odds.team",
    phoneNumber: "0818888888",
    contact: "Jill(0888888888)",
    site: "odds",
    status: "submitted",
  },
  {
    name: "Glock Glock",
    email: "glock@odds.team",
    phoneNumber: "0818888888",
    contact: "Jill(0888888888)",
    site: "odds",
    status: "submitted",
  },
  {
    name: "Fame Fame",
    email: "fameanunn@odds.team",
    phoneNumber: "0818888888",
    contact: "Jill(0888888888)",
    site: "odds",
    status: "submitted",
  },
  {
    name: "Smile Smile",
    email: "smile@odds.team",
    phoneNumber: "0818888888",
    contact: "Jill(0888888888)",
    site: "odds",
    status: "submitted",
  },
  {
    name: "Wut Wut",
    email: "wutwut@odds.team",
    phoneNumber: "0818888888",
    contact: "Jill(0888888888)",
    site: "odds",
    status: "submitted",
  },
  {
    name: "Tadsika Khongkasawan",
    email: "Tadsika@odds.team",
    phoneNumber: "0818888888",
    contact: "Jill(0888888888)",
    site: "odds",
    status: "submitted",
  },
  {
    name: "Glock Glock",
    email: "glock@odds.team",
    phoneNumber: "0818888888",
    contact: "Jill(0888888888)",
    site: "odds",
    status: "submitted",
  },
  {
    name: "Fame Fame",
    email: "fameanunn@odds.team",
    phoneNumber: "0818888888",
    contact: "Jill(0888888888)",
    site: "odds",
    status: "submitted",
  },
  {
    name: "Smile Smile",
    email: "smile@odds.team",
    phoneNumber: "0818888888",
    contact: "Jill(0888888888)",
    site: "odds",
    status: "submitted",
  },
  {
    name: "Wut Wut",
    email: "wutwut@odds.team",
    phoneNumber: "0818888888",
    contact: "Jill(0888888888)",
    site: "odds",
    status: "submitted",
  }
];

function Table() {
  return (
    <table className="space-y-4 text-center">
      <thead>
        <tr>
          <th className="w-2/12">Name</th>
          <th className="w-2/12">Email</th>
          <th className="w-2/12">Phone Number</th>
          <th className="w-2/12">Contact</th>
          <th className="w-2/12">Site</th>
          <th className="w-2/12">Status</th>
          <th className="w-2/12">Bell</th>
        </tr>
      </thead>
      <tbody>
        {workingRecords.map((workingRecord) => {
          return (
            <tr>
              <td>{workingRecord.name}</td>
              <td>{workingRecord.email}</td>
              <td>{workingRecord.phoneNumber}</td>
              <td>{workingRecord.contact}</td>
              <td>{workingRecord.site}</td>
              <td className="text-green-600">{workingRecord.status}</td>
              <td>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#444444">
                  <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z" />
                </svg>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
export default Table;
