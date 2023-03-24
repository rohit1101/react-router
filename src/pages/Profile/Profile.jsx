import React from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import styles from "./Profile.module.css";

function Profile() {
  let { state } = useLocation();
  console.log(state);
  return (
    <Layout>
      <div className={styles["profile__header"]}>
        <div className="header">
          <h2>Profile</h2>
        </div>
        <div className={styles["profile__content-list"]}>
          <img
            className={styles["profile__user-profile"]}
            src={state.profilepicture}
            alt="profile-pic"
          />
          <h3>{state.name}</h3>
        </div>
      </div>
      <div className={styles["profile__content"]}>
        <div className={styles["profile__content-left"]}>
          <img
            className={styles["profile__pic"]}
            src={state.profilepicture}
            alt="profilepic"
          />
          <h2>{state.name}</h2>
          <table id="customers">
            <tbody>
              <tr>
                <td>Username : </td>
                <td>{state.username}</td>
              </tr>
              <tr>
                <td>e-mail : </td>
                <td>{state.email}</td>
              </tr>
              <tr>
                <td>Phone : </td>
                <td>{state.phone}</td>
              </tr>
              <tr>
                <td>Website : </td>
                <td>{state.website}</td>
              </tr>
            </tbody>
          </table>
          <hr />
          <h2 className={styles["flex-content"]}>Company</h2>
          <table>
            <tbody>
              <tr>
                <td>Name : </td>
                <td>{state.company.name}</td>
              </tr>
              <tr>
                <td>catchphrase : </td>
                <td>{state.company.catchPhrase}</td>
              </tr>
              <tr>
                <td>bs : </td>
                <td>{state.company.bs}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className={styles["profile__content-right"]}>
          <p>Address: </p>
          <table>
            <tbody>
              <tr>
                <td>Street : </td>
                <td>{state.address.street}</td>
              </tr>
              <tr>
                <td>Suite : </td>
                <td>{state.address.suite}</td>
              </tr>
              <tr>
                <td>City : </td>
                <td>{state.address.city}</td>
              </tr>
              <tr>
                <td>Zipcode : </td>
                <td>{state.address.zipcode}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
}

export default Profile;
