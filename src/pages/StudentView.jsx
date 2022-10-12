import StudentCard from "../components/StudentCard";

const StudentView = (props) => {
  let inds = [...Array(10).keys()];
  const stududentList = inds.map((ind) => {
    return <StudentCard key={ind}></StudentCard>;
  });
  return stududentList;
};

export default StudentView;
