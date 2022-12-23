import styles from "../../styles/firstPage.module.css";

import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap CSS
import { useEffect } from "react";

import { HiOutlineClock } from "react-icons/hi";
import { FiList } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { FaCalendarDay , FaLock} from "react-icons/fa";

export default function bootstrapDesign() {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <div>
      <div className="container py-4">
        <div className="row">
          <div className="col ">
            <h4 class={styles.heading}>Your booking information</h4>
            <p>
              <FiList className="mb-1" /> Subject: The University of New South
              Wales / Computer Science & Engineering / Data Science / Machine
              Learning
            </p>
            <p>
              <HiOutlineClock className="mb-1" /> 6 hours in 3 sessions
              ﹙flexible timing﹚
            </p>
          </div>
        </div>
        <div className="row py-3">
          <div className="col-lg-4 col-md-5">
            <h4 class={styles.heading}>Checkout</h4>
            <p>Choose a payment platform</p>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label class="form-check-label" for="flexCheckChecked">
                Credit or Debit Card
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label class="form-check-label" for="flexCheckDefault">
                Paypal
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label class="form-check-label" for="flexCheckDefault">
                afterpay
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label class="form-check-label" for="flexCheckDefault">
                Alipay
              </label>
            </div>
          </div>
          <div className="col-lg-8 col-md-7  ">
            <div class="input-group mb-3">
              <input
                type="text"
                class="form-control"
                placeholder="Name on card"
                aria-label="Cardname"
                aria-describedby="basic-addon1"
              />
            </div>
            <div class="input-group mb-3">
              <input
                type="text"
                class="form-control"
                placeholder="Card Number"
                aria-label="Cardnumber"
                aria-describedby="basic-addon1"
              />
              <span class="input-group-text" id="basic-addon1">
                <FaLock/>
              </span>
            </div>
            <div className="row">
              <div className="col">
                <input
                  type="text"
                  class="form-control"
                  placeholder="MM"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>
              <div className="col">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Username"
                  aria-label="Username"
                  aria-describedby="basic-addon2"
                />
              </div>
              <div className="col">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Username"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>
            </div>
            <div class="form-check pt-3">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label class="form-check-label" for="flexCheckDefault">
                {" "}
                Remember this card
              </label>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-7 col-md-9 col-12">
            <div className="d-flex justify-content-between flex-direction-row">
              <h4 class={styles.heading}>Sessions</h4>
              <p>Week 1 January 2021</p>
            </div>
            <div className="row mt-3 listItem bg-light py-2">
                <div className="col-md-3 col-12"><span className="fw-bold">1st session</span></div>
                <div className="col-md-4 col-12"><FaCalendarDay className="mb-1"/> monday 1th jan 7Pm</div>
                <div className="col-md-3 col-12"><HiOutlineClock className="mb-1" /> 2 hours</div>
                <div className="col-md-2 col-12 text-danger d-flex justify-content-end"> <MdDelete /></div>
            </div>
            <div className="row mt-3 bg-light py-2">
                <div className="col-md-3 col-12"><span className="fw-bold">2st session</span><br /><span className="fs-6">﹙first time﹚</span></div>
                <div className="col-md-4 col-12"><FaCalendarDay className="mb-1"/> monday 1th jan 7Pm</div>
                <div className="col-md-3 col-12"><HiOutlineClock className="mb-1" /> 2 hours</div>
                <div className="col-md-2 col-12 text-danger d-flex justify-content-end"> <MdDelete /></div>
            </div>
            <div className="row mt-3 bg-light py-2">
                <div className="col-md-3 col-12"><span className="fw-bold">1st session</span> <br /><span className="fs-6">﹙second time﹚</span></div>
                <div className="col-md-4 col-12"><FaCalendarDay className="mb-1"/> monday 1th jan 7Pm</div>
                <div className="col-md-3 col-12"><HiOutlineClock className="mb-1" /> 2 hours</div>
                <div className="col-md-2 col-12 text-danger d-flex justify-content-end"> <MdDelete /></div>
            </div>
            <div className="row mt-3 bg-light py-2">
                <div className="col-md-3 col-12"><span className="fw-bold">1st session</span></div>
                <div className="col-md-4 col-12"><FaCalendarDay className="mb-1"/> monday 1th jan 7Pm</div>
                <div className="col-md-3 col-12"><HiOutlineClock className="mb-1" /> 2 hours</div>
                <div className="col-md-2 col-12 text-danger d-flex justify-content-end"> <MdDelete /></div>
            </div>
          </div>
          <div className="col-lg-5 col-md-3 col-12"></div>
        </div>
      </div>
      <style jsx>{`
        h4 {
        }
      `}</style>
    </div>
  );
}
