import React, { useState } from "react";
import axios from 'axios'
import { MainPage } from "../components/main/mainPage/Main";

export async function getServerSideProps() {
  const data = await axios.post("http://localhost:3000/api/lending/get", {}, { withCredentials: false })
  const lendingData = { ...data.data };
  return { props: { lendingData } };
}

export default function Main({ lendingData }) {

  const [lending, setLending] = useState(lendingData);
  return (
    <>
      <MainPage lending={lending} />
    </>
  );
}
