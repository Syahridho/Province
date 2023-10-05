import { useEffect, useState } from "react";
import { getInitialData } from "../utils";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

// react-icon
import { BsArrowLeftShort } from "react-icons/bs";

const Details = () => {
  const { id } = useParams();
  const travelId = parseInt(id);
  const [datas, setDatas] = useState(getInitialData());
  const [details, setDetails] = useState({});

  useEffect(() => {
    const selectData = datas[travelId - 1];
    if (selectData) {
      setDetails(selectData);
    } else {
      setDetails(null);
    }
  }, [id, datas]);

  return (
    <div className="container mx-auto">
      <div className="relative">
        <h1 className="font-semibold text-center text-xl py-4">DETAIL</h1>
        <Link to={"/"} className="inline-block absolute top-5 left-6">
          <BsArrowLeftShort className="w-6 h-6" />
        </Link>
      </div>

      {details ? (
        <div className="mx-auto w-96 rounded overflow-hidden my-10">
          <div className="rounded overflow-hidden shadow">
            <img src={details.image} alt="" />
          </div>
          <h1 className="text-3xl font-semibold mt-6 ">{details.title}</h1>
          <p className="mt-2 mb-5">Ibu Kota : {details.capital}</p>
          <p className="text-justify">{details.description}</p>
        </div>
      ) : (
        <p>Data Gagal</p>
      )}
    </div>
  );
};

export default Details;
