// logs [
// {number: 1, date: time}
// ,{number: 1, date: new Date().toLocaleString()}
// ,{number: 1, date: time}
// ]
const defaultLogs = [
  { number: 1, date: new Date().toLocaleString() },
  { number: 1, date: new Date().toLocaleString() },
  { number: 1, date: new Date().toLocaleString() },
];
const LogCount = ({ logs = defaultLogs }) => {
  return (
    <table border={1}>
      <thead>
        <tr>
          <th>number</th>
          <th>date</th>
        </tr>
      </thead>
      <tbody>
        {logs.map(({ number, date }, i) => (
          <tr key={i}>
            <td>{number}</td>
            <td>{date}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default LogCount;
