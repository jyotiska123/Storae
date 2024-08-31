import React from "react";
import "./Category.css";
import r1 from "../../../img/categories/ai-fashion-week-voguebus-story.webp";
import r2 from "../../../img/categories/new-york-moc-rf14-3857.webp";
import r3 from "../../../img/categories/32863c3a43c5ce16d745cd32848a2c3f.jpg";
import r4 from "../../../img/categories/l-bvm-133-kalsariya-brother-s-original-imagr5nfybp7g9pn.webp";
import r5 from "../../../img/categories/fashion-3497410_1280.jpg";
import r6 from "../../../img/categories/male-models-noah.jpg";
import { Link } from "react-router-dom";

const Category = () => {
  return (
    <div className="categories">
      <div className="col">
        <div className="row">
          <img style={{ width: "330px", height: "300px" }} src={r1} />
          <button>
            <Link className="link" to="/products/1">
              Runaway Fashion
            </Link>
          </button>
        </div>
        <div className="row">
          <img src={r2} />
          <button>
            <Link className="link" to="/products/1">
              Women
            </Link>
          </button>
        </div>
      </div>
      <div className="col">
        <div className="row">
          <img
            style={{
              height: "650px",
              width: "350px",
              objectFit: "cover",
              objectPosition: "right",
            }}
            src={r3}
          />
          <button>
            <Link className="link" to="/products/1">
              Elder Community
            </Link>
          </button>
        </div>
      </div>
      <div className="col col-l">
        <div className="row">
          <div className="col">
            <div className="row">
              <img src={r4} />
              <button>
                <Link className="link" to="/products/1">
                  Trendy
                </Link>
              </button>
            </div>
          </div>
          <div className="col">
            <div className="row">
              <img src={r5} />
              <button>
                <Link className="link" to="/products/1">
                  Formal
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          <img src={r6} />
          <button>
            <Link className="link" to="/products/1">
              Men
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Category;
