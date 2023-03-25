import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getUserProfile } from "../../services/profile.service";
import styles from "./Home.module.css";

function Home() {
  const [profileData, setprofileData] = useState([]);

  useEffect(function getProfileEffect() {
    getUserProfile()
      .then((res) => setprofileData(res))
      .catch((err) => console.log(err, "from Home"));
  }, []);
  console.log(profileData);
  return (
    <main className={styles["home"]}>
      <div className={styles["home__wrapper"]}>
        <div className={styles["home__title"]}>
          <h2>Select an account</h2>
        </div>
        <div className={styles["home__content"]}>
          {profileData.length > 0 &&
            profileData.map((profile) => (
              <Link
                key={profile.id}
                className={styles["home__content-list"]}
                to={`/profile/${profile.id}`}
                state={profile}
              >
                <img
                  className={styles["home__profile-pic"]}
                  src={profile.profilepicture}
                  alt="profile-pic"
                />
                <h3>{profile.name}</h3>
              </Link>
            ))}
        </div>
      </div>
    </main>
  );
}

export default Home;
