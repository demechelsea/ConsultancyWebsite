import React from "react";

const ItalyUSA = () => {
  return (
    <div className="packages__content">
      <h3 className="packages__title">ITALY-USA</h3>

      <div className="packages__box">
      <div className="packages__group">
          <div className="packages__data">
            <i class="bx bx-badge-check"></i>

            <div>
              <h3 className="packages__name">250K</h3>
              <span className="packages__level">Total Payament</span>
            </div>
          </div>

          <div className="packages__data">
            <i class="bx bx-badge-check"></i>

            <div>
              <h3 className="packages__name">85%</h3>
              <span className="packages__level">Success rate</span>
            </div>
          </div>

          <div className="packages__data">
            <i class="bx bx-badge-check"></i>

            <div>
              <h3 className="packages__name">10% payment</h3>
              <span className="packages__level">When getting acceptance</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItalyUSA;
