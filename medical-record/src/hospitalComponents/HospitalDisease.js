import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router";
import { useGlobalContext } from "../context/Context";

import pdfImage from "../img/pdf-image.png";
import axios from "axios";
import Loader from "../LoaderComponents/Loader";

const baseUrl = "http://localhost:8080/hospital";

const HospitalDiseaseContent = () => {
  const { Alert, alert, setAlert, showAlert, userToken } = useGlobalContext();
  const [isLoading, setIsLoading] = useState(false);
  const [disease, setDisease] = useState({
    name: "Default Disease",
    document: [],
    medicine: [],
  });

  useEffect(() => {
    setIsLoading(true);
    axios.get(`${baseUrl}/diseases`).then((res) => {
      console.log("disease", res.data);
      const diseaseData = res.data.disease;
      const err = res.data.error_msg;
      if (err.show) {
        showAlert(true, err.type, err.msg);
        return;
      }
      setDisease({
        name: diseaseData.name,
        document: diseaseData.document,
        medicine: diseaseData.medicine,
      });
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <Loader />;
  }
  return (
    <>
      <div className={alert.show ? "top-alert" : ""}>
        {alert.show && <Alert {...alert} removeAlert={showAlert} />}
      </div>
      <div className="col-lg-8 col-sm-8 col-12 order-1 order-sm-2" id="pSec9">
        <div className="disease-back-link">
          <a href="/user/profile">
            <i className="fa fa-arrow-left" aria-hidden="true"></i>Disease
          </a>
        </div>
        <div id="sub4">
          <div className="container">
            <div className="add-documents">
              <h5 id="name1" style={{ color: "#070707" }}>
                Disease Name-: {disease.name}
              </h5>
              {/* <button id="myBtn" data-toggle="modal" data-target="#myModal" className="add-documents-button"
                    onclick=oepnModal()>Edit <img src="../img/profile-edit-icon.png">
                </button> */}
            </div>
            <div className="disease-flexbox">
              <h5 id="name1" style={{ color: "#383737" }}>
                Uploaded Documents
              </h5>
              {disease.document.map((doc, index) => (
                <div
                  className="media"
                  style={{ background: "rgb(179, 232, 241)" }}
                >
                  <img
                    className="pdf-img align-self-center mr-3"
                    src={pdfImage}
                    alt="Generic placeholder image"
                    style={{ width: "80px" }}
                  />
                  <div
                    style={{ display: "inline-block" }}
                    className="media-heading align-self-center"
                  >
                    {doc.filename}
                  </div>
                  <div className="media-body">
                    <p>
                      <a
                        href={`/user/download/document/pdf?pdfdownload=${doc.filename}`}
                        style={{ color: "black" }}
                      >
                        <i
                          className="fa fa-download fa-3x"
                          aria-hidden="true"
                        ></i>
                      </a>
                    </p>
                  </div>
                </div>
              ))}
            </div>
            {/* <div className="disease-flexbox sub4-2"> */}
            <h5 id="name1">Medicine</h5>
            {disease.medicine.map((med, index) => (
              <div
                className="media"
                style={{ background: "rgb(179, 232, 241)" }}
              >
                <img
                  className="pdf-img align-self-center mr-3"
                  src={pdfImage}
                  alt="Generic placeholder image"
                  style={{ width: "80px" }}
                />
                <div
                  style={{ display: "inline-block" }}
                  className="media-heading align-self-center"
                  id="mobTitle"
                >
                  {med.filename}
                </div>
                <div className="media-body">
                  <p>
                    <a
                      href={`/user/download/medicine/pdf?pdfdownload=${med.filename}`}
                      style={{ color: "black" }}
                    >
                      <i
                        className="fa fa-download fa-3x"
                        aria-hidden="true"
                      ></i>
                    </a>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default HospitalDiseaseContent;
