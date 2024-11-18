import React, { useEffect, useState } from "react";
import { db } from "../../utils/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import { Table } from "antd";

const ViewResult = () => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "results"));
        const data = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setResults(data);
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchResults();
  }, []);

  const columns = [
    { title: "Student Name", dataIndex: "studentName", key: "studentName" },
    { title: "Course Name", dataIndex: "courseName", key: "courseName" },
    { title: "Grade", dataIndex: "grade", key: "grade" },
  ];

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">View Results</h1>
      <Table dataSource={results} columns={columns} rowKey="id" />
    </div>
  );
};

export default ViewResult;
